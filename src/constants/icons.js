import L from 'leaflet';

// All icons are served from the live bdofish GitHub Pages site.
const BASE = '/data/icons/';

/**
 * Create a Leaflet DivIcon-free icon from a relative path under BASE.
 * @param {string}   file          Path relative to BASE (e.g. "City.png")
 * @param {number[]} size          [width, height] in pixels
 * @param {number[]} [anchor]      [x, y] pixel anchor; defaults to centre
 * @param {number[]} [tooltipAnchor] [x, y] for tooltip; defaults to [halfW, halfH]
 */
function makeIcon(file, size, anchor, tooltipAnchor) {
  const [w, h] = size;
  return L.icon({
    iconUrl: `${BASE}${file}`,
    iconSize: size,
    iconAnchor:     anchor       ?? [w / 2, h / 2],
    tooltipAnchor:  tooltipAnchor ?? [w / 2, h / 2],
  });
}

// ── World / Node icons ────────────────────────────────────────

export const IconCity   = makeIcon('City.png',   [42, 42], [21, 21], [21, 30]);
export const IconTown   = makeIcon('Town.png',   [36, 36], [18, 18], [18, 26]);
export const IconNode1  = makeIcon('Node1.png',  [34, 30], [17, 15], [17, 21]);
export const IconNode2  = makeIcon('Node2.png',  [38, 38], [19, 19], [19, 25]);
export const IconNode3  = makeIcon('Node3.png',  [34, 34], [17, 17], [17, 23]);
export const IconNode4  = makeIcon('Node4.png',  [34, 34], [17, 17], [17, 23]);

// Smaller variants shown when zoomed out (zoom ≤ 4)
export const IconNode1Small = makeIcon('Node1.png', [17, 15], [8, 7],  [8, 11]);
export const IconNode2Small = makeIcon('Node2.png', [19, 19], [9, 9],  [9, 13]);
export const IconNode3Small = makeIcon('Node3.png', [17, 17], [8, 8],  [8, 12]);
export const IconNode4Small = makeIcon('Node4.png', [17, 17], [8, 8],  [8, 12]);

// ── NPC icons ─────────────────────────────────────────────────

export const IconHarbor         = makeIcon('Harbor.png',                      [20, 20], [10, 10]);
export const IconImperial       = makeIcon('ImperialFishingDelivery.png',     [26, 26], [13, 13]);
export const IconBarterer       = makeIcon('Barterer.png',                    [22, 22], [11, 11]);
export const IconBartererOcean  = makeIcon('BartererOcean.png',               [22, 22], [11, 11]);
export const IconTrade          = makeIcon('TradeManager.png',                [22, 22], [11, 11]);

// ── Sea monster icons (full size, shown at zoom ≥ 5) ─────────

export const IconVell               = makeIcon('Vell.png',               [50, 50], [25, 25], [25, 30]);
export const IconYoungSeaMonster    = makeIcon('YoungSeaMonster.png',    [50, 50], [25, 25], [25, 28]);
export const IconHekaru             = makeIcon('Hekaru.png',             [50, 50], [25, 25], [25, 25]);
export const IconOceanStalker       = makeIcon('OceanStalker.png',       [50, 50], [25, 25], [25, 25]);
export const IconNineshark          = makeIcon('Nineshark.png',          [50, 50], [25, 25], [25, 25]);
export const IconCandidum           = makeIcon('Candidum.png',           [50, 50], [25, 25], [25, 27]);
export const IconBlackRust          = makeIcon('BlackRust.png',          [50, 50], [25, 25], [25, 24]);
export const IconSaltwaterCrocodile = makeIcon('SaltwaterCrocodile.png', [50, 50], [25, 25], [25, 25]);
export const IconBlackRust2         = makeIcon('BlackRust2.png',         [50, 50], [25, 25], [25, 25]);
export const IconGoldmontPirate     = makeIcon('GoldmontPirate.png',     [50, 50], [25, 25], [25, 25]);
export const IconLekrashan          = makeIcon('Lekrashan.png',          [50, 50], [25, 25], [25, 25]);

// ── Sea monster icons (small, shown at zoom ≤ 4) ─────────────

