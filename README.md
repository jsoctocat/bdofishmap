# BDO Fishing Map

React + Tailwind rewrite of [bdofish.github.io](https://bdofish.github.io).  
All hardcoded coordinates are preserved exactly from the original.

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Architecture

The map layer uses **plain Leaflet** (not react-leaflet) initialised via `useEffect`.  
This mirrors the original implementation 1-to-1 and gives full control over:
- `resetStyle()` on GeoJSON layers (required for choropleth click/hover)
- Zoom-aware marker icon swapping
- `invalidateSize()` when the sidebar opens/closes

React manages the UI shell (sidebar, fish list, layer panel) and communicates
with the map via a `onZoneSelect` callback and `layers` / `lang` props.

```
src/
├── main.jsx                       Entry point
├── App.jsx                        Root — owns all shared state
├── index.css                      Tailwind + Leaflet CSS + global overrides
│
├── data/
│   ├── markers.js                 All hardcoded [lat, lng] marker arrays
│   └── fishingZones.js            Freshwater / Saltwater GeoJSON + fog-of-war polygons
│
├── constants/
│   └── layers.js                  Layer group config + buildDefaultLayers()
│
├── hooks/
│   └── useFishData.js             Fetches live fish catalogue from GitHub
│
└── components/
    ├── Map/
    │   ├── useLeafletMap.js       Plain Leaflet engine (tiles, GeoJSON, markers)
    │   ├── BDOMap.jsx             Thin wrapper: mounts map div + FishDisplayPanel
    │   └── FishDisplayPanel.jsx   Zone-click overlay showing catchable fish
    │
    └── Sidebar/
        ├── Sidebar.jsx            Rail + collapsible content panel
        ├── LayerPanel.jsx         Layer visibility checkboxes
        ├── FishList.jsx           Searchable fish catalogue table
        └── UI/
            └── LayerToggle.jsx    Coloured checkbox component
```

---

## Choropleth interaction

Exactly mirroring the original:

| Action | Result |
|---|---|
| Hover zone | Highlight green, show fish panel |
| Move away | Unhighlight, hide panel |
| Click zone | Lock highlight + panel (stays on mouseout) |
| Click same zone again | Deselect |
| Click map background | Deselect |
| Click fish sprite | Jump to Fish List tab, pre-filled search |

---

## Data sources

| Asset | URL |
|---|---|
| Map tiles | `https://bdofish.github.io/map/{z}/{x}/{y}.jpg` |
| Icons | `https://bdofish.github.io/icons/` |
| Fish catalogue | GitHub raw JSON from bdofish repo |
