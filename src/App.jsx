import { useState, useCallback } from 'react';

import Sidebar, { RAIL_WIDTH, PANEL_WIDTH } from './components/Sidebar/Sidebar.jsx';
import BDOMap                               from './components/Map/BDOMap.jsx';

import { buildDefaultLayers } from './constants/layers.js';
import { useFishData }        from './hooks/useFishData.js';

/**
 * Root component — owns all shared state.
 *
 * State tree:
 *   lang           — 'EN' | 'KR'
 *   layers         — { [key]: boolean }  layer visibility
 *   sidebarOpen    — boolean
 *   activeTab      — 'layers' | 'fish'
 *   selectedZone   — GeoJSON feature | null (hovered or clicked zone)
 *   zoneIsLocked   — boolean  (true when zone was clicked, not just hovered)
 *   searchTerm     — string  fish list search
 *   activeFilters  — string[]  fish type filters
 */
export default function App() {
  // ── Language ─────────────────────────────────────────────────────────────
  const [lang, setLang] = useState('EN');
  const toggleLang = useCallback(() => setLang(l => l === 'EN' ? 'KR' : 'EN'), []);

  // ── Layer visibility ──────────────────────────────────────────────────────
  const [layers, setLayers] = useState(buildDefaultLayers);
  const toggleLayer = useCallback(
    key => setLayers(prev => ({ ...prev, [key]: !prev[key] })),
    [],
  );

  // ── Sidebar ───────────────────────────────────────────────────────────────
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab,   setActiveTab]   = useState('layers');

  // Clicking the active tab closes the panel; any other tab opens it
  const handleTabClick = useCallback(tab => {
    setSidebarOpen(prev => activeTab === tab ? !prev : true);
    setActiveTab(tab);
  }, [activeTab]);

  // ── Fish list ─────────────────────────────────────────────────────────────
  const [searchTerm,    setSearchTerm]    = useState('');
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = useCallback(
    type => setActiveFilters(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type],
    ),
    [],
  );

  // ── Selected zone (from map polygon interaction) ──────────────────────────
  const [selectedZone, setSelectedZone] = useState(null);

  // Called by the map when a zone is hovered (locked=false) or clicked (locked=true)
  const handleZoneSelect = useCallback((feature, locked) => {
    setSelectedZone(feature);
    // If user clicks a fish in the display panel, locked is still true — don't close
  }, []);

  // Called when a fish sprite in FishDisplayPanel is clicked
  const handleFishClick = useCallback(fishName => {
    setSearchTerm(fishName);
    setActiveTab('fish');
    setSidebarOpen(true);
  }, []);

  // ── Fish data ─────────────────────────────────────────────────────────────
  const { fishData, spriteSort } = useFishData();

  // ── Map left offset follows sidebar state ─────────────────────────────────
  const sidebarWidth = RAIL_WIDTH + (sidebarOpen ? PANEL_WIDTH : 0);

  return (
    <div className="relative w-full h-full bg-gray-950">

      {/* Sidebar: always-visible rail + optional content panel */}
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

      {/* Map — pushed right so it never hides under the sidebar */}
      <div
        className="absolute top-0 bottom-0 right-0 transition-[left] duration-300 ease-in-out"
        style={{ left: sidebarWidth }}
      >
        <BDOMap
          layers={layers}
          lang={lang}
          sidebarWidth={sidebarWidth}
          selectedZone={selectedZone}
          onZoneSelect={handleZoneSelect}
          fishData={fishData}
          spriteSort={spriteSort}
          onFishClick={handleFishClick}
        />
      </div>
    </div>
  );
}