export const IconVellSmall               = makeIcon('Vell.png',               [25, 25], [12, 12], [12, 15]);
export const IconYoungSeaMonsterSmall    = makeIcon('YoungSeaMonster.png',    [25, 25], [12, 12], [12, 14]);
export const IconHekaruSmall             = makeIcon('Hekaru.png',             [25, 25], [12, 12], [12, 12]);
export const IconOceanStalkerSmall       = makeIcon('OceanStalker.png',       [25, 25], [12, 12], [12, 12]);
export const IconNinesharkSmall          = makeIcon('Nineshark.png',          [25, 25], [12, 12], [12, 12]);
export const IconCandidumSmall           = makeIcon('Candidum.png',           [25, 25], [12, 12], [12, 13]);
export const IconBlackRustSmall          = makeIcon('BlackRust.png',          [25, 25], [12, 12], [12, 12]);
export const IconSaltwaterCrocodileSmall = makeIcon('SaltwaterCrocodile.png', [25, 25], [12, 12], [12, 12]);
export const IconBlackRust2Small         = makeIcon('BlackRust2.png',         [25, 25], [12, 12], [12, 12]);
export const IconGoldmontPirateSmall     = makeIcon('GoldmontPirate.png',     [25, 25], [12, 12], [12, 12]);
export const IconLekrashanSmall          = makeIcon('Lekrashan.png',          [25, 25], [12, 12], [12, 12]);

// ── Ocean NPC icons ───────────────────────────────────────────

export const IconCoxPiratesShadowGhost = makeIcon('CoxPiratesShadowGhost.png', [50, 50], [25, 25], [25, 25]);
export const IconCargoShip             = makeIcon('CargoShip.png',             [50, 50], [25, 25], [25, 25]);
export const IconDrunkSniper           = makeIcon('DrunkSniper.png',           [50, 50], [25, 25], [25, 25]);
export const IconPirateFlag            = makeIcon('PirateFlag.png',            [50, 50], [25, 25], [25, 25]);

// ── Seagull fishing spot icons ────────────────────────────────

export const IconCoelacanth     = makeIcon('seagull/Coelacanth.png',    [30, 30], [15, 15]);
export const IconGrunt          = makeIcon('seagull/Grunt.png',         [30, 30], [15, 15]);
export const IconTuna           = makeIcon('seagull/Tuna.png',          [30, 30], [15, 15]);
export const IconGiantOctopus   = makeIcon('seagull/GiantOctopus.png',  [30, 30], [15, 15]);
export const IconSpottedSeaBass = makeIcon('seagull/SpottedSeaBass.png',[30, 30], [15, 15]);
export const IconTilefish       = makeIcon('seagull/Tilefish.png',      [30, 30], [15, 15]);
export const IconBlueGrouper    = makeIcon('seagull/BlueGrouper.png',   [30, 30], [15, 15]);
export const IconPorgy          = makeIcon('seagull/Porgy.png',         [30, 30], [15, 15]);
export const IconBlackPorgy     = makeIcon('seagull/BlackPorgy.png',    [30, 30], [15, 15]);
export const IconSmokeyChromis  = makeIcon('seagull/SmokeyChromis.png', [30, 30], [15, 15]);
export const IconSeaBass        = makeIcon('seagull/SeaBass.png',       [30, 30], [15, 15]);
export const IconNibbler        = makeIcon('seagull/Nibbler.png',       [30, 30], [15, 15]);
export const IconEyespotPuffer  = makeIcon('seagull/EyespotPuffer.png', [30, 30], [15, 15]);

// ── Lookup: icon key string → { full, small } icon objects ───
// Used by SeaMonsterMarkers to resolve the string stored in the data array.

export const SEA_MONSTER_ICON_MAP = {
  IconVell:               { full: IconVell,               small: IconVellSmall },
  IconYoungSeaMonster:    { full: IconYoungSeaMonster,    small: IconYoungSeaMonsterSmall },
  IconHekaru:             { full: IconHekaru,             small: IconHekaruSmall },
  IconOceanStalker:       { full: IconOceanStalker,       small: IconOceanStalkerSmall },
  IconNineshark:          { full: IconNineshark,          small: IconNinesharkSmall },
  IconCandidum:           { full: IconCandidum,           small: IconCandidumSmall },
  IconBlackRust:          { full: IconBlackRust,          small: IconBlackRustSmall },
  IconSaltwaterCrocodile: { full: IconSaltwaterCrocodile, small: IconSaltwaterCrocodileSmall },
  IconBlackRust2:         { full: IconBlackRust2,         small: IconBlackRust2Small },
  IconGoldmontPirate:     { full: IconGoldmontPirate,     small: IconGoldmontPirateSmall },
  IconLekrashan:          { full: IconLekrashan,          small: IconLekrashanSmall },
};
