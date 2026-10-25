# Liquid Gold, Under Threat — Australia's Honey Industry

FIT3179 Data Visualisation 2 (Semester 2, 2026) · Monash University · Author: **[Your name]**

A single scrolling web page built with Vega-Lite (and Vega for the treemap) that tells the story of
Australian beekeeping, honey production and trade, the value of honey bee pollination, and the spread
of varroa mite.

## Repository layout

```
index.html                 the page (story text, layout, chart containers)
css/style.css              typography, layout, colours
js/main.js                 embeds every spec with a shared theme
specs/                     one human-readable JSON spec per chart (c01 … c13)
data/                      CSV / JSON data used by the specs
docs/SKETCH_GUIDE.md       checklist for drawing the A4 sketch by hand
sketch.pdf                 ← add your scanned hand-drawn sketch here
```

## Charts and idioms

| Spec | Chart | Idiom |
|---|---|---|
| c01 | Hive intensity by state + beekeepers 2018→2023 | **Choropleth map** + dumbbell (linked hover, dropdown) |
| c03 | Commercial vs hobby share | Waffle charts |
| c04 | Honey production 2011-12 → 2022-23 | Annotated area chart |
| c05 | Volume vs farmgate price | Connected scatterplot |
| c06 | Public-land apiary sites | **Proportional symbol map** |
| c07 | Imports vs exports | Diverging stacked bar |
| c08 | Export destinations 2015–2024 | **Flow map** with year slider |
| c09 | Top buyers × year | Heatmap |
| c10 | 2024 buyers: volume × price | Marimekko |
| c11 | Value of pollination by state & crop | Treemap (Vega) |
| c12 | Hives needed per crop | Range (floating bar) chart |
| c13 | Varroa spread 2022–2026 | **Dot map** with time slider |

## Publish on GitHub Pages

1. Create a **public** repository (e.g. `honey-viz`) and upload everything in this folder
   (keep the folder structure).
2. Repository → **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)` → Save.
3. After a minute the site is live at `https://<your-username>.github.io/honey-viz/`.
4. Open the page in a private window to confirm every chart loads (the page must be publicly accessible).

The page must be served over http(s); opening `index.html` directly from your disk will not load the data files.
To preview locally run `python3 -m http.server` in this folder and open http://localhost:8000.

## Base maps (loaded at run time)

- Australian states: `https://cdn.jsdelivr.net/gh/codeforgermany/click_that_hood@main/public/data/australia.geojson` (~350 KB)
- World countries: `https://cdn.jsdelivr.net/npm/vega-datasets@2/data/world-110m.json`

Optional: download both files into `data/` and change the `url` in the map specs so the site does not depend on
the CDN. (Note: some other Australian GeoJSON files have reversed polygon winding and draw as a filled globe in
Vega — this one draws correctly.)

## Data sources

See the footer of `index.html`. Main sources: AgriFutures Australia (Clarke & Le Feuvre 2024; Gillespie, Clarke &
Frost 2024), UN Comtrade via World Bank WITS (HS 040900), AHBIC, DAFF, state biosecurity agencies.

## Before you submit — replace placeholders

- `[Your name]` and `[student ID]` in `index.html` and this README.
- Add `sketch.pdf` (photo/scan of your hand-drawn sketch).
- Check the AI-use acknowledgement in the footer matches how you used AI tools.
