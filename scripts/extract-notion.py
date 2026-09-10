"""Fetch Notion portfolio pages, extract blocks, download images."""
from __future__ import annotations

import json
import os
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "src" / "assets" / "case"
JSON_OUT = ROOT / "scripts" / "notion-extract.json"

PAGES = {
    "snow-robot": {
        "id": "2f6a57fe8fbd80d19fb5deebc9ff8793",
        "title": "Autonomous Snow Clearing Robot",
    },
    "research-viewer": {
        "id": "2f6a57fe8fbd80a9b097dce5ed42a104",
        "title": "Research Viewer Desktop Application",
    },
    "obd-ii": {
        "id": "2f7a57fe8fbd80c1849ad1380a4e8d3c",
        "title": "OBD-II Based Auto Dynamics System",
    },
    "sql-chatbot": {
        "id": "2f6a57fe8fbd808eb328eb70daa6fd6d",
        "title": "SQL-Backed AI Chatbot",
    },
    "scraper": {
        "id": "2f6a57fe8fbd80e8910ffc9897a4ef18",
        "title": "Scalable Web Scraping Pipeline",
    },
    "kessler": {
        "id": "2f6a57fe8fbd80de81b0fe3de25f5855",
        "title": "Kessler Game Controller",
    },
    "cpu": {
        "id": "2f6a57fe8fbd80e9b696c3bcde83d765",
        "title": "Custom 8-Bit CPU Design",
    },
    "nav": {
        "id": "2f6a57fe8fbd8001b74ceda19a736aa0",
        "title": "Edmonton Route Finder Application",
    },
    "elevator-project": {
        "id": "2f6a57fe8fbd80609729e25e39fd61b3",
        "title": "Elevator Control System on Zybo Z7",
    },
    "whatsapp": {
        "id": "2f6a57fe8fbd809992c9ddcb79a31a52",
        "title": "WhatsApp Chat Analyzer",
    },
    "research-intern": {
        "id": "2f6a57fe8fbd8099a68dfe729c73a97b",
        "title": "Monte Carlo Simulation of Ionic Devices",
    },
    "motor-project": {
        "id": "2f6a57fe8fbd8088b98be1307a05dd50",
        "title": "Stepper Motor Control",
    },
}

HUB_ID = "2f6a57fe8fbd80ec93eadc0513442995"
SITE = "https://jagged-muskmelon-015.notion.site"
API = "https://notion-api.splitbee.io/v1/page/"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"


def fetch(url: str, dest: Path | None = None) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = resp.read()
        if dest:
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_bytes(data)
        return data


def fetch_page(page_id: str) -> dict:
    url = API + page_id.replace("-", "")
    print(f"FETCH {url}")
    raw = fetch(url)
    return json.loads(raw.decode("utf-8"))


def title_text(props) -> str:
    if not props:
        return ""
    title = props.get("title") or props.get("source")
    if not title:
        return ""
    parts = []
    for chunk in title:
        if isinstance(chunk, list) and chunk:
            parts.append(str(chunk[0]))
        elif isinstance(chunk, str):
            parts.append(chunk)
    return "".join(parts).strip()


def prop_plain(props: dict, key: str) -> str:
    val = props.get(key)
    if not val:
        return ""
    parts = []
    for chunk in val:
        if isinstance(chunk, list) and chunk:
            parts.append(str(chunk[0]))
    return "".join(parts).strip()


def block_value(node: dict) -> dict | None:
    if not node:
        return None
    inner = node.get("value")
    if not inner:
        return None
    if "value" in inner and isinstance(inner["value"], dict) and "id" in inner["value"]:
        return inner["value"]
    if "id" in inner:
        return inner
    return None


def image_filename(source: str) -> str:
    if not source:
        return "image.bin"
    if source.startswith("attachment:"):
        return source.split(":")[-1] or "image.bin"
    parsed = urllib.parse.urlparse(source)
    name = os.path.basename(parsed.path)
    return urllib.parse.unquote(name) or "image.bin"


def image_urls(source: str, block_id: str, space_id: str) -> list[str]:
    urls = []
    if source.startswith("http"):
        urls.append(source)
    encoded = urllib.parse.quote(source, safe="")
    urls.append(
        f"{SITE}/image/{encoded}?table=block&id={block_id}&spaceId={space_id}&userId=&cache=v2"
    )
    urls.append(
        f"{SITE}/image/{encoded}?table=block&id={block_id}&spaceId={space_id}"
    )
    return urls


