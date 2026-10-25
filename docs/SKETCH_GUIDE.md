# A4 sketch guide — "Liquid Gold, Under Threat"

The sketch must be drawn **by hand** on one A4 sheet (a digitally created sketch scores 0).
Photograph or scan it and save it as `sketch.pdf` in the root of the repository.
Use this guide as a checklist; draw the shapes roughly, but label every chart with its
idiom, the data it uses and its interaction so a marker can map sketch → web page.

Portrait A4, single scrolling column, ~2 cm margins. Draw a thin grid: one wide column
with an optional 1/3 text + 2/3 chart split inside each section.

---

## 0 · Header (top ~10% of the page)
- Title: **Liquid Gold, Under Threat** · subtitle: *How Australia's honey bees make honey,
  trade it and keep our farms growing — and the mite that now puts them at risk*
- Author name + date, small hexagon/honeycomb motif
- Row of 4 key-number tiles: 866,045 hives · 48,983 beekeepers · ~39,600 t honey a year ·
  $4.6 billion of crops pollinated

## 1 · A nation of beekeepers
| # | Chart | Idiom | Interaction |
|---|---|---|---|
| 1 | Australia map shaded by hives per 1,000 km² (switch to hives per beekeeper / number of beekeepers) | **Choropleth map** (Albers projection) | Dropdown; hover a state highlights chart 2 |
| 2 | Beekeepers per state, 2018 → 2023 | Dumbbell chart | Linked highlight, tooltips |
| 3 | Two 10×10 grids: commercial share of beekeepers (4%) vs share of hives (73%) | Waffle chart | Tooltips |

Draw 1 and 2 side by side, 3 underneath with a one-line annotation.

## 2 · From hive to jar
| # | Chart | Idiom | Interaction |
|---|---|---|---|
| 4 | Honey production 2011-12 → 2022-23 with notes for "drought + Black Summer" and "varroa arrives" | Annotated area chart | Tooltips |
| 5 | Production (x) vs farmgate price (y), joined year by year | Connected scatterplot | Hover |
| 6 | Circles on each state sized by public-land apiary sites, coloured by % of honey that depends on public land | **Proportional symbol map** | Tooltips |
| 7 | Imports (below zero, by region) vs exports (above zero), 2019–2023 | Diverging bar chart | Tooltips |

## 3 · Sweet trade
| # | Chart | Idiom | Interaction |
|---|---|---|---|
| 8 | World map (Pacific-centred) with curved lines from Australia to each buyer; line width = export value | **Flow map** | Year slider 2015–2024 |
| 9 | Top 12 buyers × years, cell colour = value | Heatmap | Tooltips |
| 10 | 2024 buyers: bar width = tonnes, bar height = price per kg (China pays ~4× the US price) | Marimekko (variable-width bar) | Tooltips |

## 4 · Bees feed the nation
| # | Chart | Idiom | Interaction |
|---|---|---|---|
| 11 | Value of honey-bee pollination, top 3 crops in each state | Treemap (Vega) | Tooltips |
| 12 | Hives needed per crop (low–high range) against the number of commercial hives | Range (floating bar) chart | Tooltips |

## 5 · The mite that changed everything
| # | Chart | Idiom | Interaction |
|---|---|---|---|
| 13 | Varroa detections appear on the map month by month; states shade red once infested | **Dot / point map with time slider** | Slider Jun 2022 → Sep 2026 |

## 6 · Footer
Short conclusion ("what you can do"), data sources list, author, date, licence,
AI-use acknowledgement.

---

**Map idioms (requirement ≥ 3):** choropleth, proportional symbol, flow, dot map → 4.
**Advanced idioms (HD needs ≥ 8):** charts 1, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13 → 11.
**Basic idioms:** charts 4 and 7. **Total charts:** 13 (requirement > 10).
