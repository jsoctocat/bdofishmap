// ─────────────────────────────────────────────────────────────────────────────
// useLeafletMap
//
// Initialises and manages the plain Leaflet map instance directly, bypassing
// react-leaflet entirely.  This mirrors the original bdofish implementation
// 1-to-1 and gives us full control over:
//   • tile stitching (exact same TileLayer config as original)
//   • GeoJSON polygon styles, mouseover/out/click (choropleth interactions)
//   • resetStyle() — which requires a direct reference to the GeoJSON layer
//   • marker layers that can be added/removed imperatively
//
// The hook returns:
//   mapRef        — React ref pointing at the DOM container div
//   mapInstanceRef — ref holding the live L.Map instance (for invalidateSize calls)
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useEffect, useCallback } from 'react';
import L from 'leaflet';

import {
  FRESHWATER_ZONES, SALTWATER_ZONES,
  UNKNOWN_AREA_LEFT, UNKNOWN_AREA_RIGHT, UNKNOWN_AREA_BOTTOM,
} from '../../data/fishingZones.js';

import {
  CITIES, TOWNS,
  NODES_T1, NODES_T2, NODES_T3, NODES_T4,
  ISLANDS_Y, ISLANDS_CIRCLE,
  HARBORS, IMPERIAL_DELIVERY, TRADE_MANAGERS, BARTERERS, BARTERERS_OCEAN,
  SEA_MONSTERS, COX_PIRATES_GHOST, CARGO_SHIPS, DRUNK_SNIPERS, PIRATE_FLAGS,
  SPOTS_COELACANTH, SPOTS_GRUNT, SPOTS_TUNA, SPOTS_GIANT_OCTOPUS,
  SPOTS_SPOTTED_SBASS, SPOTS_TILEFISH, SPOTS_BLUE_GROUPER,
  SPOTS_PORGY, SPOTS_BLACK_PORGY, SPOTS_SMOKEY_CHROMIS,
  SPOTS_SEA_BASS, SPOTS_NIBBLER, SPOTS_EYESPOT_PUFFER,
} from '../../data/markers.js';

// ── Icon factory ─────────────────────────────────────────────────────────────
const ICON_BASE = 'https://bdofish.github.io/icons/';

function icon(file, size, anchor, tipAnchor) {
  const [w, h] = size;
  return L.icon({
    iconUrl:      `${ICON_BASE}${file}`,
    iconSize:     size,
    iconAnchor:   anchor   ?? [w / 2, h / 2],
    tooltipAnchor: tipAnchor ?? [w / 2, h / 2],
  });
}

