/**
 * The "Fish List" tab content of the sidebar.
 *
 * Features:
 *  • Text search across name_EN / name_KR
 *  • Filter buttons by fish type (Freshwater / Saltwater / etc.)
 *  • Sortable table: Type | Method | Icon | Name (alphabetical)
 *  • Fish icon colours match in-game grade colours
 *
 * Props:
 *   fishData      — array of fish objects from useFishData
 *   lang          — 'EN' | 'KR'
 *   searchTerm    — controlled search string
 *   onSearchChange — (value: string) => void
 *   activeFilters — string[] of active type filters
 *   onFilterChange — (type: string) => void  (toggles a filter)
 */

const ICON_BASE = 'https://bdofish.github.io/icons/';

export default function FishList({
  fishData,
  lang,
  searchTerm,
  onSearchChange,
  activeFilters,
  onFilterChange,
}) {
  // Collect unique fish types from loaded data
  const types = [...new Set(fishData.map(f => f.type).filter(Boolean))].sort();

  // Apply search + type filters
  const filtered = fishData.filter(fish => {
    const name = lang === 'KR' ? fish.name_KR : fish.name_EN;
    const matchSearch  = !searchTerm || name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilter  = activeFilters.length === 0 || activeFilters.includes(fish.type);
    return matchSearch && matchFilter;
  });

  // Alphabetical sort by display name
  const sorted = [...filtered].sort((a, b) => {
    const na = lang === 'KR' ? a.name_KR : a.name_EN;
    const nb = lang === 'KR' ? b.name_KR : b.name_EN;
    return na.localeCompare(nb);
  });

  return (
    <div className="flex flex-col h-full">
      {/* ── Search & Filter bar ─────────────────────────────── */}
      <div className="p-2 border-b border-gray-700 flex-shrink-0 space-y-2">
        <input
          type="text"
          placeholder={lang === 'KR' ? '물고기 검색...' : 'Search fish...'}
          value={searchTerm}
          onChange={e => onSearchChange(e.target.value)}
          className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1
                     text-xs text-white placeholder-gray-500
                     focus:outline-none focus:border-amber-500 transition-colors"
        />

        {/* Type filter pills */}
        <div className="flex flex-wrap gap-1">
          {types.map(type => (
            <button
              key={type}
              onClick={() => onFilterChange(type)}
              className={`text-[10px] px-2 py-0.5 rounded border transition-colors ${
                activeFilters.includes(type)
                  ? 'bg-amber-500 border-amber-500 text-black font-semibold'
                  : 'border-gray-600 text-gray-400 hover:border-amber-400 hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* ── Fish table ─────────────────────────────────────── */}
      <div className="sidebar-scroll flex-1 overflow-y-auto min-h-0">
        <table className="w-full text-xs">
          <thead className="sticky top-0 bg-amber-600 text-black z-10">
            <tr>
              <th className="px-1 py-1 text-left w-16 font-semibold">
                {lang === 'KR' ? '종류' : 'Type'}
              </th>
              <th className="px-1 py-1 text-left w-14 font-semibold">
                {lang === 'KR' ? '방식' : 'Method'}
              </th>
              <th className="px-1 py-1 text-center w-8 font-semibold">
                {lang === 'KR' ? '아이콘' : 'Icon'}
              </th>
              <th className="px-1 py-1 text-left font-semibold">
                {lang === 'KR' ? '이름' : 'Name'}
              </th>
            </tr>
          </thead>

          <tbody>
            {sorted.map((fish, i) => {
              const name       = lang === 'KR' ? fish.name_KR : fish.name_EN;
              const gradeColor = fish.grade === '#E5E5E5' ? '#888888' : fish.grade;

              return (
                <tr
                  key={i}
                  className="border-b border-gray-800/60 hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-1 py-0.5 text-gray-400">{fish.type}</td>
                  <td className="px-1 py-0.5 text-gray-400">{fish.method}</td>
                  <td className="px-1 py-0.5 text-center">
                    <img
                      src={`${ICON_BASE}fish/${fish.file}.png`}
                      alt={name}
                      className="w-5 h-5 inline-block"
                      onError={e => { e.target.style.display = 'none'; }}
                    />
                  </td>
                  <td className="px-1 py-0.5 font-medium" style={{ color: gradeColor }}>
                    {name}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {sorted.length === 0 && (
          <p className="text-center text-gray-500 py-8 text-xs">
            {lang === 'KR' ? '결과 없음' : 'No results found'}
          </p>
        )}
      </div>
    </div>
  );
}
