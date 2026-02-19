/**
 * Overlay panel that appears when a fishing zone polygon is clicked.
 *
 * Shows:
 *  • Zone name (EN or KR)
 *  • Fishing rod icon (always shown first)
 *  • Harpoon icon (if harpoon fishing is available)
 *  • Fish sprites from the sprite sheet, bordered in the fish's grade colour,
 *    clickable to jump to that fish in the Fish List tab
 *
 * Props:
 *   zone       — GeoJSON feature (with .properties.name_EN / name_KR / fishGroup)
 *   fishData   — fish array from useFishData
 *   spriteSort — sorted file-key array (for sprite-sheet Y offset)
 *   lang       — 'EN' | 'KR'
 *   onFishClick — (fishName: string) => void  opens Fish List and searches
 *   onClose    — () => void
 */

const ICON_BASE = 'https://bdofish.github.io/icons/';

export default function FishDisplayPanel({ zone, fishData, spriteSort, lang, onFishClick, onClose }) {
  if (!zone) return null;

  const { name_EN, name_KR, fishGroup } = zone.properties;
  const zoneName = lang === 'KR' ? name_KR : name_EN;

  return (
    <div className="absolute top-4 right-4 z-[1000] pointer-events-auto">
      <div className="relative bg-gray-900/92 backdrop-blur border border-amber-500/40
                      rounded-xl shadow-2xl p-3 max-w-xs">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center
                     bg-gray-700 hover:bg-red-600 rounded-full text-white text-[10px]
                     transition-colors shadow"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Zone name */}
        <div className="text-amber-400 font-bold text-sm mb-2 pb-1.5 border-b border-amber-500/30">
          {zoneName}
        </div>

        {/* Fish group icons */}
        <div className="flex flex-wrap gap-1 items-center">
          {/* Fishing rod is always shown */}
          <img
            src={`${ICON_BASE}fishingrod.png`}
            alt={lang === 'KR' ? '낚싯대' : 'Fishing Rod'}
            title={lang === 'KR' ? '낚싯대' : 'Fishing Rod'}
            className="w-5 h-5"
            onError={e => { e.target.style.display = 'none'; }}
          />

          {fishGroup.map((fileKey, i) => {
            // Harpoon is a special non-fish entry
            if (fileKey === 'harpoon') {
              return (
                <img
                  key={i}
                  src={`${ICON_BASE}harpoon.png`}
                  alt={lang === 'KR' ? '작살' : 'Harpoon'}
                  title={lang === 'KR' ? '작살' : 'Harpoon'}
                  className="w-5 h-5"
                  onError={e => { e.target.style.display = 'none'; }}
                />
              );
            }

            const fish = fishData.find(f => f.file === fileKey);
            if (!fish) return null;

            const fishName   = lang === 'KR' ? fish.name_KR : fish.name_EN;
            const gradeColor = fish.grade === '#E5E5E5' ? 'black' : fish.grade;

            // Each fish occupies 25 px vertically in the shared sprite sheet
            const spriteIndex = spriteSort.indexOf(fileKey);
            const spriteY     = spriteIndex !== -1 ? -25 * spriteIndex : 0;

            return (
              <button
                key={i}
                title={fishName}
                onClick={() => onFishClick(fishName)}
                className="inline-block hover:scale-110 transition-transform"
                style={{ border: `1px solid ${gradeColor}`, borderRadius: 2 }}
              >
                <span
                  className="block w-[25px] h-[25px]"
                  style={{
                    backgroundImage:    `url(${ICON_BASE}fish_sprite.png)`,
                    backgroundPosition: `0px ${spriteY}px`,
                    backgroundRepeat:   'no-repeat',
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
