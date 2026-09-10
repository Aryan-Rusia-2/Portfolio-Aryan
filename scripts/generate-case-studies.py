"""Turn notion-extract.json into src/caseStudies.ts."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
EXTRACT = Path(__file__).with_name("notion-extract.json")
OUT = SRC / "caseStudies.ts"

META = {
    "snow-robot": {
        "kicker": "SnowBotics · Technology Lead · 2022–2025",
        "summary": "I led computer vision and navigation for SnowBotics — an outdoor autonomous snow-clearing robot that had to detect obstacles and move safely in winter conditions.",
    },
    "research-viewer": {
        "kicker": "Software · Sole developer · 2025",
        "summary": "A local-first research app for huge document and image archives — browse, annotate, bookmark, and collect material without sending anything to the cloud.",
    },
    "sql-chatbot": {
        "kicker": "AI agents · Databases · 2025",
        "summary": "A production-minded assistant that turns natural language into validated SQL, pulls from more than one database, and answers in plain language — including follow-ups.",
    },
    "scraper": {
        "kicker": "Data engineering · Library of Congress · 2025",
        "summary": "A resumable pipeline that harvested the William Howard Taft Papers: ~770k cataloged images, ~1.5M files, and a 15–20 TB expected archive.",
    },
    "obd-ii": {
        "kicker": "Embedded AI · Team project · 2024",
        "summary": "A compact rally-car diagnostics stack: OBD-II + IMU on an ESP32-S3, TinyML anomaly detection on-device, BLE to a phone, and a Streamlit dashboard on AWS.",
    },
    "kessler": {
        "kicker": "Fuzzy control · Competition · 2023",
        "summary": "A fuzzy-logic controller for the Kessler asteroid game. Took 2nd place in a university competition.",
        "demo": {"label": "View GitHub", "href": "https://github.com/Aryan-Rusia-2/kessler_game-controller"},
    },
    "cpu": {
        "kicker": "Computer architecture · VHDL",
        "summary": "A complete 8-bit CPU: datapath (mux, ALU, registers, accumulator, tri-state buffer), FSM controller, custom JMPR/CSKIP instructions, and an inventory program that fills all 32 memory slots.",
    },
    "whatsapp": {
        "kicker": "NLP · Streamlit · 2023",
        "summary": "A live Streamlit dashboard for WhatsApp conversation stats, sentiment, and activity patterns.",
        "demo": {"label": "Open live demo", "href": "https://whatsapp-chat-analyzer-8zuxje5cvjzeokvi9he55g.streamlit.app/"},
    },
    "elevator-project": {
        "kicker": "Digital design · Zybo Z7",
        "summary": "Three labs on Zybo Z7: a Moore FSM for pattern '00XX1', reverse-engineering SequenceSpectrum, and a four-floor elevator with emergency timing.",
    },
    "motor-project": {
        "kicker": "ECE 315 · Winter 2023",
        "summary": "FreeRTOS stepper-motor control on the Zybo Z7: UART interface, measured speed/acceleration limits, and a hardware emergency stop.",
    },
    "nav": {
        "kicker": "Graphs · Edmonton · 2022",
        "summary": "A campus and city route planner for Edmonton — search, graph search, and a usable map UI.",
        "demo": {"label": "View GitHub", "href": "https://github.com/Aryan-Rusia-2/Navigation-System"},
    },
    "research-intern": {
        "kicker": "Research internship · Prof. Jie Han",
        "summary": "Monte Carlo / Metropolis study of whether ionic devices can represent Ising-like magnetization. Nominated as HQP for the NSERC report.",
    },
}

# Existing detailed pages that stay (no Notion source).
LAPTOP_IMPORTS = """import laptop from "./assets/project/Laptop.png";
"""

ORDER = [
    "snow-robot",
    "research-viewer",
    "sql-chatbot",
    "scraper",
    "obd-ii",
    "kessler",
    "cpu",
    "whatsapp",
    "elevator-project",
    "motor-project",
    "nav",
    "research-intern",
]


def ts_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def ident(path: str) -> str:
    name = path.replace("/", "_").replace(".", "_").replace("-", "_")
    name = re.sub(r"[^a-zA-Z0-9_]", "_", name)
    if name[0].isdigit():
        name = "img_" + name
    return name


def clean_item(text: str) -> str:
    text = text.replace(" — ", "; ")
    text = re.sub(r"\s+", " ", text).strip()
    return text


def cover_size(slug: str, cover: str | None) -> int | None:
    if not cover:
        return None
    p = SRC / "assets" / "case" / cover
    if p.exists():
        return p.stat().st_size
    return None


def file_size(rel: str) -> int | None:
    p = SRC / "assets" / "case" / rel
    if p.exists():
        return p.stat().st_size
    return None


def promote_headings(blocks: list[dict]) -> list[dict]:
    has_h2 = any(b.get("type") == "h2" for b in blocks)
    if has_h2:
        return blocks
    out = []
    for b in blocks:
        if b.get("type") == "h3":
            out.append({**b, "type": "h2"})
        else:
            out.append(b)
    return out


def attach_captions(blocks: list[dict]) -> list[dict]:
    out = []
    i = 0
    while i < len(blocks):
        b = blocks[i]
        nxt = blocks[i + 1] if i + 1 < len(blocks) else None
        if (
            b.get("type") == "img"
            and nxt
            and nxt.get("type") == "p"
            and len(nxt.get("text") or "") < 220
            and not (nxt.get("text") or "").endswith(":")
        ):
            caption = nxt["text"].strip()
            out.append({**b, "caption": caption, "alt": b.get("alt") if b.get("alt") and b.get("alt") != Path(b.get("file") or "image").name else caption})
            i += 2
            continue
        out.append(b)
        i += 1
    return out


def skip_redundant_hero(blocks: list[dict], cover: str | None) -> list[dict]:
    csize = cover_size(cover.split("/")[0], cover) if cover else None
    if not blocks or blocks[0].get("type") != "img":
        return blocks
    rel = blocks[0].get("file")
    if csize and rel and file_size(rel) == csize:
        return blocks[1:]
    return blocks


def drop_hrs(blocks: list[dict]) -> list[dict]:
    return [b for b in blocks if b.get("type") != "hr"]


def normalize(slug: str, raw_blocks: list[dict], cover: str | None) -> list[dict]:
    blocks = []
    for b in raw_blocks:
        if b.get("type") in ("ul", "ol"):
            items = [clean_item(x) for x in b.get("items") or [] if clean_item(x)]
            if items:
                blocks.append({**b, "items": items})
        elif b.get("type") in ("p", "h2", "h3", "quote"):
            text = (b.get("text") or "").strip()
            if text:
                blocks.append({**b, "text": text})
        elif b.get("type") == "img" and b.get("file") and not b.get("failed"):
            blocks.append(b)
        elif b.get("type") == "hr":
            blocks.append(b)
    blocks = skip_redundant_hero(blocks, cover)
    blocks = attach_captions(blocks)
    blocks = drop_hrs(blocks)
    blocks = promote_headings(blocks)
    return blocks


def emit_block(b: dict, img_idents: dict[str, str], indent: str = "      ") -> str:
    t = b["type"]
    if t in ("p", "h2", "h3", "quote"):
        return f"{indent}{{ type: {ts_str(t)}, text: {ts_str(b['text'])} }}"
    if t in ("ul", "ol"):
        items = ",\n".join(f"{indent}    {ts_str(it)}" for it in b["items"])
        return f"{indent}{{ type: {ts_str(t)}, items: [\n{items},\n{indent}  ] }}"
    if t == "img":
        ident_name = img_idents[b["file"]]
        alt = b.get("caption") or b.get("alt") or "Project figure"
        cap = b.get("caption")
        extra = f", caption: {ts_str(cap)}" if cap else ""
        return f"{indent}{{ type: \"img\", src: {ident_name}, alt: {ts_str(alt)}{extra} }}"
    if t == "hr":
        return f"{indent}{{ type: \"hr\" }}"
    raise ValueError(t)


def extra_cpu_blocks() -> list[str]:
    # Unique older figures Notion did not re-upload at the same resolution.
    return [
        '      { type: "h2", text: "Additional lab figures" },',
        '      { type: "img", src: cpuInterface, alt: "CPU interface on Zybo Z7" },',
        '      { type: "img", src: cpuCustom, alt: "Custom inventory program" },',
    ]


def extra_elevator_blocks() -> list[str]:
    return [
        '      { type: "img", src: elevatorPart2, alt: "SequenceSpectrum on the board" },',
    ]


def extra_research_blocks() -> list[str]:
    # Keep older slide exports that are visually distinct if Notion set is already complete.
    # Notion already has 10 images covering the write-up; skip extras.
    return []


def laptop_study() -> str:
    return """  {
    slug: "laptop-price-predictor",
    title: "Laptop Price Predictor",
    kicker: "Machine learning · Dec 2023",
    summary:
      "A Streamlit app that turns laptop specifications into a clear price estimate. Random Forest reached 88% accuracy after comparing seven regression models.",
    demo: {
      label: "Open live demo",
      href: "https://laptoppricepredictor-byaryan.streamlit.app/",
    },
    hero: laptop,
    blocks: [
      {
        type: "p",
        text: "Laptop pricing is noisy — brand, RAM, storage, GPU, and display all move the number. I wanted a tool that made that trade-off obvious instead of sending people through a dozen product pages.",
      },
      { type: "img", src: laptop, alt: "Laptop Price Predictor interface" },
      { type: "h2", text: "How it works" },
      { type: "h3", text: "Streamlit" },
      {
        type: "p",
        text: "The UI is Streamlit: pick specs, get a live prediction. Fast enough to explore “what if I upgrade RAM” without leaving the page.",
      },
      { type: "h3", text: "scikit-learn" },
      {
        type: "p",
        text: "I compared several regressors on the same feature set and kept the one that generalized best.",
      },
      {
        type: "ul",
        items: [
          "Linear Regression",
          "Lasso Regression",
          "Ridge Regression",
          "Decision Tree",
          "K-Nearest Neighbors",
          "Random Forest — 88% accuracy",
          "XGBoost",
        ],
      },
      {
        type: "p",
        text: "Average accuracy across models was about 80%. Random Forest was the clear winner.",
      },
      { type: "h2", text: "Stack" },
      {
        type: "ul",
        items: [
          "Python for the full application",
          "Pickle to persist the trained model and dataset",
          "NumPy for array work and numeric transforms",
        ],
      },
    ],
  }"""


def main():
    data = json.loads(EXTRACT.read_text(encoding="utf-8"))
    imports: list[str] = [
        'import laptop from "./assets/project/Laptop.png";',
        'import cpuInterface from "./assets/Cpu/cpu_interface.PNG";',
        'import cpuCustom from "./assets/Cpu/custom.PNG";',
        'import elevatorPart2 from "./assets/Elevator/part2.png";',
    ]
    img_idents: dict[str, str] = {}
    used_idents: set[str] = {"laptop", "cpuInterface", "cpuCustom", "elevatorPart2"}

    studies = []
    for slug in ORDER:
        page = data[slug]
        cover = page.get("cover")
        blocks = normalize(slug, page.get("blocks") or [], cover)
        files = []
        if cover:
            files.append(cover)
        for b in blocks:
            if b.get("type") == "img" and b.get("file"):
                files.append(b["file"])
        for f in files:
            if f in img_idents:
                continue
            name = ident(f)
            if name in used_idents:
                name = name + "_x"
            used_idents.add(name)
            img_idents[f] = name
            imports.append(f"import {name} from {ts_str('./assets/case/' + f)};")

        meta = META[slug]
        hero_ident = img_idents[cover] if cover else img_idents[blocks[0]["file"]]
        lines = [
            "  {",
            f"    slug: {ts_str(slug)},",
            f"    title: {ts_str(page.get('title') or slug)},",
            f"    kicker: {ts_str(meta['kicker'])},",
            f"    summary: {ts_str(meta['summary'])},",
        ]
        if meta.get("demo"):
            lines.append(f"    demo: {{ label: {ts_str(meta['demo']['label'])}, href: {ts_str(meta['demo']['href'])} }},")
        lines.append(f"    hero: {hero_ident},")
        lines.append("    blocks: [")
        emitted = []
        inserted_elevator_extra = False
        for b in blocks:
            emitted.append(emit_block(b, img_idents) + ",")
            if slug == "elevator-project" and not inserted_elevator_extra:
                if b.get("type") == "img" and "pci2" in (b.get("file") or ""):
                    emitted.extend(extra_elevator_blocks())
                    inserted_elevator_extra = True
        if slug == "cpu":
            emitted.extend(extra_cpu_blocks())
        if slug == "elevator-project" and not inserted_elevator_extra:
            emitted.extend(extra_elevator_blocks())
        lines.extend(emitted)
        lines.append("    ],")
        lines.append("  }")
        studies.append("\n".join(lines))

    studies.append(laptop_study())

    header = """import type { CaseStudy } from "./caseTypes";
"""
    # We'll define types in caseTypes or keep them here and re-export.
    # Simpler: define types in this file and have data.ts import CaseStudy from here.

    content = (
        "\n".join(imports)
        + "\n\n"
        + """export type CaseBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "hr" }
  | { type: "img"; src: string; alt: string; caption?: string };

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  demo?: { label: string; href: string };
  hero: string;
  blocks: CaseBlock[];
};

export const caseStudies: CaseStudy[] = [
"""
        + ",\n".join(studies)
        + """
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
"""
    )
    OUT.write_text(content, encoding="utf-8")
    print("Wrote", OUT, "bytes", OUT.stat().st_size)


if __name__ == "__main__":
    main()
