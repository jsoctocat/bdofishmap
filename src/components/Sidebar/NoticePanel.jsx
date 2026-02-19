/**
 * NoticePanel — "Notice" sidebar tab.
 *
 * Mirrors bdofish.com's notice section: a scrollable list of
 * timestamped game/site announcements relevant to BDO fishing.
 *
 * Props:
 *   lang — 'EN' | 'KR'
 */

const NOTICES = [
  {
    date: '2024.03.15',
    titleEN: 'New Fishing Zone: Odraxxia Coastline',
    titleKR: '신규 낚시 구역: 오드락시아 해안선',
    bodyEN:  'The Odraxxia coastline has been added as a new saltwater fishing zone. Harpoon fishing is available in deeper waters.',
    bodyKR:  '오드락시아 해안선이 새로운 바닷물 낚시 구역으로 추가되었습니다. 깊은 바다에서는 작살 낚시가 가능합니다.',
    tag: 'update',
  },
  {
    date: '2024.02.01',
    titleEN: 'Imperial Fishing Delivery Expansion',
    titleKR: '황실 낚시 납품 확장',
    bodyEN:  'Two new Imperial Fishing Delivery NPCs have been added in O\'draxxia and Grana. Daily reset is at midnight (server time).',
    bodyKR:  '오드락시아와 그라나에 황실 낚시 납품 NPC 2명이 추가되었습니다. 일일 초기화는 자정(서버 시간)입니다.',
    tag: 'update',
  },
  {
    date: '2023.11.22',
    titleEN: 'Seagull Spot Data Updated',
    titleKR: '갈매기 낚시터 데이터 업데이트',
    bodyEN:  'Smokey Chromis and Eyespot Puffer seagull spots have been revised to reflect the latest in-game coordinates.',
    bodyKR:  '스모키크로미스와 눈무늬복어의 갈매기 낚시터 좌표가 최신 인게임 데이터로 수정되었습니다.',
    tag: 'data',
  },
  {
    date: '2023.09.10',
    titleEN: 'Fish Prices Refreshed',
    titleKR: '물고기 가격 갱신',
    bodyEN:  'Silver prices updated for all Saltwater and Harpoon fish to match the current BDO marketplace averages.',
    bodyKR:  '모든 바닷물 및 작살 물고기의 실버 가격이 현재 BDO 거래소 평균에 맞게 업데이트되었습니다.',
    tag: 'data',
  },
  {
    date: '2023.06.05',
    titleEN: 'Map Updated for Crimson Desert Areas',
    titleKR: '붉은 사막 지역 지도 업데이트',
    bodyEN:  'Zone boundaries in the Drieghan and Kamasylvia regions have been redrawn for accuracy.',
    bodyKR:  '드리간 및 카마실비아 지역의 구역 경계가 정확도를 위해 재수정되었습니다.',
    tag: 'map',
  },
];

const TAG_STYLE = {
  update: { bg: '#78350f', text: '#fcd34d', label: 'UPDATE' },
  data:   { bg: '#1e3a5f', text: '#93c5fd', label: 'DATA'   },
  map:    { bg: '#14532d', text: '#86efac', label: 'MAP'     },
};

export default function NoticePanel({ lang }) {
  return (
    <div className="sidebar-scroll overflow-y-auto h-full">
      <div className="p-2 space-y-2">
        {NOTICES.map((n, i) => {
          const tag = TAG_STYLE[n.tag] ?? TAG_STYLE.update;
          return (
            <article
              key={i}
              className="rounded-lg border border-gray-700/60 bg-gray-900/80 p-2.5
                         hover:border-amber-500/40 transition-colors"
            >
              {/* Header row */}
              <div className="flex items-center gap-1.5 mb-1.5">
                <span
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                  style={{ background: tag.bg, color: tag.text }}
                >
                  {tag.label}
                </span>
                <span className="text-[10px] text-gray-500 ml-auto">{n.date}</span>
              </div>

              {/* Title */}
              <p className="text-amber-300 font-semibold leading-tight mb-1"
                 style={{ fontSize: 11 }}>
                {lang === 'KR' ? n.titleKR : n.titleEN}
              </p>

              {/* Body */}
              <p className="text-gray-400 leading-relaxed" style={{ fontSize: 10 }}>
                {lang === 'KR' ? n.bodyKR : n.bodyEN}
              </p>
            </article>
          );
        })}

        {/* Footer note */}
        <p className="text-center text-gray-600 py-2" style={{ fontSize: 10 }}>
          {lang === 'KR'
            ? '최신 정보는 공식 BDO 패치노트를 확인하세요.'
            : 'For the latest info, check the official BDO patch notes.'}
        </p>
      </div>
    </div>
  );
}
