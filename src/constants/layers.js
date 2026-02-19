// ─────────────────────────────────────────────────────────────────────────────
// Layer group config — drives both the sidebar checkboxes and the map renderer.
// Each layer has a unique `key` used as the single source of truth.
// ─────────────────────────────────────────────────────────────────────────────

export const LAYER_GROUPS = [
  {
    groupLabel: { EN: 'World Nodes', KR: '월드 노드' },
    layers: [
      { key: 'city',   label: { EN: 'Cities & Towns', KR: '도시 & 마을' }, color: '#e8a820', defaultOn: true  },
      { key: 'node1',  label: { EN: 'Node (Tier 1)',  KR: '노드 (1형)'  }, color: '#7a9ee8', defaultOn: false },
      { key: 'node2',  label: { EN: 'Node (Tier 2)',  KR: '노드 (2형)'  }, color: '#5abe6a', defaultOn: false },
      { key: 'node3',  label: { EN: 'Node (Tier 3)',  KR: '노드 (3형)'  }, color: '#d47b3f', defaultOn: false },
      { key: 'node4',  label: { EN: 'Node (Tier 4)',  KR: '노드 (4형)'  }, color: '#b84fc3', defaultOn: false },
      { key: 'island', label: { EN: 'Islands',        KR: '섬'          }, color: '#60a0a0', defaultOn: true  },
    ],
  },
  {
    groupLabel: { EN: 'Fishing Zones', KR: '낚시 구역' },
    layers: [
      { key: 'freshwater', label: { EN: 'Freshwater', KR: '민물'           }, color: '#4aade0', defaultOn: true },
      { key: 'saltwater',  label: { EN: 'Saltwater',  KR: '바닷물'         }, color: '#2050c0', defaultOn: true },
      { key: 'seagull',    label: { EN: 'Seagull Spots', KR: '갈매기 낚시터' }, color: '#e0e0e0', defaultOn: true },
    ],
  },
  {
    groupLabel: { EN: 'Sea Monsters', KR: '바다 몬스터' },
    layers: [
      { key: 'seaMonster',  label: { EN: 'Sea Monsters',       KR: '바다 몬스터'      }, color: '#e84040', defaultOn: true  },
      { key: 'coxGhost',    label: { EN: 'Cox Pirates Ghost',  KR: '콕스 해적단 유령' }, color: '#9060d0', defaultOn: false },
      { key: 'cargoShip',   label: { EN: 'Cargo Ships',        KR: '화물선'           }, color: '#808080', defaultOn: false },
      { key: 'drunkSniper', label: { EN: 'Drunk Snipers',      KR: '취한 저격수'      }, color: '#a05020', defaultOn: false },
      { key: 'pirateFlag',  label: { EN: 'Pirate Flags',       KR: '해적 깃발'        }, color: '#c04040', defaultOn: false },
    ],
  },
  {
    groupLabel: { EN: 'NPCs', KR: 'NPC' },
    layers: [
      { key: 'harbor',        label: { EN: 'Harbors',                  KR: '항구'          }, color: '#a0c8e8', defaultOn: true  },
      { key: 'imperial',      label: { EN: 'Imperial Fishing Delivery', KR: '황실 낚시 납품' }, color: '#e8c000', defaultOn: false },
      { key: 'bartererOcean', label: { EN: 'Ocean Barterers',           KR: '바다 물물교환'  }, color: '#c0a030', defaultOn: true  },
      { key: 'barterer',      label: { EN: 'Land Barterers',            KR: '육지 물물교환'  }, color: '#a0e0a0', defaultOn: false },
      { key: 'tradeManager',  label: { EN: 'Trade Managers',            KR: '거래 관리인'    }, color: '#f0a000', defaultOn: false },
    ],
  },
];

/** Build initial visibility state from `defaultOn` fields. */
export function buildDefaultLayers() {
  return LAYER_GROUPS
    .flatMap(g => g.layers)
    .reduce((acc, l) => ({ ...acc, [l.key]: l.defaultOn }), {});
}
