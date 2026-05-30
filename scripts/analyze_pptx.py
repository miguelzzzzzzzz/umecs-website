"""Extract slide text + image relationships from UMECS PPTX."""
import zipfile
import re
import os
import xml.etree.ElementTree as ET
from pathlib import Path

NS = {
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "p": "http://schemas.openxmlformats.org/presentationml/2006/main",
    "rel": "http://schemas.openxmlformats.org/package/2006/relationships",
}

pptx = Path(r"c:\Users\Administrator\Downloads\Unika-Mechanical-Engineering-Construction-Services (1).pptx")
out_dir = Path(r"c:\Users\Administrator\Documents\UMECS-WEBSITE\public\assets")

with zipfile.ZipFile(pptx) as z:
    # Build rels map: rId -> media path
    rels = {}
    for name in z.namelist():
        if name.startswith("ppt/slides/_rels/slide") and name.endswith(".rels"):
            slide_num = re.search(r"slide(\d+)\.xml\.rels", name).group(1)
            root = ET.fromstring(z.read(name))
            slide_rels = {}
            for rel in root.findall("rel:Relationship", NS):
                slide_rels[rel.get("Id")] = rel.get("Target")
            rels[slide_num] = slide_rels

    slides = sorted(
        [n for n in z.namelist() if re.match(r"ppt/slides/slide\d+\.xml$", n)],
        key=lambda x: int(re.search(r"slide(\d+)", x).group(1)),
    )

    for slide_path in slides:
        slide_num = re.search(r"slide(\d+)", slide_path).group(1)
        content = z.read(slide_path).decode("utf-8", errors="ignore")
        texts = re.findall(r"<a:t>([^<]+)</a:t>", content)
        text = " ".join(texts).replace("&amp;", "&")

        # Find embedded image rIds in slide
        rids = re.findall(r'r:embed="(rId\d+)"', content)
        images = []
        for rid in rids:
            target = rels.get(slide_num, {}).get(rid, "")
            if "media/" in target:
                images.append(os.path.basename(target))

        print(f"\n=== Slide {slide_num} ===")
        print(f"Text: {text[:200]}...")
        print(f"Images: {images}")
