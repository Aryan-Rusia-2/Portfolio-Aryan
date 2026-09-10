import json
from pathlib import Path

p = Path(__file__).with_name("notion-extract.json")
d = json.loads(p.read_text(encoding="utf-8"))
print("HUB", d.get("_hub"))
print()
for k, v in d.items():
    if k.startswith("_"):
        continue
    print("====", k, "====")
    print("title:", v.get("title"))
    print("cover:", v.get("cover"))
    print("extra:", v.get("extra"))
    print("stats:", v.get("stats"), "blocks", v.get("block_count"))
    for b in v.get("blocks", []):
        t = b.get("type")
        if t in ("h2", "h3", "p", "quote"):
            text = b.get("text", "")
            print(f"  [{t}] {text[:200]}")
        elif t in ("ul", "ol"):
            print(f"  [{t}] {len(b.get('items', []))} items")
            for it in b.get("items", []):
                print("     -", it[:200])
        elif t == "img":
            print(f"  [img] {b.get('file')} caption={b.get('caption')}")
        elif t == "hr":
            print("  [hr]")
        else:
            print("  [?]", t, str(b)[:80])
    print()
