import { GeoJSON } from 'react-leaflet';
import { FRESHWATER_ZONES, SALTWATER_ZONES } from '../../data/fishingZones.js';

/**
 * Returns the Leaflet path style for a fishing zone feature.
 * Colour comes from the zone's `locationColor` property.
 */
function zoneStyle(feature) {
  return {
    weight:      1,
    opacity:     1,
    color:       '#FFFFFF',
    fillOpacity: 0.5,
    fillColor:   feature.properties.locationColor,
  };
}

/** Slightly brighter style applied on mouseover. */
const HIGHLIGHT_STYLE = { weight: 2, fillOpacity: 0.75 };

/**
 * Freshwater + Saltwater GeoJSON fishing zone layers.
 *
 * Props:
 *   showFreshwater — boolean
 *   showSaltwater  — boolean
 *   onZoneClick    — (feature) => void  called when a zone polygon is clicked
 */
export default function FishingZones({ showFreshwater, showSaltwater, onZoneClick }) {
  /**
   * Attach mouseover / mouseout / click handlers to every zone polygon.
   * react-leaflet's GeoJSON component calls this for each feature.
   */
  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: () => layer.setStyle(HIGHLIGHT_STYLE),
      mouseout:  () => layer.setStyle(zoneStyle(feature)),
      click:     () => onZoneClick(feature),
    });
  }

  return (
    <>
      {showFreshwater && (
        <GeoJSON
          key="freshwater"
          data={FRESHWATER_ZONES}
          style={zoneStyle}
          onEachFeature={onEachFeature}
        />
      )}

      {showSaltwater && (
        <GeoJSON
          key="saltwater"
          data={SALTWATER_ZONES}
          style={zoneStyle}
          onEachFeature={onEachFeature}
        />
      )}
    </>
  );
}
