# BDO Fishing Map

React + Tailwind CSS rewrite of [bdofish.github.io](https://bdofish.github.io).

All hardcoded coordinates, tile URLs, and icon paths are preserved exactly from the original.

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Project structure

```
src/
├── main.jsx                   ← React entry point
├── App.jsx                    ← Root component; owns all shared state
├── index.css                  ← Tailwind + Leaflet CSS imports + global overrides
│
├── data/
│   ├── markers.js             ← All hardcoded [lat, lng] marker arrays (do not edit coords)
│   └── fishingZones.js        ← Freshwater / Saltwater GeoJSON + UnknownArea polygons
│
├── constants/
│   ├── icons.js               ← Leaflet icon instances (all L.icon() definitions)
│   └── layers.js              ← Layer group config + buildDefaultLayers() helper
│
├── hooks/
│   └── useFishData.js         ← Fetches fish catalogue JSON from bdofish's GitHub
│
└── components/
    ├── Map/
    │   ├── BDOMap.jsx          ← MapContainer wrapper; composes all map layers
    │   ├── UnknownAreas.jsx    ← Three fog-of-war overlay polygons
    │   ├── FishingZones.jsx    ← Freshwater + Saltwater GeoJSON layers
    │   ├── MarkerLayers.jsx    ← All point markers (nodes, monsters, NPCs, seagulls…)
    │   └── FishDisplayPanel.jsx← Zone-click overlay showing catchable fish
    │
    └── Sidebar/
        ├── Sidebar.jsx         ← Icon rail + sliding content panel
        ├── LayerPanel.jsx      ← Layer visibility checkboxes
        ├── FishList.jsx        ← Searchable fish catalogue table
        └── UI/
            └── LayerToggle.jsx ← Reusable coloured checkbox component
```

---

## Data sources

| Asset | Source |
|---|---|
| Map tiles | `https://bdofish.github.io/map/{z}/{x}/{y}.jpg` |
| Icons | `https://bdofish.github.io/icons/` |
| Fish catalogue | `https://raw.githubusercontent.com/bdofish/bdofish.github.io/master/scripts/fish-data.json` |
| Marker coordinates | Extracted from the original `bdofish_Script-min.js` and stored in `src/data/markers.js` |
| Fishing zone polygons | Extracted from the original script and stored in `src/data/fishingZones.js` |

---

## Features

- **Layer toggles** — Cities, Nodes (T1–T4), Islands, Freshwater/Saltwater zones, Sea Monsters, Seagull spots, NPCs, and more
- **Fishing zone click** — click any coloured polygon to see all catchable fish with sprite icons; click a fish to search the list
- **Fish List tab** — searchable, filterable table of every fish with grade colours
- **Zoom-aware markers** — node and sea monster icons shrink at zoom ≤ 4 (matching original behaviour)
- **EN / KR language** — all labels switchable between English and Korean
