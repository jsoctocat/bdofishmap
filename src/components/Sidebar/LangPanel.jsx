/**
 * LangPanel — Language selection panel.
 *
 * Shows two language cards (English / 한국어).
 * The active language is highlighted; clicking the other switches it.
 *
 * Props:
 *   lang         — 'EN' | 'KR'   current language
 *   onLangChange — (lang: 'EN' | 'KR') => void
 */

const LANGUAGES = [
  {
    code:    'EN',
    label:   'English',
    native:  'English',
    flag:    '🇺🇸',
    desc:    'Interface in English',
  },
  {
    code:    'KR',
    label:   'Korean',
    native:  '한국어',
    flag:    '🇰🇷',
    desc:    '한국어로 인터페이스 표시',
  },
];

export default function LangPanel({ lang, onLangChange }) {
  return (
    <div className="p-3 space-y-3">

      <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold pb-1">
        {lang === 'KR' ? '언어 선택' : 'Select Language'}
      </p>

      {LANGUAGES.map(l => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            onClick={() => onLangChange(l.code)}
            className="w-full text-left transition-all duration-150 rounded-xl border
                       flex items-center gap-3 px-3 py-3 group"
            style={{
              background:   active ? 'rgba(217,119,6,0.15)' : 'rgba(255,255,255,0.03)',
              borderColor:  active ? '#d97706'               : 'rgba(255,255,255,0.08)',
              cursor:       active ? 'default' : 'pointer',
            }}
          >
            {/* Flag */}
            <span style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}>{l.flag}</span>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className="font-bold"
                  style={{ fontSize: 13, color: active ? '#fcd34d' : '#e5e7eb' }}
                >
                  {l.native}
                </span>
                {l.native !== l.label && (
                  <span style={{ fontSize: 10, color: '#6b7280' }}>· {l.label}</span>
                )}
              </div>
              <p style={{ fontSize: 10, color: '#9ca3af', marginTop: 2 }}>{l.desc}</p>
            </div>

            {/* Active indicator */}
            <div
              className="flex-shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center"
              style={{
                borderColor:  active ? '#d97706'    : '#4b5563',
                background:   active ? '#d97706'    : 'transparent',
              }}
            >
              {active && (
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              )}
            </div>
          </button>
        );
      })}

      <p className="text-[10px] text-gray-600 text-center pt-1">
        {lang === 'KR'
          ? '모든 물고기 이름, 설명 및 UI가 변경됩니다.'
          : 'All fish names, tooltips and UI will change.'}
      </p>

    </div>
  );
}
