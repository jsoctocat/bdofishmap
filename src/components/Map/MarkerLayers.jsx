import { Marker, Tooltip, LayerGroup, useMap, useMapEvents } from 'react-leaflet';
import { useState } from 'react';

import {
  IconCity, IconTown,
  IconNode1, IconNode1Small,
  IconNode2, IconNode2Small,
  IconNode3, IconNode3Small,
  IconNode4, IconNode4Small,
  IconHarbor, IconImperial, IconBarterer, IconTrade,
  IconCoelacanth, IconGrunt, IconTuna, IconGiantOctopus,
  IconSpottedSeaBass, IconTilefish, IconBlueGrouper,
  IconPorgy, IconBlackPorgy, IconSmokeyChromis,
  IconSeaBass, IconNibbler, IconEyespotPuffer,
  IconCoxPiratesShadowGhost, IconCargoShip, IconDrunkSniper, IconPirateFlag,
  SEA_MONSTER_ICON_MAP,
} from '../../constants/icons.js';

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

// ─────────────────────────────────────────────────────────────
// Small helpers
// ─────────────────────────────────────────────────────────────

/** Named marker label: index 2 = EN name, index 3 = KR name */
function label(marker, lang) {
  return lang === 'KR' ? marker[3] : marker[2];
}

/** Plain label tooltip */
function LabelTip({ text, className = 'map-label' }) {
  return (
    <Tooltip permanent direction="center" className={className} offset={[0, 0]}>
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </Tooltip>
  );
}

// ─────────────────────────────────────────────────────────────
// Zoom-aware node markers
//
// Switches between normal and small icon variants at zoom ≤ 4.
// ─────────────────────────────────────────────────────────────

function ZoomAwareNodes({ data, iconFull, iconSmall, lang, visible }) {
  const map  = useMap();
  const [zoom, setZoom] = useState(map.getZoom());
  useMapEvents({ zoomend: () => setZoom(map.getZoom()) });

  if (!visible) return null;

  const icon = zoom <= 4 ? iconSmall : iconFull;

  return (
    <LayerGroup>
      {data.map((m, i) => (
        <Marker key={i} position={[m[0], m[1]]} icon={icon}>
          <LabelTip text={label(m, lang)} />
        </Marker>
      ))}
    </LayerGroup>
  );
}

// ─────────────────────────────────────────────────────────────
// Sea monster markers
//
// Each entry in SEA_MONSTERS carries its own icon key string,
// which is resolved via SEA_MONSTER_ICON_MAP.
// Also zoom-aware: small icons at zoom ≤ 4, tooltip hidden at zoom ≤ 2.
// ─────────────────────────────────────────────────────────────

function SeaMonsterMarkers({ visible, lang }) {
  const map  = useMap();
  const [zoom, setZoom] = useState(map.getZoom());
  useMapEvents({ zoomend: () => setZoom(map.getZoom()) });

  if (!visible) return null;

  const useSmall     = zoom <= 4;
  const showTooltip  = zoom > 2;

  return (
    <LayerGroup>
      {SEA_MONSTERS.map((m, i) => {
        const iconPair  = SEA_MONSTER_ICON_MAP[m[4]] ?? SEA_MONSTER_ICON_MAP['IconVell'];
        const icon      = useSmall ? iconPair.small : iconPair.full;
        const name      = lang === 'KR' ? m[3] : m[2];

        return (
          <Marker key={i} position={[m[0], m[1]]} icon={icon}>
            {showTooltip && (
              <Tooltip permanent direction="bottom" className="map-label" offset={[0, 5]}>
                <span dangerouslySetInnerHTML={{ __html: name }} />
              </Tooltip>
            )}
          </Marker>
        );
      })}
    </LayerGroup>
  );
}

// ─────────────────────────────────────────────────────────────
// Seagull fishing spot markers
//
// Each species has a dedicated icon and a flat [lat, lng] data array.
// ─────────────────────────────────────────────────────────────

const SEAGULL_SPECIES = [
  { icon: IconCoelacanth,     data: SPOTS_COELACANTH,    name: 'Coelacanth'      },
  { icon: IconGrunt,          data: SPOTS_GRUNT,          name: 'Grunt'           },
  { icon: IconTuna,           data: SPOTS_TUNA,           name: 'Tuna'            },
  { icon: IconGiantOctopus,   data: SPOTS_GIANT_OCTOPUS,  name: 'Giant Octopus'   },
  { icon: IconSpottedSeaBass, data: SPOTS_SPOTTED_SBASS,  name: 'Spotted Sea Bass'},
  { icon: IconTilefish,       data: SPOTS_TILEFISH,       name: 'Tilefish'        },
  { icon: IconBlueGrouper,    data: SPOTS_BLUE_GROUPER,   name: 'Blue Grouper'    },
  { icon: IconPorgy,          data: SPOTS_PORGY,          name: 'Porgy'           },
  { icon: IconBlackPorgy,     data: SPOTS_BLACK_PORGY,    name: 'Black Porgy'     },
  { icon: IconSmokeyChromis,  data: SPOTS_SMOKEY_CHROMIS, name: 'Smokey Chromis'  },
  { icon: IconSeaBass,        data: SPOTS_SEA_BASS,       name: 'Sea Bass'        },
  { icon: IconNibbler,        data: SPOTS_NIBBLER,        name: 'Nibbler'         },
  { icon: IconEyespotPuffer,  data: SPOTS_EYESPOT_PUFFER, name: 'Eyespot Puffer'  },
];