def download_image(source: str, block_id: str, space_id: str, dest: Path) -> bool:
    if dest.exists() and dest.stat().st_size > 100:
        return True
    last_err = None
    for url in image_urls(source, block_id, space_id):
        try:
            fetch(url, dest)
            if dest.exists() and dest.stat().st_size > 100:
                # reject tiny HTML error pages
                head = dest.read_bytes()[:80]
                if b"<html" in head.lower() or b"<!doctype" in head.lower():
                    dest.unlink(missing_ok=True)
                    last_err = f"HTML from {url}"
                    continue
                print(f"  OK  {dest.name} ({dest.stat().st_size} bytes) via {url[:90]}")
                return True
        except Exception as e:
            last_err = str(e)
    print(f"  FAIL {dest.name}: {last_err}")
    return False


def walk_blocks(data: dict, ids: list[str], slug: str, img_dir: Path, counters: dict) -> list[dict]:
    blocks: list[dict] = []
    bullet_buf: list[str] = []
    numbered_buf: list[str] = []

    def flush_bullets():
        nonlocal bullet_buf
        if bullet_buf:
            blocks.append({"type": "ul", "items": bullet_buf})
            bullet_buf = []

    def flush_numbered():
        nonlocal numbered_buf
        if numbered_buf:
            blocks.append({"type": "ol", "items": numbered_buf})
            numbered_buf = []

    def flush_lists():
        flush_bullets()
        flush_numbered()

    def nested_text(node: dict) -> str:
        kids = node.get("content") or []
        texts = []
        for kid in kids:
            kv = block_value(data.get(kid, {}))
            if not kv:
                continue
            t = title_text(kv.get("properties") or {})
            if t:
                texts.append(t)
            if kv.get("content"):
                extra = nested_text(kv)
                if extra:
                    texts.append(extra)
        return " — ".join(texts)

    for bid in ids:
        node = block_value(data.get(bid, {}))
        if not node:
            continue
        typ = node.get("type")
        props = node.get("properties") or {}
        text = title_text(props)

        if typ in ("bulleted_list",):
            flush_numbered()
            extra = nested_text(node)
            item = text
            if extra:
                item = f"{text}: {extra}" if text else extra
            if item:
                bullet_buf.append(item)
            continue

        if typ in ("numbered_list",):
            flush_bullets()
            extra = nested_text(node)
            item = text
            if extra:
                item = f"{text}: {extra}" if text else extra
            if item:
                numbered_buf.append(item)
            continue

        flush_lists()

        if typ in ("header",):
            if text:
                blocks.append({"type": "h2", "text": text})
        elif typ in ("sub_header",):
            if text:
                blocks.append({"type": "h2", "text": text})
        elif typ in ("sub_sub_header",):
            if text:
                blocks.append({"type": "h3", "text": text})
        elif typ in ("text", "quote"):
            if text:
                kind = "quote" if typ == "quote" else "p"
                blocks.append({"type": kind, "text": text})
            # walk children that aren't list items already handled
            kids = node.get("content") or []
            if kids:
                blocks.extend(walk_blocks(data, kids, slug, img_dir, counters))
        elif typ == "to_do":
            if text:
                checked = bool((props.get("checked") or [[]])[0])
                prefix = "[x] " if checked else "[ ] "
                bullet_buf.append(prefix + text)
                flush_lists()
        elif typ == "image":
            source = title_text({"title": props.get("source") or []}) or (
                (props.get("source") or [[""]])[0][0] if props.get("source") else ""
            )
            caption = title_text({"title": props.get("caption") or []})
            fname = image_filename(source)
            counters["img"] = counters.get("img", 0) + 1
            stem = Path(fname).stem
            ext = Path(fname).suffix.lower() or ".png"
            safe = re.sub(r"[^a-zA-Z0-9._-]+", "-", stem).strip("-").lower() or f"img-{counters['img']}"
            out_name = f"{counters['img']:02d}-{safe}{ext}"
            dest = img_dir / out_name
            space_id = node.get("space_id") or ""
            ok = download_image(source, node["id"], space_id, dest)
            if ok:
                counters["ok"] = counters.get("ok", 0) + 1
                blocks.append(
                    {
                        "type": "img",
                        "file": f"{slug}/{out_name}",
                        "alt": caption or fname,
                        "caption": caption or None,
                    }
                )
            else:
                counters["fail"] = counters.get("fail", 0) + 1
                blocks.append(
                    {
                        "type": "img",
                        "file": None,
                        "source": source,
                        "alt": caption or fname,
                        "caption": caption or None,
                        "failed": True,
                    }
                )
            time.sleep(0.15)
        elif typ == "divider":
            blocks.append({"type": "hr"})
        elif typ in ("column_list", "column"):
            kids = node.get("content") or []
            if kids:
                blocks.extend(walk_blocks(data, kids, slug, img_dir, counters))
        elif typ == "callout":
            if text:
                blocks.append({"type": "quote", "text": text})
            kids = node.get("content") or []
            if kids:
                blocks.extend(walk_blocks(data, kids, slug, img_dir, counters))
        elif typ == "code":
            if text:
                blocks.append({"type": "p", "text": text})
        elif typ == "bookmark":
            link = ""
            if props.get("link"):
                link = title_text({"title": props["link"]})
            label = text or link
            if label:
                blocks.append({"type": "p", "text": label + (f" ({link})" if link and link != label else "")})
        elif typ == "page":
            # nested page — skip
            pass
        else:
            if text:
                blocks.append({"type": "p", "text": text})
            kids = node.get("content") or []
            if kids and typ not in ("collection_view", "collection_view_page"):
                blocks.extend(walk_blocks(data, kids, slug, img_dir, counters))

    flush_lists()
    return blocks


