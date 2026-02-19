/**
 * FishDisplayPanel
 *
 * Popup overlay shown when a fishing zone is hovered or clicked.
 * Mirrors original fishdisplayInfo.update() exactly:
 *   • Fishing rod icon always first
 *   • Harpoon icon if 'harpoon' is in fishGroup
 *   • Each fish shown as a 25×25 individual PNG bordered by grade colour
 *   • Clicking a fish → jumps to Fish List with pre-filled search
 *
 * Individual fish PNGs (icons/fish/{file}.png) are used instead of the
 * sprite sheet because the .spriteCSS background-image is in an external
 * CSS file not bundled here.
 */

const ICON_BASE = 'https://bdofish.github.io/icons/';
const FISH_SIZE = 25; // px — same as original display panel sprite size

export default function FishDisplayPanel({ zone, fishData, lang, onFishClick, onClose }) {
  if (!zone) return null;

  const { name_EN, name_KR, fishGroup } = zone.properties;
  const zoneName = lang === 'KR' ? name_KR : name_EN;

  return (
    <div className="absolute top-4 right-4 z-[1000] pointer-events-auto">
      <div
        className="relative bg-gray-900/95 border border-amber-500/50 rounded-xl shadow-2xl p-3"
        style={{ maxWidth: 280, minWidth: 160 }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center
                     bg-gray-700 hover:bg-red-600 rounded-full text-white text-[10px]
                     transition-colors shadow"
          aria-label="Close"
        >✕</button>

        {/* Zone name */}
        <p
          className="text-amber-400 font-bold text-sm mb-2 pb-1.5 border-b border-amber-500/30 leading-tight"
          dangerouslySetInnerHTML={{ __html: zoneName }}
        />

        {/* Fish icons row */}
        <div className="flex flex-wrap gap-1 items-center">
          {/* Fishing rod always first */}
          <img
            src={`${ICON_BASE}fishingrod.png`}
            alt="Fishing Rod"
            title={lang === 'KR' ? '낚싯대' : 'Fishing Rod'}
            style={{ width: FISH_SIZE, height: FISH_SIZE }}
            onError={e => { e.target.style.display = 'none'; }}
          />

          {fishGroup.map((fileKey, i) => {
            if (fileKey === 'harpoon') {
              return (
                <img
                  key={i}
                  src={`${ICON_BASE}harpoon.png`}
                  alt="Harpoon"
                  title={lang === 'KR' ? '작살' : 'Harpoon'}
                  style={{ width: FISH_SIZE, height: FISH_SIZE }}
                  onError={e => { e.target.style.display = 'none'; }}
                />
              );
            }

            const fish = fishData.find(f => f.file === fileKey);
            if (!fish) return null;

            const fishName   = lang === 'KR' ? fish.name_KR : fish.name_EN;
            const gradeColor = fish.grade === '#E5E5E5' ? 'black' : fish.grade;

            return (
              <button
                key={i}
                title={fishName}
                onClick={() => onFishClick(fishName)}
                style={{
                  border: `1px solid ${gradeColor}`,
                  borderRadius: 2,
                  width: FISH_SIZE,
                  height: FISH_SIZE,
                  padding: 0,
                  background: 'transparent',
                  cursor: 'pointer',
                  flexShrink: 0,
                  overflow: 'hidden',
                  display: 'flex',
                }}
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={`${ICON_BASE}fish/${fileKey}.png`}
                  alt={fishName}
                  style={{ width: FISH_SIZE, height: FISH_SIZE, objectFit: 'contain', display: 'block' }}
                  onError={e => { e.target.style.opacity = '0'; }}
                />
              </button>
            );
          })}

          {fishGroup.length === 0 && (
            <span className="text-xs text-gray-400 italic">
              {lang === 'KR' ? '물고기 없음' : 'no fish'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