function SeagullMarkers({ visible }) {
  if (!visible) return null;

  return (
    <LayerGroup>
      {SEAGULL_SPECIES.map(({ icon, data, name }) =>
        data.map((m, i) => (
          <Marker key={`${name}-${i}`} position={[m[0], m[1]]} icon={icon}>
            <Tooltip direction="top" className="map-label">{name}</Tooltip>
          </Marker>
        )),
      )}
    </LayerGroup>
  );
}

// ─────────────────────────────────────────────────────────────
// Simple pin-only layers (no label)
// ─────────────────────────────────────────────────────────────

function PinLayer({ data, icon, visible }) {
  if (!visible) return null;
  return (
    <LayerGroup>
      {data.map((m, i) => (
        <Marker key={i} position={[m[0], m[1]]} icon={icon} />
      ))}
    </LayerGroup>
  );
}

// ─────────────────────────────────────────────────────────────
// Labelled pin layer (name at index 2 / 3)
// ─────────────────────────────────────────────────────────────

function LabelledPinLayer({ data, icon, lang, visible, tooltipClass = 'map-label' }) {
  if (!visible) return null;
  return (
    <LayerGroup>
      {data.map((m, i) => (
        <Marker key={i} position={[m[0], m[1]]} icon={icon}>
          <Tooltip direction="top" className={tooltipClass}>
            <span dangerouslySetInnerHTML={{ __html: label(m, lang) }} />
          </Tooltip>
        </Marker>
      ))}
    </LayerGroup>
  );
}

// ─────────────────────────────────────────────────────────────
// Main export: all marker layers
// ─────────────────────────────────────────────────────────────

/**
 * Renders every marker layer group based on the `layers` visibility map.
 *
 * Props:
 *   layers  — { [key]: boolean }
 *   lang    — 'EN' | 'KR'
 */
export default function MarkerLayers({ layers, lang }) {
  return (
    <>
      {/* ── Cities & Towns ─────────────────────────────────── */}
      {layers.city && (
        <LayerGroup>
          {CITIES.map((m, i) => (
            <Marker key={`city-${i}`} position={[m[0], m[1]]} icon={IconCity}>
              <LabelTip text={label(m, lang)} className="map-label city-label" />
            </Marker>
          ))}
          {TOWNS.map((m, i) => (
            <Marker key={`town-${i}`} position={[m[0], m[1]]} icon={IconTown}>
              <LabelTip text={label(m, lang)} />
            </Marker>
          ))}
        </LayerGroup>
      )}

      {/* ── Nodes (zoom-aware) ─────────────────────────────── */}
      <ZoomAwareNodes data={NODES_T1} iconFull={IconNode1} iconSmall={IconNode1Small} lang={lang} visible={layers.node1} />
      <ZoomAwareNodes data={NODES_T2} iconFull={IconNode2} iconSmall={IconNode2Small} lang={lang} visible={layers.node2} />
      <ZoomAwareNodes data={NODES_T3} iconFull={IconNode3} iconSmall={IconNode3Small} lang={lang} visible={layers.node3} />
      <ZoomAwareNodes data={NODES_T4} iconFull={IconNode4} iconSmall={IconNode4Small} lang={lang} visible={layers.node4} />

      {/* ── Islands ─────────────────────────────────────────── */}
      {layers.island && (
        <LayerGroup>
          {ISLANDS_Y.map((m, i) => (
            <Marker key={`iy-${i}`} position={[m[0], m[1]]} icon={IconNode1}>
              <LabelTip text={label(m, lang)} />
            </Marker>
          ))}
          {ISLANDS_CIRCLE.map((m, i) => (
            <Marker key={`ic-${i}`} position={[m[0], m[1]]} icon={IconNode2}>
              <LabelTip text={label(m, lang)} />
            </Marker>
          ))}
        </LayerGroup>
      )}

      {/* ── NPCs ────────────────────────────────────────────── */}
      <PinLayer data={HARBORS}           icon={IconHarbor}   visible={layers.harbor} />
      <PinLayer data={IMPERIAL_DELIVERY} icon={IconImperial} visible={layers.imperial} />
      <PinLayer data={TRADE_MANAGERS}    icon={IconTrade}    visible={layers.tradeManager} />
      <PinLayer data={BARTERERS}         icon={IconBarterer} visible={layers.barterer} />

      {/* Ocean Barterers have a label (name at index 2/3) */}
      <LabelledPinLayer
        data={BARTERERS_OCEAN}
        icon={IconBarterer}
        lang={lang}
        visible={layers.bartererOcean}
      />

      {/* ── Sea Monsters (zoom-aware) ───────────────────────── */}
      <SeaMonsterMarkers visible={layers.seaMonster} lang={lang} />

      {/* ── Ocean NPCs ──────────────────────────────────────── */}
      <PinLayer data={COX_PIRATES_GHOST} icon={IconCoxPiratesShadowGhost} visible={layers.coxGhost} />
      <PinLayer data={CARGO_SHIPS}       icon={IconCargoShip}             visible={layers.cargoShip} />
      <PinLayer data={DRUNK_SNIPERS}     icon={IconDrunkSniper}           visible={layers.drunkSniper} />
      <PinLayer data={PIRATE_FLAGS}      icon={IconPirateFlag}            visible={layers.pirateFlag} />

      {/* ── Seagull fishing spots ───────────────────────────── */}
      <SeagullMarkers visible={layers.seagull} />
    </>
  );
}