def extract_page(slug: str, meta: dict) -> dict:
    data = fetch_page(meta["id"])
    # find the page root
    dashed = None
    for key, node in data.items():
        val = block_value(node)
        if val and val.get("type") == "page" and val.get("id", "").replace("-", "") == meta["id"]:
            dashed = val
            break
    if not dashed:
        # first page-type whose parent is a collection
        for key, node in data.items():
            val = block_value(node)
            if val and val.get("type") == "page" and val.get("content"):
                dashed = val
                break
    if not dashed:
        raise RuntimeError(f"No page root for {slug}")

    props = dashed.get("properties") or {}
    title = title_text(props) or meta["title"]
    cover = (dashed.get("format") or {}).get("page_cover") or ""
    img_dir = OUT_DIR / slug
    img_dir.mkdir(parents=True, exist_ok=True)
    counters = {"img": 0, "ok": 0, "fail": 0}

    cover_file = None
    if cover:
        counters["img"] += 1
        fname = image_filename(cover)
        ext = Path(fname).suffix.lower() or ".png"
        dest = img_dir / f"00-cover{ext}"
        ok = download_image(cover, dashed["id"], dashed.get("space_id") or "", dest)
        if ok:
            cover_file = f"{slug}/{dest.name}"
            counters["ok"] += 1
        else:
            counters["fail"] += 1

    content_ids = dashed.get("content") or []
    blocks = walk_blocks(data, content_ids, slug, img_dir, counters)

    extra = {}
    for k, v in props.items():
        if k == "title":
            continue
        plain = prop_plain(props, k)
        if plain:
            extra[k] = plain

    return {
        "slug": slug,
        "title": title,
        "cover": cover_file,
        "extra": extra,
        "blocks": blocks,
        "stats": counters,
        "block_count": len(blocks),
    }


def extract_hub() -> dict:
    data = fetch_page(HUB_ID)
    titles = []
    for key, node in data.items():
        val = block_value(node)
        if not val:
            continue
        if val.get("type") == "page":
            t = title_text(val.get("properties") or {})
            if t:
                titles.append({"id": val.get("id"), "title": t})
    return {"pages": titles}


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    results = {}
    print("=== HUB ===")
    try:
        hub = extract_hub()
        results["_hub"] = hub
        print("Hub pages:", [p["title"] for p in hub["pages"]])
    except Exception as e:
        print("Hub failed:", e)
        results["_hub"] = {"error": str(e)}

    for slug, meta in PAGES.items():
        print(f"\n=== {slug} ===")
        try:
            results[slug] = extract_page(slug, meta)
            print(
                f"  blocks={results[slug]['block_count']} images_ok={results[slug]['stats'].get('ok')} fail={results[slug]['stats'].get('fail')}"
            )
        except Exception as e:
            print("  ERROR", e)
            results[slug] = {"error": str(e)}

    JSON_OUT.write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding="utf-8")
    print("\nWrote", JSON_OUT)


if __name__ == "__main__":
    main()
