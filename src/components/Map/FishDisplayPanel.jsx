/**
 * FishDisplayPanel
 *
 * Shows the catchable fish for the zone that was last hovered or clicked.
 * Mirrors the original fishdisplayInfo.update() behaviour:
 *   • Always shows the fishing rod icon first
 *   • Shows harpoon icon if 'harpoon' appears in fishGroup
 *   • Shows each fish as a sprite-sheet slice, bordered in grade colour
 *   • Clicking a fish sprite triggers onFishClick → jumps to Fish List
 */

const ICON_BASE = 'https://bdofish.github.io/icons/';

export default function FishDisplayPanel({
  zone, fishData, spriteSort, lang, onFishClick, onClose,
}) {
  if (!zone) return null;

  const { name_EN, name_KR, fishGroup } = zone.properties;
  const zoneName = lang === 'KR' ? name_KR : name_EN;

  return (
    <div className="absolute top-4 right-4 z-[1000] pointer-events-auto">
      <div className="relative bg-gray-900/92 backdrop-blur border border-amber-500/40
                      rounded-xl shadow-2xl p-3 max-w-xs min-w-[180px]">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center
                     bg-gray-700 hover:bg-red-600 rounded-full text-white text-[10px]
                     transition-colors shadow-md"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Zone name */}
        <p
          className="text-amber-400 font-bold text-sm mb-2 pb-1.5 border-b border-amber-500/30"
          dangerouslySetInnerHTML={{ __html: zoneName }}
        />

        {/* Fish icons */}
        <div className="flex flex-wrap gap-1.5 items-center">

          {/* Fishing rod — always first */}
          <img
            src={`${ICON_BASE}fishingrod.png`}
            alt="Fishing Rod"
            title={lang === 'KR' ? '낚싯대' : 'Fishing Rod'}
            className="w-5 h-5 flex-shrink-0"
            onError={e => { e.target.style.display = 'none'; }}
          />

          {fishGroup.map((fileKey, i) => {

            /* Harpoon — special non-fish entry */
            if (fileKey === 'harpoon') {
              return (
                <img
                  key={i}
                  src={`${ICON_BASE}harpoon.png`}
                  alt="Harpoon"
                  title={lang === 'KR' ? '작살' : 'Harpoon'}
                  className="w-5 h-5 flex-shrink-0"
                  onError={e => { e.target.style.display = 'none'; }}
                />
              );
            }

            const fish = fishData.find(f => f.file === fileKey);
            if (!fish) return null;

            const fishName   = lang === 'KR' ? fish.name_KR : fish.name_EN;
            const gradeColor = fish.grade === '#E5E5E5' ? 'black' : fish.grade;

            // Sprite-sheet Y offset: each fish occupies 25 px
            const spriteIndex = spriteSort.indexOf(fileKey);
            const spriteY     = spriteIndex !== -1 ? -25 * spriteIndex : 0;

            return (
              <button
                key={i}
                title={fishName}
                onClick={() => onFishClick(fishName)}
                className="inline-block hover:scale-110 transition-transform cursor-pointer
                           focus:outline-none focus:ring-1 focus:ring-amber-400"
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
