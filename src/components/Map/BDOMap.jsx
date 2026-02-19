import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

import UnknownAreas     from './UnknownAreas.jsx';
import FishingZones     from './FishingZones.jsx';
import MarkerLayers     from './MarkerLayers.jsx';
import FishDisplayPanel from './FishDisplayPanel.jsx';

// BDO world map tiles served from the original bdofish GitHub Pages site
const TILE_URL = 'https://bdofish.github.io/map/{z}/{x}/{y}.jpg';

// Enforce pan limits so the user can't scroll infinitely
function MapBoundsEnforcer() {
  const map = useMap();
  useEffect(() => {
    map.setMaxBounds([[-300, -300], [300, 300]]);
  }, [map]);
  return null;
}

/**
 * Full-screen interactive map component.
 *
 * Props:
 *   layers        — { [key]: boolean }  layer visibility state
 *   lang          — 'EN' | 'KR'
 *   selectedZone  — GeoJSON feature | null  currently clicked zone
 *   onZoneClick   — (feature) => void
 *   onZoneClose   — () => void
 *   fishData      — fish array
 *   spriteSort    — sorted file-key array
 *   onFishClick   — (name: string) => void  open Fish List + search
 */
export default function BDOMap({
  layers,
  lang,
  selectedZone,
  onZoneClick,
  onZoneClose,
  fishData,
  spriteSort,
  onFishClick,
}) {
  return (
    <div className="relative w-full h-full">
      <MapContainer
        center={[0, 0]}
        zoom={2}
        minZoom={2}
        maxZoom={8}
        style={{ width: '100%', height: '100%', background: '#1a2535' }}
        zoomControl={false}    // We rely on scroll / pinch
        attributionControl={false}
      >
        {/* Enforce pan bounds */}
        <MapBoundsEnforcer />

        {/* World map tile layer */}
        <TileLayer
          url={TILE_URL}
          minZoom={2}
          maxNativeZoom={7}
          maxZoom={8}
          noWrap
        />

        {/* Non-playable edge overlays */}
        <UnknownAreas />

        {/* Fishing zone polygons */}
        <FishingZones
          showFreshwater={layers.freshwater}
          showSaltwater={layers.saltwater}
          onZoneClick={onZoneClick}
        />

        {/* All point markers */}
        <MarkerLayers layers={layers} lang={lang} />
      </MapContainer>

      {/* Zone fish display – rendered outside Leaflet so it sits above the map */}
      {selectedZone && (
        <FishDisplayPanel
          zone={selectedZone}
          fishData={fishData}
          spriteSort={spriteSort}
          lang={lang}
          onFishClick={onFishClick}
          onClose={onZoneClose}
        />
      )}
    </div>
  );
}
