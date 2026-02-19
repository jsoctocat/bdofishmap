import { useState, useMemo } from 'react';

/**
 * FishList — "Fish List" sidebar tab.
 *
 * Mirrors the original bdofish fish list exactly:
 *
 * Fish data fields used:
 *   file        — used to build icon URL
 *   name_EN/KR  — display name
 *   type_EN/KR  — "Freshwater" / "Saltwater" / "Other"
 *   method_EN/KR— "Fishing" / "Seagull" / "Harpoon"
 *   price       — silver value string (may be empty "")
 *   grade       — hex colour string (#FD6B49, #EDC845, #56B3E0, #A2BF40, #E5E5E5)
 *   class       — space-separated filter tokens e.g. "fw fs or"
 *
 * Filter token → meaning:
 *   Type:   fw=Freshwater  sw=Saltwater  etc=Other
 *   Method: fs=Fishing     sg=Seagull    hp=Harpoon
 *   Grade:  or=Orange      yw=Yellow     bl=Blue    gr=Green  wh=White
 *
 * Sorting: click any column header to sort asc/desc (matches jQuery tablesorter behaviour).
 *
 * Props:
 *   fishData       — raw array from useFishData
 *   lang           — 'EN' | 'KR'
 *   searchTerm     — controlled string (pre-filled by zone fish-click)
 *   onSearchChange — (value: string) => void
 */

const ICON_BASE = 'https://bdofish.github.io/icons/';

// ── Filter group definitions ──────────────────────────────────────────────────
const TYPE_FILTERS = [
  { token: 'fw',  labelEN: 'Freshwater', labelKR: '민물'  },
  { token: 'sw',  labelEN: 'Saltwater',  labelKR: '바닷물' },
  { token: 'etc', labelEN: 'Other',      labelKR: '그 외'  },
];
const METHOD_FILTERS = [
  { token: 'fs', labelEN: 'Fishing', labelKR: '낚시' },
  { token: 'sg', labelEN: 'Seagull', labelKR: '갈매기' },
  { token: 'hp', labelEN: 'Harpoon', labelKR: '작살' },
];
const GRADE_FILTERS = [
  { token: 'or', color: '#FD6B49', labelEN: 'Orange', labelKR: '오렌지' },
  { token: 'yw', color: '#EDC845', labelEN: 'Yellow', labelKR: '노랑'   },
  { token: 'bl', color: '#56B3E0', labelEN: 'Blue',   labelKR: '파랑'   },
  { token: 'gr', color: '#A2BF40', labelEN: 'Green',  labelKR: '초록'   },
  { token: 'wh', color: '#a2a2a2', labelEN: 'White',  labelKR: '흰색'   },
];

// ── Sort helpers ──────────────────────────────────────────────────────────────
const COLUMNS = [
  { key: 'type',   labelEN: 'Type',   labelKR: '종류'  },
  { key: 'method', labelEN: 'Method', labelKR: '방식'  },
  { key: 'icon',   labelEN: 'Icon',   labelKR: '아이콘', noSort: true },
  { key: 'name',   labelEN: 'Name',   labelKR: '이름'  },
  { key: 'price',  labelEN: 'Price',  labelKR: '가격'  },
];

function getFishValue(fish, colKey, lang) {
  switch (colKey) {
    case 'type':   return lang === 'KR' ? fish.type_KR   : fish.type_EN;
    case 'method': return lang === 'KR' ? fish.method_KR : fish.method_EN;
    case 'name':   return lang === 'KR' ? fish.name_KR   : fish.name_EN;
    case 'price':  return Number(fish.price) || 0;
    default:       return '';
  }
}

// ── FilterPill: a small toggle button ────────────────────────────────────────
function FilterPill({ label, active, onClick, borderColor }) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={`text-[10px] px-1.5 py-0.5 rounded border transition-colors ${
        active
          ? 'bg-amber-500 border-amber-500 text-black font-semibold'
          : 'border-gray-600 text-gray-400 hover:border-amber-400 hover:text-white'
      }`}
      style={borderColor && active ? { background: borderColor, borderColor: borderColor } : undefined}
    >
      {borderColor
        ? <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 2,
                         background: borderColor, border: `1px solid ${borderColor}` }} />
        : label}
    </button>
  );
}

