import LayerPanel  from './LayerPanel.jsx';
import FishList    from './FishList.jsx';
import NoticePanel from './NoticePanel.jsx';
import LangPanel   from './LangPanel.jsx';

/**
 * Sidebar — icon rail (44px) + sliding content panel (260px).
 *
 * Tabs: Layers | Fish List | Notices | Language
 * Language tab lives at the bottom of the rail (above the flex spacer),
 * replacing the old toggle button.
 */

export const RAIL_WIDTH  = 44;
export const PANEL_WIDTH = 260;

const TOP_TABS = [
  { id: 'layers', icon: '🗺️', labelEN: 'Layers',    labelKR: '레이어'      },
  { id: 'fish',   icon: '🐟', labelEN: 'Fish List',  labelKR: '물고기 목록' },
  { id: 'notice', icon: '📋', labelEN: 'Notices',    labelKR: '공지사항'    },
];

const BOTTOM_TABS = [
  { id: 'lang', icon: '🌐', labelEN: 'Language', labelKR: '언어' },
];

const ALL_TABS = [...TOP_TABS, ...BOTTOM_TABS];

export default function Sidebar({
  isOpen, activeTab, onTabClick,
  lang, onLangChange,
  layers, onLayerToggle,
  fishData, searchTerm, onSearchChange,
}) {
  const currentTab = ALL_TABS.find(t => t.id === activeTab);

  function RailButton({ tab }) {
    const active = activeTab === tab.id && isOpen;
    return (
      <button
        onClick={() => onTabClick(tab.id)}
        title={lang === 'KR' ? tab.labelKR : tab.labelEN}
        className={`w-full flex items-center justify-center py-3 text-lg transition-colors
          ${active
            ? 'bg-amber-600 text-white'
            : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
      >
        {tab.icon}
      </button>
    );
  }

  return (
    <>
      {/* ── Icon rail ──────────────────────────────────────────── */}
      <div
        className="absolute left-0 top-0 bottom-0 z-[1001] flex flex-col
                   bg-gray-900 border-r border-gray-700/80"
        style={{ width: RAIL_WIDTH }}
      >
        {/* Top tabs */}
        {TOP_TABS.map(tab => <RailButton key={tab.id} tab={tab} />)}

        <div className="flex-1" />

        {/* Divider */}
        <div className="border-t border-gray-700/80 mx-2" />

        {/* Bottom tabs (language) */}
        {BOTTOM_TABS.map(tab => <RailButton key={tab.id} tab={tab} />)}
      </div>

      {/* ── Content panel ──────────────────────────────────────── */}
      <div
        className="absolute top-0 bottom-0 z-[1000] bg-gray-950/95 backdrop-blur-sm
                   border-r border-gray-700/80 flex flex-col overflow-hidden
                   transition-[width] duration-300 ease-in-out"
        style={{ left: RAIL_WIDTH, width: isOpen ? PANEL_WIDTH : 0 }}
      >
        {/* Panel header */}
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

        {/* Panel content */}
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
          {activeTab === 'notice' && (
            <NoticePanel lang={lang} />
          )}
          {activeTab === 'lang' && (
            <LangPanel lang={lang} onLangChange={onLangChange} />
          )}
        </div>
      </div>
    </>
  );
}
