"""Copy Resources folder into public/resources with URL-safe filenames."""
import shutil
from pathlib import Path

RESOURCES = Path(r"C:\Users\Administrator\Documents\UMECS-WEBSITE\Resources")
PUBLIC = Path(r"C:\Users\Administrator\Documents\UMECS-WEBSITE\public\resources")

# Match by prefix to handle encoding differences in dash characters
TEAM_PATTERNS = [
    ("Ronelin", "team-ronelin-frias.jpg"),
    ("Donato", "team-donato-frias.jpg"),
    ("Keanne", "team-keanne-orquiola.jpg"),
    ("Eduardo", "team-eduardo-pura.jpg"),
]

STATIC = {
    "Construction Services.png": "construction-services.png",
    "Mechanical Services.png": "mechanical-services.png",
    "Commercial Specialization.png": "commercial-specialization.png",
    "Max's Fairview.png": "maxs-fairview.png",
    "Tomas Morato Krispy Kreme.jpg": "krispy-kreme-tomas-morato.jpg",
    "Krispy Kreme Iloilo.jpg": "krispy-kreme-iloilo.jpg",
    "Key Clients1.png": "client-maxs-group.png",
    "Key Clients2.png": "client-jamba.png",
    "Key Clients3.png": "client-krispy-kreme.png",
}

PUBLIC.mkdir(parents=True, exist_ok=True)

logo_src = Path(r"C:\Users\Administrator\Documents\UMECS-WEBSITE\public\assets\image19.jpg")
if logo_src.exists():
    shutil.copy2(logo_src, PUBLIC / "logo.jpg")

about_src = Path(r"C:\Users\Administrator\Documents\UMECS-WEBSITE\public\assets\image30.jpg")
if about_src.exists():
    shutil.copy2(about_src, PUBLIC / "about-team.jpg")

for src_name, dst_name in STATIC.items():
    src = RESOURCES / src_name
    if src.exists():
        shutil.copy2(src, PUBLIC / dst_name)
        print(f"OK  {src_name}")

all_files = list(RESOURCES.iterdir())
for prefix, dst_name in TEAM_PATTERNS:
    match = next((f for f in all_files if f.name.startswith(prefix)), None)
    if match:
        shutil.copy2(match, PUBLIC / dst_name)
        print(f"OK  {match.name} -> {dst_name}")
    else:
        print(f"MISSING team: {prefix}")