// Full-size icons (zoom ≥ 5)
const ICONS = {
  City:    icon('City.png',   [42, 42], [21, 21], [21, 30]),
  Town:    icon('Town.png',   [36, 36], [18, 18], [18, 26]),
  Node1:   icon('Node1.png',  [34, 30], [17, 15], [17, 21]),
  Node2:   icon('Node2.png',  [38, 38], [19, 19], [19, 25]),
  Node3:   icon('Node3.png',  [34, 34], [17, 17], [17, 23]),
  Node4:   icon('Node4.png',  [34, 34], [17, 17], [17, 23]),
  Harbor:  icon('Harbor.png', [20, 20]),
  Imperial:icon('Imperial.png',[26, 26]),
  Barterer:icon('Barterer.png',[22, 22]),
  Trade:   icon('TradeManager.png',[22, 22]),

  Vell:               icon('Vell.png',               [50,50],[25,25],[25,30]),
  YoungSeaMonster:    icon('YoungSeaMonster.png',    [50,50],[25,25],[25,28]),
  Hekaru:             icon('Hekaru.png',             [50,50],[25,25],[25,25]),
  OceanStalker:       icon('OceanStalker.png',       [50,50],[25,25],[25,25]),
  Nineshark:          icon('Nineshark.png',           [50,50],[25,25],[25,25]),
  Candidum:           icon('Candidum.png',            [50,50],[25,25],[25,27]),
  BlackRust:          icon('BlackRust.png',           [50,50],[25,25],[25,24]),
  SaltwaterCrocodile: icon('SaltwaterCrocodile.png', [50,50],[25,25],[25,25]),
  BlackRust2:         icon('BlackRust2.png',          [50,50],[25,25],[25,25]),
  GoldmontPirate:     icon('GoldmontPirate.png',     [50,50],[25,25],[25,25]),
  Lekrashan:          icon('Lekrashan.png',           [50,50],[25,25],[25,25]),
  CoxPiratesShadowGhost: icon('CoxPiratesShadowGhost.png',[50,50],[25,25],[25,25]),
  CargoShip:    icon('CargoShip.png',   [50,50],[25,25],[25,25]),
  DrunkSniper:  icon('DrunkSniper.png', [50,50],[25,25],[25,25]),
  PirateFlag:   icon('PirateFlag.png',  [50,50],[25,25],[25,25]),

  Coelacanth:     icon('seagull/Coelacanth.png',    [30,30]),
  Grunt:          icon('seagull/Grunt.png',          [30,30]),
  Tuna:           icon('seagull/Tuna.png',           [30,30]),
  GiantOctopus:   icon('seagull/GiantOctopus.png',  [30,30]),
  SpottedSeaBass: icon('seagull/SpottedSeaBass.png', [30,30]),
  Tilefish:       icon('seagull/Tilefish.png',       [30,30]),
  BlueGrouper:    icon('seagull/BlueGrouper.png',    [30,30]),
  Porgy:          icon('seagull/Porgy.png',          [30,30]),
  BlackPorgy:     icon('seagull/BlackPorgy.png',     [30,30]),
  SmokeyChromis:  icon('seagull/SmokeyChromis.png',  [30,30]),
  SeaBass:        icon('seagull/SeaBass.png',         [30,30]),
  Nibbler:        icon('seagull/Nibbler.png',         [30,30]),
  EyespotPuffer:  icon('seagull/EyespotPuffer.png',  [30,30]),
};

// Small variants (zoom ≤ 4) for nodes and sea monsters
const ICONS_SMALL = {
  Node1: icon('Node1.png', [17,15],[8,7],[8,11]),
  Node2: icon('Node2.png', [19,19],[9,9],[9,13]),
  Node3: icon('Node3.png', [17,17],[8,8],[8,12]),
  Node4: icon('Node4.png', [17,17],[8,8],[8,12]),

  Vell:               icon('Vell.png',               [25,25],[12,12],[12,15]),
  YoungSeaMonster:    icon('YoungSeaMonster.png',    [25,25],[12,12],[12,14]),
  Hekaru:             icon('Hekaru.png',             [25,25],[12,12],[12,12]),
  OceanStalker:       icon('OceanStalker.png',       [25,25],[12,12],[12,12]),
  Nineshark:          icon('Nineshark.png',           [25,25],[12,12],[12,12]),
  Candidum:           icon('Candidum.png',            [25,25],[12,12],[12,13]),
  BlackRust:          icon('BlackRust.png',           [25,25],[12,12],[12,12]),
  SaltwaterCrocodile: icon('SaltwaterCrocodile.png', [25,25],[12,12],[12,12]),
  BlackRust2:         icon('BlackRust2.png',          [25,25],[12,12],[12,12]),
  GoldmontPirate:     icon('GoldmontPirate.png',     [25,25],[12,12],[12,12]),
  Lekrashan:          icon('Lekrashan.png',           [25,25],[12,12],[12,12]),
};

// Maps the icon key string stored in SEA_MONSTERS data → icon name in ICONS
const SEA_MONSTER_ICON_KEY = {
  IconVell:               'Vell',
  IconYoungSeaMonster:    'YoungSeaMonster',
  IconHekaru:             'Hekaru',
  IconOceanStalker:       'OceanStalker',
  IconNineshark:          'Nineshark',
  IconCandidum:           'Candidum',
  IconBlackRust:          'BlackRust',
  IconSaltwaterCrocodile: 'SaltwaterCrocodile',
  IconBlackRust2:         'BlackRust2',
  IconGoldmontPirate:     'GoldmontPirate',
  IconLekrashan:          'Lekrashan',
};

