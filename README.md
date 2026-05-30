# UMECS Website

Modern company website for **Unika Mechanical Engineering Construction Services (UMECS)**.

## Tech Stack

- React 19 + Vite 6
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
UMECS-WEBSITE/
├── public/assets/          # Images extracted from company PPTX
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Page sections (Hero, About, Services, etc.)
│   │   └── ui/             # Reusable UI (Button, SectionHeading)
│   ├── data/content.js     # All copy & structured content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Tailwind + brand CSS variables
├── index.html
├── package.json
└── vite.config.js
```

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-red` | `#E31E24` | Primary CTA, accents (from logo) |
| `brand-yellow` | `#FFEB00` | Highlights, badges |
| `brand-navy` | `#44546A` | Headings, dark sections |
| `brand-blue` | `#4472C4` | Secondary actions |
| `brand-brown` | `#3E2723` | Body text |

## Asset Swap Guide

Search for `PLACEHOLDER` comments in the codebase to find images ready for replacement:

- `/assets/image19.jpg` — Company logo
- `/assets/image41.jpg` — Hero background
- `/assets/image30.jpg` — About section photo
- Project cards — `/assets/image37–40.jpg`

## Build for Production

```bash
npm run build
npm run preview
```
