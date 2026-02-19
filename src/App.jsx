import { useState, useCallback } from 'react';

import Sidebar, { RAIL_WIDTH, PANEL_WIDTH } from './components/Sidebar/Sidebar.jsx';
import BDOMap                               from './components/Map/BDOMap.jsx';

import { buildDefaultLayers } from './constants/layers.js';
import { useFishData }        from './hooks/useFishData.js';

/**
 * Root component — owns all shared state.
 *
 * Architecture:
 *   • Sidebar (rail + panel) lives at left=0, z=1001
 *   • Map div is offset to the right of the sidebar, transitions smoothly
 *   • Fish data is fetched once here and passed to both the map and the sidebar
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

  const handleTabClick = useCallback(tab => {
    setSidebarOpen(prev => activeTab === tab ? !prev : true);
    setActiveTab(tab);
  }, [activeTab]);

  // ── Fish list search (shared: clicking a fish in the panel pre-fills it) ──
  const [searchTerm, setSearchTerm] = useState('');

  const handleFishClick = useCallback(fishName => {
    setSearchTerm(fishName);
    setActiveTab('fish');
    setSidebarOpen(true);
  }, []);

  // ── Selected fishing zone ─────────────────────────────────────────────────
  const [selectedZone, setSelectedZone] = useState(null);

  const handleZoneSelect = useCallback((feature) => {
    setSelectedZone(feature);
  }, []);

  // ── Fish data (fetched once on mount) ─────────────────────────────────────
  const { fishData } = useFishData();

  // ── Sidebar total pixel width (used to offset the map) ───────────────────
  const sidebarWidth = RAIL_WIDTH + (sidebarOpen ? PANEL_WIDTH : 0);

  return (
    <div className="relative w-full h-full bg-gray-950">

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
      />

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
          onFishClick={handleFishClick}
        />
      </div>
    </div>
  );
}