// Highlight colour matching the original (#00ff37 green)
const HIGHLIGHT_COLOR = '#00ff37';

// ── Zone style helpers ────────────────────────────────────────────────────────

function zoneStyle(feature) {
  return {
    weight:      1,
    opacity:     1,
    color:       '#ffffff',
    fillOpacity: 0.5,
    fillColor:   feature.properties.locationColor,
  };
}

function highlightStyle() {
  return { weight: 4, color: HIGHLIGHT_COLOR, fillOpacity: 0.7 };
}

// ── Tooltip helper ────────────────────────────────────────────────────────────

function label(m, lang) {
  return lang === 'KR' ? m[3] : m[2];
}

// ── Main hook ─────────────────────────────────────────────────────────────────

export function useLeafletMap({ layers, lang, onZoneSelect }) {
  const containerRef    = useRef(null);   // DOM div the map mounts into
  const mapRef          = useRef(null);   // L.Map instance

  // Named Leaflet layer references so we can add/remove them on layer toggle
  const geoLayersRef    = useRef({ fw: null, sw: null });   // GeoJSON layers
  const markerLayersRef = useRef({});                        // L.LayerGroup per key
  const unknownRef      = useRef(null);                      // fog-of-war layer group

  // Click state mirrors original (clickCheck, highLightCheck)
  const clickedLayerRef = useRef(null);

  // Keep mutable copies so event handlers always see current value
  const langRef         = useRef(lang);
  const onZoneSelectRef = useRef(onZoneSelect);
  useEffect(() => { langRef.current = lang; },         [lang]);
  useEffect(() => { onZoneSelectRef.current = onZoneSelect; }, [onZoneSelect]);

  // ── Initialise map once ───────────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Create the map exactly as the original does
    const map = L.map(containerRef.current, {
      center:           [0, 0],
      zoom:             2,
      minZoom:          2,
      maxZoom:          8,
      attributionControl: false,
      zoomControl:      true,
      fadeAnimation:    false,  // prevents white flash when new tiles load in
    });

    // Tile layer — identical config to original
    L.tileLayer('https://bdofish.github.io/map/{z}/{x}/{y}.jpg', {
      minZoom:       2,
      maxNativeZoom: 7,
      maxZoom:       8,
      noWrap:        true,
    }).addTo(map);

    // Pan limits matching original mapSW/mapNE
    map.setMaxBounds([[-300, -300], [300, 300]]);

    mapRef.current = map;

    // ── Fog-of-war overlays (always visible) ───────────────────────────────
    const unknownGroup = L.layerGroup().addTo(map);
    L.polygon(UNKNOWN_AREA_LEFT,   { color: '#646047', weight: 0, fillOpacity: 1 }).addTo(unknownGroup);
    L.polygon(UNKNOWN_AREA_RIGHT,  { color: '#f9daac', weight: 0, fillOpacity: 1 }).addTo(unknownGroup);
    L.polygon(UNKNOWN_AREA_BOTTOM, { color: '#9b8d7a', weight: 0, fillOpacity: 1 }).addTo(unknownGroup);
    unknownRef.current = unknownGroup;

    // ── GeoJSON zone layers ─────────────────────────────────────────────────
    function onEachFeature(feature, layer) {
      layer.on({
        mouseover(e) {
          // Only highlight on hover when nothing is clicked
          if (!clickedLayerRef.current) {
            e.target.setStyle(highlightStyle());
            onZoneSelectRef.current(feature, false);  // hover (not locked)
          }
        },
        mouseout(e) {
          // Only reset if this layer isn't the locked click
          if (e.target !== clickedLayerRef.current) {
            geoLayersRef.current.fw?.resetStyle(e.target);
            geoLayersRef.current.sw?.resetStyle(e.target);
            if (!clickedLayerRef.current) onZoneSelectRef.current(null, false);
          }
        },
        click(e) {
          L.DomEvent.stopPropagation(e);
          const target = e.target;

          if (clickedLayerRef.current === target) {
            // Clicking the already-locked zone → deselect
            geoLayersRef.current.fw?.resetStyle(target);
            geoLayersRef.current.sw?.resetStyle(target);
            clickedLayerRef.current = null;
            onZoneSelectRef.current(null, false);
          } else {
            // Reset previously locked zone
            if (clickedLayerRef.current) {
              geoLayersRef.current.fw?.resetStyle(clickedLayerRef.current);
              geoLayersRef.current.sw?.resetStyle(clickedLayerRef.current);
            }
            // Lock this zone
            target.setStyle(highlightStyle());
            clickedLayerRef.current = target;
            onZoneSelectRef.current(feature, true); // locked
          }
        },
      });
    }

    geoLayersRef.current.fw = L.geoJSON(FRESHWATER_ZONES, {
      style: zoneStyle,
      onEachFeature,
    }).addTo(map);

    geoLayersRef.current.sw = L.geoJSON(SALTWATER_ZONES, {
      style: zoneStyle,
      onEachFeature,
    }).addTo(map);

    // Click on map background → deselect zone
    map.on('click', () => {
      if (clickedLayerRef.current) {
        geoLayersRef.current.fw?.resetStyle(clickedLayerRef.current);
        geoLayersRef.current.sw?.resetStyle(clickedLayerRef.current);
        clickedLayerRef.current = null;
      }
      onZoneSelectRef.current(null, false);
    });

    // ── Zoom handler for node / sea-monster icon swapping ──────────────────
    map.on('zoomend', () => {
      const zoom     = map.getZoom();
      const isSmall  = zoom <= 4;
      const showTips = zoom > 2;

      // Node tiers: swap icon and tooltip visibility
      [
        ['node1', 'Node1'], ['node2', 'Node2'],
        ['node3', 'Node3'], ['node4', 'Node4'],
      ].forEach(([key, iconKey]) => {
        markerLayersRef.current[key]?.eachLayer(m => {
          m.setIcon(isSmall ? ICONS_SMALL[iconKey] : ICONS[iconKey]);
          isSmall ? m.closeTooltip() : m.openTooltip();
        });
      });

      // Islands: reuse Node1/Node2 icons
      markerLayersRef.current.islandY?.eachLayer(m => {
        m.setIcon(isSmall ? ICONS_SMALL.Node1 : ICONS.Node1);
        isSmall ? m.closeTooltip() : m.openTooltip();
      });
      markerLayersRef.current.islandCircle?.eachLayer(m => {
        m.setIcon(isSmall ? ICONS_SMALL.Node2 : ICONS.Node2);
        isSmall ? m.closeTooltip() : m.openTooltip();
      });

      // Sea monsters
      markerLayersRef.current.seaMonster?.eachLayer(lyr => {
        const iconName = lyr.options._smIconName;
        if (!iconName) return;
        lyr.setIcon(isSmall ? (ICONS_SMALL[iconName] ?? ICONS[iconName]) : ICONS[iconName]);
        showTips ? lyr.openTooltip() : lyr.closeTooltip();
      });

      // Ocean barterers: tooltip visibility only
      markerLayersRef.current.bartererOcean?.eachLayer(m => {
        showTips ? m.openTooltip() : m.closeTooltip();
      });
    });

    // ── Build all marker layer groups ───────────────────────────────────────
    buildAllMarkerLayers(map, markerLayersRef, 'EN');

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // only once

  // ── Sync GeoJSON layer visibility ────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const { fw, sw } = geoLayersRef.current;
    if (fw) layers.freshwater ? map.addLayer(fw) : map.removeLayer(fw);
    if (sw) layers.saltwater  ? map.addLayer(sw) : map.removeLayer(sw);
  }, [layers.freshwater, layers.saltwater]);

  // ── Sync all other marker layer visibility ────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const ml   = markerLayersRef.current;
    const keys = [
      'city', 'node1', 'node2', 'node3', 'node4',
      'islandY', 'islandCircle',
      'harbor', 'imperial', 'tradeManager', 'barterer', 'bartererOcean',
      'seaMonster', 'coxGhost', 'cargoShip', 'drunkSniper', 'pirateFlag',
      'seagull',
    ];

    // Map layer key → layers state key
    const keyMap = {
      islandY:      'island', islandCircle: 'island',
    };

    keys.forEach(k => {
      const group = ml[k];
      if (!group) return;
      const stateKey = keyMap[k] ?? k;
      layers[stateKey] ? map.addLayer(group) : map.removeLayer(group);
    });
  }, [layers]);

  // ── Rebuild markers when language changes ─────────────────────────────────
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    // Remove all old marker layers and rebuild with new language
    Object.values(markerLayersRef.current).forEach(g => g && map.removeLayer(g));
    markerLayersRef.current = {};
    buildAllMarkerLayers(map, markerLayersRef, lang);
    // Re-apply visibility
    // (the layers useEffect will fire again automatically when markerLayersRef changes,
    //  but we call it manually to be safe)
    const ml   = markerLayersRef.current;
    const keyMap = { islandY: 'island', islandCircle: 'island' };
    Object.keys(ml).forEach(k => {
      const stateKey = keyMap[k] ?? k;
      layers[stateKey] ? map.addLayer(ml[k]) : map.removeLayer(ml[k]);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return { containerRef, mapRef };
}

// ── Builder for all point marker layer groups ─────────────────────────────────
function buildAllMarkerLayers(map, markerLayersRef, lang) {
  const ml = markerLayersRef.current;

  // helper: tooltip options
  const tp = (cls = 'map-label', dir = 'center', perm = true) =>
    ({ permanent: perm, direction: dir, className: cls });

  // ── Cities & Towns
  ml.city = L.layerGroup().addTo(map);
  CITIES.forEach(m => {
    L.marker([m[0], m[1]], { icon: ICONS.City })
      .bindTooltip(m[lang === 'KR' ? 3 : 2], { ...tp('map-label city'), offset: [0, 0] })
      .addTo(ml.city);
  });
  TOWNS.forEach(m => {
    L.marker([m[0], m[1]], { icon: ICONS.Town })
      .bindTooltip(m[lang === 'KR' ? 3 : 2], tp())
      .addTo(ml.city);
  });

  // ── Node tiers (zoom-aware — start with full icons; zoomend handler swaps them)
  const nodeConfig = [
    ['node1', NODES_T1, 'Node1'],
    ['node2', NODES_T2, 'Node2'],
    ['node3', NODES_T3, 'Node3'],
    ['node4', NODES_T4, 'Node4'],
  ];
  nodeConfig.forEach(([key, data, iconName]) => {
    ml[key] = L.layerGroup().addTo(map);
    data.forEach(m => {
      L.marker([m[0], m[1]], { icon: ICONS[iconName] })
        .bindTooltip(m[lang === 'KR' ? 3 : 2], tp())
        .addTo(ml[key]);
    });
  });

  // ── Islands (Y-shape uses Node1 icon, Circle uses Node2)
  ml.islandY = L.layerGroup().addTo(map);
  ISLANDS_Y.forEach(m => {
    L.marker([m[0], m[1]], { icon: ICONS.Node1 })
      .bindTooltip(m[lang === 'KR' ? 3 : 2], tp())
      .addTo(ml.islandY);
  });

  ml.islandCircle = L.layerGroup().addTo(map);
  ISLANDS_CIRCLE.forEach(m => {
    L.marker([m[0], m[1]], { icon: ICONS.Node2 })
      .bindTooltip(m[lang === 'KR' ? 3 : 2], tp())
      .addTo(ml.islandCircle);
  });

  // ── Simple NPC pins (no tooltip)
  const simpleNPCs = [
    ['harbor',       HARBORS,           ICONS.Harbor],
    ['imperial',     IMPERIAL_DELIVERY, ICONS.Imperial],
    ['tradeManager', TRADE_MANAGERS,    ICONS.Trade],
    ['barterer',     BARTERERS,         ICONS.Barterer],
  ];
  simpleNPCs.forEach(([key, data, ico]) => {
    ml[key] = L.layerGroup().addTo(map);
    data.forEach(m => L.marker([m[0], m[1]], { icon: ico }).addTo(ml[key]));
  });

  // ── Ocean Barterers (labelled)
  ml.bartererOcean = L.layerGroup().addTo(map);
  BARTERERS_OCEAN.forEach(m => {
    L.marker([m[0], m[1]], { icon: ICONS.Barterer })
      .bindTooltip(m[lang === 'KR' ? 3 : 2], tp('map-label', 'top', false))
      .addTo(ml.bartererOcean);
  });

  // ── Sea Monsters (zoom-aware icon; tooltip hidden at zoom ≤ 2)
  ml.seaMonster = L.layerGroup().addTo(map);
  SEA_MONSTERS.forEach(m => {
    const iconName = SEA_MONSTER_ICON_KEY[m[4]] ?? 'Vell';
    const marker   = L.marker([m[0], m[1]], { icon: ICONS[iconName], _smIconName: iconName });
    marker.options._smIconName = iconName; // store for zoom handler
    marker.bindTooltip(m[lang === 'KR' ? 3 : 2], tp('map-label', 'bottom', false));
    marker.addTo(ml.seaMonster);
  });

  // ── Ocean NPCs (no tooltip)
  const oceanNPCs = [
    ['coxGhost',    COX_PIRATES_GHOST, ICONS.CoxPiratesShadowGhost],
    ['cargoShip',   CARGO_SHIPS,       ICONS.CargoShip],
    ['drunkSniper', DRUNK_SNIPERS,     ICONS.DrunkSniper],
    ['pirateFlag',  PIRATE_FLAGS,      ICONS.PirateFlag],
  ];
  oceanNPCs.forEach(([key, data, ico]) => {
    ml[key] = L.layerGroup().addTo(map);
    data.forEach(m => L.marker([m[0], m[1]], { icon: ico }).addTo(ml[key]));
  });

  // ── Seagull fishing spots (all in one group for the toggle)
  ml.seagull = L.layerGroup().addTo(map);
  const seagullSpecies = [
    [SPOTS_COELACANTH,    ICONS.Coelacanth,    'Coelacanth'],
    [SPOTS_GRUNT,         ICONS.Grunt,          'Grunt'],
    [SPOTS_TUNA,          ICONS.Tuna,           'Tuna'],
    [SPOTS_GIANT_OCTOPUS, ICONS.GiantOctopus,   'Giant Octopus'],
    [SPOTS_SPOTTED_SBASS, ICONS.SpottedSeaBass, 'Spotted Sea Bass'],
    [SPOTS_TILEFISH,      ICONS.Tilefish,       'Tilefish'],
    [SPOTS_BLUE_GROUPER,  ICONS.BlueGrouper,    'Blue Grouper'],
    [SPOTS_PORGY,         ICONS.Porgy,          'Porgy'],
    [SPOTS_BLACK_PORGY,   ICONS.BlackPorgy,     'Black Porgy'],
    [SPOTS_SMOKEY_CHROMIS,ICONS.SmokeyChromis,  'Smokey Chromis'],
    [SPOTS_SEA_BASS,      ICONS.SeaBass,        'Sea Bass'],
    [SPOTS_NIBBLER,       ICONS.Nibbler,        'Nibbler'],
    [SPOTS_EYESPOT_PUFFER,ICONS.EyespotPuffer,  'Eyespot Puffer'],
  ];
  seagullSpecies.forEach(([data, ico, name]) => {
    data.forEach(m => {
      L.marker([m[0], m[1]], { icon: ico })
        .bindTooltip(name, tp('map-label', 'top', false))
        .addTo(ml.seagull);
    });
  });
}
