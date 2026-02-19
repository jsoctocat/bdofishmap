import { useEffect } from 'react';
import { useLeafletMap } from './useLeafletMap.js';
import FishDisplayPanel from './FishDisplayPanel.jsx';

/**
 * Mounts the plain Leaflet map and overlays the FishDisplayPanel.
 *
 * Props:
 *   layers       — { [key]: boolean }
 *   lang         — 'EN' | 'KR'
 *   sidebarWidth — current total sidebar width px (triggers invalidateSize)
 *   selectedZone — GeoJSON feature | null
 *   onZoneSelect — (feature | null) => void
 *   fishData     — fish array
 *   onFishClick  — (fishName: string) => void
 */
export default function BDOMap({
  layers, lang, sidebarWidth,
  selectedZone, onZoneSelect,
  fishData, onFishClick,
}) {
  const { containerRef, mapRef } = useLeafletMap({ layers, lang, onZoneSelect });

  // Repaint tiles after sidebar CSS transition finishes (300ms)
  useEffect(() => {
    const t = setTimeout(() => mapRef.current?.invalidateSize(), 310);
    return () => clearTimeout(t);
  }, [sidebarWidth, mapRef]);

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full" />

      {selectedZone && (
        <FishDisplayPanel
          zone={selectedZone}
          fishData={fishData}
          lang={lang}
          onFishClick={onFishClick}
          onClose={() => onZoneSelect(null)}
        />
      )}
    </div>
  );
}
