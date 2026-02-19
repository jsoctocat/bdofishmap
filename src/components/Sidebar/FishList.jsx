import { useState, useMemo } from 'react';

/**
 * FishList — "Fish List" sidebar tab.
 *
 * Fixes applied:
 *   1. table-layout: fixed with proper column widths that fit the 260px panel
 *   2. Abbreviated type/method text (Fresh/Salt/Other, Rod/Gull/Harp) prevents overflow
 *   3. Icon URL changed to bdofish.com (individual fish PNGs)
 *   4. 🐟 emoji fallback when a fish icon 404s
 */

// Use bdofish.com as the authoritative icon host
const ICON_BASE = 'https://bdofish.com/icons/';

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

const TYPE_ABBR = { fw: 'Fresh', sw: 'Salt', etc: 'Other' };
const METH_ABBR = { fs: 'Rod',   sg: 'Gull', hp: 'Harp'  };

function typeShort(fish, lang) {
  if (lang === 'KR') {
    const map = { Freshwater: '민물', Saltwater: '바닷물', Other: '기타' };
    return map[fish.type_EN] ?? fish.type_EN;
  }
  const t = (fish.class ?? '').split(' ').find(x => x === 'fw' || x === 'sw' || x === 'etc');
  return TYPE_ABBR[t] ?? fish.type_EN;
}

function methodShort(fish, lang) {
  if (lang === 'KR') {
    const map = { Fishing: '낚시', Seagull: '갈매기', Harpoon: '작살' };
    return map[fish.method_EN] ?? fish.method_EN;
  }
  const t = (fish.class ?? '').split(' ').find(x => x === 'fs' || x === 'sg' || x === 'hp');
  return METH_ABBR[t] ?? fish.method_EN;
}

const COLUMNS = [
  { key: 'type',   labelEN: 'Type',   labelKR: '종류' },
  { key: 'method', labelEN: 'Meth',   labelKR: '방식' },
  { key: 'icon',   labelEN: '',       labelKR: '',     noSort: true },
  { key: 'name',   labelEN: 'Name',   labelKR: '이름' },
  { key: 'price',  labelEN: 'Price',  labelKR: '가격' },
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

function FilterPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={`text-[10px] px-1.5 py-0.5 rounded border transition-colors ${
        active
          ? 'bg-amber-500 border-amber-500 text-black font-semibold'
          : 'border-gray-600 text-gray-400 hover:border-amber-400 hover:text-white'
      }`}
    >
      {label}
    </button>
  );
}

function SortArrow({ col, sortCol, sortDir }) {
  if (sortCol !== col) return <span className="text-gray-600 ml-0.5" style={{ fontSize: 9 }}>↕</span>;
  return <span className="text-amber-300 ml-0.5" style={{ fontSize: 9 }}>{sortDir === 'asc' ? '↑' : '↓'}</span>;
}

// Fish icon with broken-image fallback
function FishIcon({ fish }) {
  const [broken, setBroken] = useState(false);
  const border = fish.grade === '#E5E5E5' ? '#555' : fish.grade;
  return (
    <div style={{
      width: 26, height: 26,
      border: `1.5px solid ${border}`,
      borderRadius: 2,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', background: '#111827', flexShrink: 0,
    }}>
      {broken
        ? <span style={{ fontSize: 14, lineHeight: 1 }}>🐟</span>
        : <img
            src={`${ICON_BASE}fish/${fish.file}.png`}
            alt={fish.name_EN}
            style={{ width: 24, height: 24, objectFit: 'contain', display: 'block' }}
            onError={() => setBroken(true)}
          />}
    </div>
  );
}

