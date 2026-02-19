import { useEffect } from 'react';
import { useLeafletMap } from './useLeafletMap.js';
import FishDisplayPanel from './FishDisplayPanel.jsx';

/**
 * Mounts the Leaflet map into a full-screen div and overlays the
 * FishDisplayPanel when a zone is selected.
 *
 * Props:
 *   layers        — { [key]: boolean }  layer visibility
 *   lang          — 'EN' | 'KR'
 *   sidebarWidth  — number  current total sidebar width in px (for invalidateSize)
 *   selectedZone  — GeoJSON feature | null
 *   onZoneSelect  — (feature | null, locked: boolean) => void
 *   fishData      — fish array
 *   spriteSort    — sorted file-key array
 *   onFishClick   — (fishName: string) => void
 */
export default function BDOMap({
  layers, lang, sidebarWidth,
  selectedZone, onZoneSelect,
  fishData, spriteSort, onFishClick,
}) {
  const { containerRef, mapRef } = useLeafletMap({ layers, lang, onZoneSelect });

  // Invalidate map size whenever the sidebar panel opens/closes
  // so tiles repaint correctly in the newly available space
  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() => mapRef.current?.invalidateSize(), 310); // after CSS transition
    }
  }, [sidebarWidth, mapRef]);

  return (
    <div className="relative w-full h-full">
      {/* Leaflet mounts here */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Fish display panel — rendered outside Leaflet so pointer events work */}
      {selectedZone && (
        <FishDisplayPanel
          zone={selectedZone}
          fishData={fishData}
          spriteSort={spriteSort}
          lang={lang}
          onFishClick={onFishClick}
          onClose={() => onZoneSelect(null, false)}
        />
      )}
    </div>
  );
}
