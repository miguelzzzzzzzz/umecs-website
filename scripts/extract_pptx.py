import zipfile, re, os

pptx = r"c:\Users\Administrator\Downloads\Unika-Mechanical-Engineering-Construction-Services (1).pptx"
out_dir = r"c:\Users\Administrator\Documents\UMECS-WEBSITE\public\assets"
os.makedirs(out_dir, exist_ok=True)

with zipfile.ZipFile(pptx) as z:
    if "ppt/theme/theme1.xml" in z.namelist():
        theme = z.read("ppt/theme/theme1.xml").decode("utf-8", errors="ignore")
        colors = re.findall(r'srgbClr val="([A-Fa-f0-9]{6})"', theme)
        print("Theme colors:", colors)

    media = [n for n in z.namelist() if n.startswith("ppt/media/")]
    for m in media:
        fname = os.path.basename(m)
        with open(os.path.join(out_dir, fname), "wb") as f:
            f.write(z.read(m))
    print(f"Extracted {len(media)} images")