export default function FishList({ fishData, lang, searchTerm, onSearchChange }) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [sortCol, setSortCol] = useState('name');
  const [sortDir, setSortDir] = useState('asc');

  function toggleFilter(token) {
    setActiveFilters(prev =>
      prev.includes(token) ? prev.filter(t => t !== token) : [...prev, token],
    );
  }

  function handleSort(colKey) {
    if (sortCol === colKey) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortCol(colKey); setSortDir('asc'); }
  }

  const displayed = useMemo(() => {
    let list = fishData;
    if (activeFilters.length > 0) {
      list = list.filter(fish => {
        const cls = (fish.class ?? '').split(' ');
        return activeFilters.every(token => cls.includes(token));
      });
    }
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(fish =>
        (fish.name_EN ?? '').toLowerCase().includes(q) ||
        (fish.name_KR ?? '').toLowerCase().includes(q),
      );
    }
    list = [...list].sort((a, b) => {
      const va = getFishValue(a, sortCol, lang);
      const vb = getFishValue(b, sortCol, lang);
      const cmp = typeof va === 'number' ? va - vb : String(va ?? '').localeCompare(String(vb ?? ''));
      return sortDir === 'asc' ? cmp : -cmp;
    });
    return list;
  }, [fishData, activeFilters, searchTerm, sortCol, sortDir, lang]);

  return (
    <div className="flex flex-col h-full">

      {/* ── Filter bar ─────────────────────────────────────────── */}
      <div className="p-2 border-b border-gray-700 flex-shrink-0 space-y-1.5">
        <input
          type="text"
          placeholder={lang === 'KR' ? '물고기 검색...' : 'Search fish...'}
          value={searchTerm}
          onChange={e => onSearchChange(e.target.value)}
          className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1
                     text-xs text-white placeholder-gray-500
                     focus:outline-none focus:border-amber-500 transition-colors"
        />

        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-[10px] text-gray-500 font-semibold uppercase w-8 flex-shrink-0">
            {lang === 'KR' ? '종류' : 'Type'}
          </span>
          {TYPE_FILTERS.map(f => (
            <FilterPill key={f.token} label={lang === 'KR' ? f.labelKR : f.labelEN}
              active={activeFilters.includes(f.token)} onClick={() => toggleFilter(f.token)} />
          ))}
        </div>

        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-[10px] text-gray-500 font-semibold uppercase w-8 flex-shrink-0">
            {lang === 'KR' ? '방식' : 'Meth'}
          </span>
          {METHOD_FILTERS.map(f => (
            <FilterPill key={f.token} label={lang === 'KR' ? f.labelKR : f.labelEN}
              active={activeFilters.includes(f.token)} onClick={() => toggleFilter(f.token)} />
          ))}
        </div>

        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-[10px] text-gray-500 font-semibold uppercase w-8 flex-shrink-0">
            {lang === 'KR' ? '등급' : 'Grade'}
          </span>
          {GRADE_FILTERS.map(f => (
            <button
              key={f.token}
              title={lang === 'KR' ? f.labelKR : f.labelEN}
              onClick={() => toggleFilter(f.token)}
              style={{
                width: 16, height: 16, borderRadius: 3, background: f.color,
                border: activeFilters.includes(f.token) ? '2px solid white' : '2px solid transparent',
                cursor: 'pointer',
                outline: activeFilters.includes(f.token) ? `2px solid ${f.color}` : 'none',
                outlineOffset: 1,
              }}
            />
          ))}
        </div>

        <div className="flex items-center justify-between pt-0.5">
          <button
            onClick={() => { setActiveFilters([]); onSearchChange(''); }}
            className="text-[10px] text-gray-500 hover:text-amber-400 transition-colors underline"
          >
            {lang === 'KR' ? '초기화' : 'Reset'}
          </button>
          <span className="text-[10px] text-gray-500">{displayed.length} / {fishData.length}</span>
        </div>
      </div>

      {/* ── Fish table ─────────────────────────────────────────── */}
      {/* 
        Column budget inside 260px panel:
          type 38 + method 34 + icon 30 + name(auto) + price 54 + padding ≈ 260px
      */}
      <div className="sidebar-scroll flex-1 overflow-y-auto min-h-0">
        <table className="w-full border-collapse" style={{ tableLayout: 'fixed', fontSize: 10 }}>
          <colgroup>
            <col style={{ width: 38 }} />
            <col style={{ width: 34 }} />
            <col style={{ width: 30 }} />
            <col />
            <col style={{ width: 54 }} />
          </colgroup>

          <thead className="sticky top-0 z-10">
            <tr className="bg-amber-600 text-black">
              {COLUMNS.map(col => (
                <th
                  key={col.key}
                  className={`px-0.5 py-1 text-left font-semibold select-none
                              overflow-hidden whitespace-nowrap
                              ${col.noSort ? '' : 'cursor-pointer hover:bg-amber-500'}`}
                  onClick={col.noSort ? undefined : () => handleSort(col.key)}
                  title={lang === 'KR' ? col.labelKR : col.labelEN}
                >
                  {lang === 'KR' ? col.labelKR : col.labelEN}
                  {!col.noSort && <SortArrow col={col.key} sortCol={sortCol} sortDir={sortDir} />}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {displayed.map((fish, i) => {
              const name      = lang === 'KR' ? fish.name_KR : fish.name_EN;
              const nameColor = fish.grade === '#E5E5E5' ? '#b0b0b0' : fish.grade;

              return (
                <tr key={i} className="border-b border-gray-800/60 hover:bg-gray-800/50 transition-colors">
                  {/* Type */}
                  <td className="px-0.5 py-1 text-gray-400 overflow-hidden whitespace-nowrap"
                      style={{ textOverflow: 'ellipsis' }}
                      title={lang === 'KR' ? fish.type_KR : fish.type_EN}>
                    {typeShort(fish, lang)}
                  </td>

                  {/* Method */}
                  <td className="px-0.5 py-1 text-gray-400 overflow-hidden whitespace-nowrap"
                      style={{ textOverflow: 'ellipsis' }}
                      title={lang === 'KR' ? fish.method_KR : fish.method_EN}>
                    {methodShort(fish, lang)}
                  </td>

                  {/* Icon */}
                  <td className="px-0.5 py-1">
                    <FishIcon fish={fish} />
                  </td>

                  {/* Name */}
                  <td className="px-1 py-1 overflow-hidden"
                      style={{ color: nameColor }}>
                    <div className="font-medium overflow-hidden whitespace-nowrap"
                         style={{ fontSize: 11, textOverflow: 'ellipsis' }}
                         title={name}>
                      {name}
                    </div>
                  </td>

                  {/* Price */}
                  <td className="px-0.5 py-1 text-gray-400 text-right whitespace-nowrap overflow-hidden">
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
