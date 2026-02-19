import LayerPanel from './LayerPanel.jsx';
import FishList   from './FishList.jsx';

/**
 * Sidebar — always-visible icon rail (44 px) + sliding content panel (260 px).
 *
 * Props:
 *   isOpen, activeTab, onTabClick
 *   lang, onLangToggle
 *   layers, onLayerToggle
 *   fishData, searchTerm, onSearchChange
 */

export const RAIL_WIDTH  = 44;
export const PANEL_WIDTH = 260;

const TABS = [
  { id: 'layers', icon: '🗺️', labelEN: 'Layers',    labelKR: '레이어'      },
  { id: 'fish',   icon: '🐟', labelEN: 'Fish List',  labelKR: '물고기 목록' },
];

export default function Sidebar({
  isOpen, activeTab, onTabClick,
  lang, onLangToggle,
  layers, onLayerToggle,
  fishData, searchTerm, onSearchChange,
}) {
  const currentTab = TABS.find(t => t.id === activeTab);

  return (
    <>
      {/* ── Icon rail ──────────────────────────────────────────── */}
      <div
        className="absolute left-0 top-0 bottom-0 z-[1001] flex flex-col
                   bg-gray-900 border-r border-gray-700/80"
        style={{ width: RAIL_WIDTH }}
      >
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabClick(tab.id)}
            title={lang === 'KR' ? tab.labelKR : tab.labelEN}
            className={`w-full flex items-center justify-center py-3 text-lg transition-colors
              ${activeTab === tab.id && isOpen
                ? 'bg-amber-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
          >
            {tab.icon}
          </button>
        ))}

        <div className="flex-1" />

        <button
          onClick={onLangToggle}
          title="Toggle language / 언어 전환"
          className="w-full py-2.5 text-[11px] font-bold text-gray-400
                     hover:text-amber-400 border-t border-gray-700 transition-colors"
        >
          {lang === 'KR' ? 'EN' : '한'}
        </button>
      </div>

      {/* ── Content panel ──────────────────────────────────────── */}
      <div
        className="absolute top-0 bottom-0 z-[1000] bg-gray-950/95 backdrop-blur-sm
                   border-r border-gray-700/80 flex flex-col overflow-hidden
                   transition-[width] duration-300 ease-in-out"
        style={{ left: RAIL_WIDTH, width: isOpen ? PANEL_WIDTH : 0 }}
      >
        <div className="flex-shrink-0 px-3 py-2 border-b border-gray-700/80
                        flex items-center justify-between">
          <span className="text-amber-400 text-sm font-semibold tracking-wide truncate">
            {lang === 'KR' ? currentTab?.labelKR : currentTab?.labelEN}
          </span>
          <button
            onClick={() => onTabClick(activeTab)}
            className="text-gray-500 hover:text-white text-xs ml-2"
            aria-label="Close panel"
          >✕</button>
        </div>

        <div className="flex-1 min-h-0 overflow-hidden">
          {activeTab === 'layers' && (
            <LayerPanel layers={layers} onToggle={onLayerToggle} lang={lang} />
          )}
          {activeTab === 'fish' && (
            <FishList
              fishData={fishData}
              lang={lang}
              searchTerm={searchTerm}
              onSearchChange={onSearchChange}
            />
          )}
        </div>
      </div>
    </>
  );
}
