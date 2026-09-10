import json
from pathlib import Path
import urllib.request

API = "https://notion-api.splitbee.io/v1/page/"
PAGES = {
    "kessler": "2f6a57fe8fbd80de81b0fe3de25f5855",
}

def fetch(pid):
    url = API + pid
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read().decode("utf-8"))

def walk_props(obj, found):
    if isinstance(obj, dict):
        for k, v in obj.items():
            walk_props(v, found)
    elif isinstance(obj, list):
        # Notion rich text: ["text", [["a", "url"]]]
        if obj and isinstance(obj[0], str) and len(obj) > 1 and isinstance(obj[1], list):
            for ann in obj[1]:
                if isinstance(ann, list) and len(ann) >= 2 and ann[0] == "a":
                    found.append((obj[0], ann[1]))
        for x in obj:
            walk_props(x, found)

d = fetch(PAGES["kessler"])
found = []
walk_props(d, found)
print("LINKS:")
for text, url in found:
    print(repr(text), "->", url)
