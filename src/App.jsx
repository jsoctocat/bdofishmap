import { useState, useCallback } from 'react';

import Sidebar  from './components/Sidebar/Sidebar.jsx';
import BDOMap   from './components/Map/BDOMap.jsx';

import { buildDefaultLayers } from './constants/layers.js';
import { useFishData }        from './hooks/useFishData.js';

const SIDEBAR_PANEL_WIDTH = 260; // px – must match Sidebar.jsx
const SIDEBAR_RAIL_WIDTH  = 44;  // px – must match Sidebar.jsx

/**
 * Root application component.
 *
 * Owns all shared state and passes it down to Sidebar and BDOMap:
 *   • language (EN / KR)
 *   • layer visibility  { [key]: boolean }
 *   • sidebar open/close + active tab
 *   • selected fishing zone
 *   • fish list search term + type filters
 */
export default function App() {
  // ── Language ─────────────────────────────────────────────
  const [lang, setLang] = useState('EN');
  const toggleLang = useCallback(() => setLang(l => l === 'EN' ? 'KR' : 'EN'), []);

  // ── Layer visibility ─────────────────────────────────────
  const [layers, setLayers] = useState(buildDefaultLayers);
  const toggleLayer = useCallback(
    (key) => setLayers(prev => ({ ...prev, [key]: !prev[key] })),
    [],
  );

  // ── Sidebar ──────────────────────────────────────────────
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab,   setActiveTab]   = useState('layers');

  // Clicking the active tab toggles the panel; clicking another tab opens it
  const handleTabClick = useCallback((tab) => {
    setSidebarOpen(prev => (activeTab === tab ? !prev : true));
    setActiveTab(tab);
  }, [activeTab]);

  // ── Fish list state ───────────────────────────────────────
  const [searchTerm,    setSearchTerm]    = useState('');
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = useCallback(
    (type) => setActiveFilters(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type],
    ),
    [],
  );

  // ── Selected fishing zone ─────────────────────────────────
  const [selectedZone, setSelectedZone] = useState(null);

  // Clicking a fish icon inside FishDisplayPanel → jump to Fish List
  const handleFishClick = useCallback((fishName) => {
    setSearchTerm(fishName);
    setActiveTab('fish');
    setSidebarOpen(true);
  }, []);

  // ── Fish data (fetched once) ──────────────────────────────
  const { fishData, spriteSort } = useFishData();

  // ── Sidebar offset applied to the map container ───────────
  const mapLeft = SIDEBAR_RAIL_WIDTH + (sidebarOpen ? SIDEBAR_PANEL_WIDTH : 0);

  return (
    <div className="relative w-full h-screen bg-gray-950 overflow-hidden">
      {/* Sidebar: rail + collapsible content panel */}
      <Sidebar
        isOpen={sidebarOpen}
        activeTab={activeTab}
        onTabClick={handleTabClick}
        lang={lang}
        onLangToggle={toggleLang}
        layers={layers}
        onLayerToggle={toggleLayer}
        fishData={fishData}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        activeFilters={activeFilters}
        onFilterChange={toggleFilter}
      />

      {/* Map: offset to the right of the sidebar */}
      <div
        className="absolute inset-0 transition-[left] duration-300 ease-in-out"
        style={{ left: mapLeft }}
      >
        <BDOMap
          layers={layers}
          lang={lang}
          selectedZone={selectedZone}
          onZoneClick={setSelectedZone}
          onZoneClose={() => setSelectedZone(null)}
          fishData={fishData}
          spriteSort={spriteSort}
          onFishClick={handleFishClick}
        />
      </div>
    </div>
  );
}
