import { Polygon } from 'react-leaflet';
import {
  UNKNOWN_AREA_LEFT,
  UNKNOWN_AREA_RIGHT,
  UNKNOWN_AREA_BOTTOM,
} from '../../data/fishingZones.js';

/**
 * Renders the three "fog of war" overlay polygons that cover the
 * non-playable edges of the BDO world map.
 *
 * Colours are taken from the original bdofish implementation:
 *   Left   → dark sand  (#646047)
 *   Right  → light sand (#f9daac)
 *   Bottom → mid sand   (#9b8d7a)
 */
export default function UnknownAreas() {
  return (
    <>
      <Polygon
        positions={UNKNOWN_AREA_LEFT}
        pathOptions={{ color: '#646047', weight: 0, fillOpacity: 1 }}
      />
      <Polygon
        positions={UNKNOWN_AREA_RIGHT}
        pathOptions={{ color: '#f9daac', weight: 0, fillOpacity: 1 }}
      />
      <Polygon
        positions={UNKNOWN_AREA_BOTTOM}
        pathOptions={{ color: '#9b8d7a', weight: 0, fillOpacity: 1 }}
      />
    </>
  );
}
