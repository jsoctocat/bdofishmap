import LayerToggle from '../UI/LayerToggle.jsx';
import { LAYER_GROUPS } from '../../constants/layers.js';

/**
 * The "Layers" tab content of the sidebar.
 * Renders each LAYER_GROUP as a labelled section of toggles.
 *
 * Props:
 *   layers       — { [key]: boolean }  current visibility state
 *   onToggle     — (key: string) => void
 *   lang         — 'EN' | 'KR'
 */
export default function LayerPanel({ layers, onToggle, lang }) {
  return (
    <div className="sidebar-scroll overflow-y-auto h-full p-3 space-y-5">
      {LAYER_GROUPS.map(group => (
        <section key={group.groupLabel.EN}>
          {/* Section header */}
          <h3 className="text-[10px] uppercase tracking-widest text-amber-500/70 mb-1.5 font-semibold">
            {lang === 'KR' ? group.groupLabel.KR : group.groupLabel.EN}
          </h3>

          {/* Layer toggles */}
          <div className="space-y-0.5">
            {group.layers.map(layer => (
              <LayerToggle
                key={layer.key}
                label={lang === 'KR' ? layer.label.KR : layer.label.EN}
                checked={layers[layer.key] ?? false}
                onChange={() => onToggle(layer.key)}
                color={layer.color}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