// ── SortArrow indicator ───────────────────────────────────────────────────────
function SortArrow({ col, sortCol, sortDir }) {
  if (sortCol !== col) return <span className="text-gray-600 ml-1">↕</span>;
  return <span className="text-amber-300 ml-1">{sortDir === 'asc' ? '↑' : '↓'}</span>;
}

// ── Main component ────────────────────────────────────────────────────────────
export default function FishList({ fishData, lang, searchTerm, onSearchChange }) {
  const [activeFilters, setActiveFilters] = useState([]);   // array of token strings
  const [sortCol,  setSortCol]  = useState('name');
  const [sortDir,  setSortDir]  = useState('asc');

  // Toggle a filter token on/off
  function toggleFilter(token) {
    setActiveFilters(prev =>
      prev.includes(token) ? prev.filter(t => t !== token) : [...prev, token],
    );
  }

  // Click column header → toggle sort
  function handleSort(colKey) {
    if (sortCol === colKey) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCol(colKey);
      setSortDir('asc');
    }
  }

  // ── Filter + search + sort (memoised for performance) ─────────────────────
  const displayed = useMemo(() => {
    let list = fishData;

    // Active filter: fish.class must contain ALL active tokens
    // (mirrors the original jQuery: shows rows whose className contains all checked values)
    if (activeFilters.length > 0) {
      list = list.filter(fish => {
        const cls = (fish.class ?? '').split(' ');
        return activeFilters.every(token => cls.includes(token));
      });
    }

    // Text search across name (both languages)
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(fish =>
        (fish.name_EN ?? '').toLowerCase().includes(q) ||
        (fish.name_KR ?? '').toLowerCase().includes(q),
      );
    }

    // Sort
    list = [...list].sort((a, b) => {
      const va = getFishValue(a, sortCol, lang);
      const vb = getFishValue(b, sortCol, lang);
      let cmp = 0;
      if (typeof va === 'number') cmp = va - vb;
      else cmp = String(va ?? '').localeCompare(String(vb ?? ''));
      return sortDir === 'asc' ? cmp : -cmp;
    });

    return list;
  }, [fishData, activeFilters, searchTerm, sortCol, sortDir, lang]);

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col h-full">

      {/* ── Search + filter bar ─────────────────────────────────────────── */}
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

        {/* Type filters */}
        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-[10px] text-gray-500 font-semibold uppercase mr-0.5">
            {lang === 'KR' ? '종류' : 'Type'}
          </span>
          {TYPE_FILTERS.map(f => (
            <FilterPill
              key={f.token}
              label={lang === 'KR' ? f.labelKR : f.labelEN}
              active={activeFilters.includes(f.token)}
              onClick={() => toggleFilter(f.token)}
            />
          ))}
        </div>

        {/* Method filters */}
        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-[10px] text-gray-500 font-semibold uppercase mr-0.5">
            {lang === 'KR' ? '방식' : 'Method'}
          </span>
          {METHOD_FILTERS.map(f => (
            <FilterPill
              key={f.token}
              label={lang === 'KR' ? f.labelKR : f.labelEN}
              active={activeFilters.includes(f.token)}
              onClick={() => toggleFilter(f.token)}
            />
          ))}
        </div>

        {/* Grade filters (coloured squares) */}
        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-[10px] text-gray-500 font-semibold uppercase mr-0.5">
            {lang === 'KR' ? '등급' : 'Grade'}
          </span>
          {GRADE_FILTERS.map(f => (
            <button
              key={f.token}
              title={lang === 'KR' ? f.labelKR : f.labelEN}
              onClick={() => toggleFilter(f.token)}
              style={{
                width: 16, height: 16,
                borderRadius: 3,
                background: f.color,
                border: activeFilters.includes(f.token)
                  ? '2px solid white'
                  : '2px solid transparent',
                cursor: 'pointer',
                outline: activeFilters.includes(f.token) ? `2px solid ${f.color}` : 'none',
                outlineOffset: 1,
              }}
            />
          ))}
        </div>

        {/* Reset button + count */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => { setActiveFilters([]); onSearchChange(''); }}
            className="text-[10px] text-gray-500 hover:text-amber-400 transition-colors underline"
          >
            {lang === 'KR' ? '초기화' : 'Reset'}
          </button>
          <span className="text-[10px] text-gray-500">
            {displayed.length} / {fishData.length}
          </span>
        </div>
      </div>

      {/* ── Sortable fish table ──────────────────────────────────────────── */}
      <div className="sidebar-scroll flex-1 overflow-y-auto min-h-0">
        <table className="w-full text-xs border-collapse">
          <thead className="sticky top-0 z-10">
            <tr className="bg-amber-600 text-black">
              {COLUMNS.map(col => (
                <th
                  key={col.key}
                  className={`px-1 py-1 text-left font-semibold whitespace-nowrap select-none
                    ${col.noSort ? '' : 'cursor-pointer hover:bg-amber-500'}`}
                  style={{ width: col.key === 'name' ? 'auto' : col.key === 'icon' ? 36 : col.key === 'price' ? 52 : 52 }}
                  onClick={col.noSort ? undefined : () => handleSort(col.key)}
                >
                  {lang === 'KR' ? col.labelKR : col.labelEN}
                  {!col.noSort && <SortArrow col={col.key} sortCol={sortCol} sortDir={sortDir} />}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {displayed.map((fish, i) => {
              const name       = lang === 'KR' ? fish.name_KR   : fish.name_EN;
              const type       = lang === 'KR' ? fish.type_KR   : fish.type_EN;
              const method     = lang === 'KR' ? fish.method_KR : fish.method_EN;
              // '#E5E5E5' is white — show in a visible grey instead
              const nameColor  = fish.grade === '#E5E5E5' ? '#b0b0b0' : fish.grade;

              return (
                <tr
                  key={i}
                  className="border-b border-gray-800/60 hover:bg-gray-800/50 transition-colors"
                >
                  {/* Type */}
                  <td className="px-1 py-1 text-gray-400 whitespace-nowrap">{type}</td>

                  {/* Method */}
                  <td className="px-1 py-1 text-gray-400 whitespace-nowrap">{method}</td>

                  {/* Icon (individual PNG) */}
                  <td className="px-1 py-1 text-center">
                    <div
                      className="inline-flex items-center justify-center mx-auto"
                      style={{
                        width: 32, height: 32,
                        border: `1px solid ${fish.grade === '#E5E5E5' ? 'black' : fish.grade}`,
                        borderRadius: 2,
                      }}
                    >
                      <img
                        src={`${ICON_BASE}fish/${fish.file}.png`}
                        alt={name}
                        style={{ width: 28, height: 28, objectFit: 'contain' }}
                        onError={e => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  </td>

                  {/* Name (+ optional price) */}
                  <td className="px-1 py-1" style={{ color: nameColor }}>
                    <div className="font-medium">{name}</div>
                    {fish.price !== '' && fish.price != null && (
                      <div className="flex items-center gap-0.5 text-gray-300 text-[10px] mt-0.5">
                        {Number(fish.price).toLocaleString()}
                        <img
                          src={`${ICON_BASE}Silver.png`}
                          alt="silver"
                          style={{ width: 12, height: 12 }}
                          onError={e => { e.target.style.display = 'none'; }}
                        />
                      </div>
                    )}
                  </td>

                  {/* Price (sortable column — shows in name cell, this col is hidden on small) */}
                  <td className="px-1 py-1 text-gray-400 text-right whitespace-nowrap">
                    {fish.price !== '' && fish.price != null
                      ? Number(fish.price).toLocaleString()
                      : '—'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {displayed.length === 0 && (
          <p className="text-center text-gray-500 py-8 text-xs">
            {lang === 'KR' ? '결과 없음' : 'No results found'}
          </p>
        )}
      </div>
    </div>
  );
}
