// ─────────────────────────────────────────────────────────────
// Hardcoded coordinate data from the original bdofish.github.io
//
// Format for most named markers: [lat, lng, "Name EN", "Name KR"]
// Format for simple markers:     [lat, lng]
// Format for sea monsters:       [lat, lng, "Name EN", "Name KR", "IconKey", layerRef]
// ─────────────────────────────────────────────────────────────

// ── World nodes ───────────────────────────────────────────────

export const CITIES = [
  [
    -37.1,
    13.2,
    "Velia",
    "벨리아 마을"
  ],
  [
    -44.2,
    15.7,
    "Heidel",
    "하이델"
  ],
  [
    -45.8,
    -8,
    "Calpheon",
    "칼페온"
  ],
  [
    -64.2,
    -30.1,
    "Grana",
    "그라나"
  ],
  [
    -62.3,
    8.3,
    "Duvencrune",
    "드벤크룬"
  ],
  [
    -45.9,
    42,
    "Altinova",
    " 알티노바"
  ],
  [
    -28.3,
    97,
    "Valencia City",
    "수도 발렌시아"
  ],
  [
    -68.65,
    -0.72,
    "O'draxxia",
    "오드락시아"
  ]
];

export const TOWNS = [
  [
    -34.1,
    0.1,
    "Olvia",
    "올비아 마을"
  ],
  [
    -39.9,
    -16.9,
    "Port Epheria",
    "에페리아 항구"
  ],
  [
    -38.5,
    -1.8,
    "Florin",
    "플로린 마을"
  ],
  [
    -39.2,
    7,
    "Western Guard Camp",
    "서부 경비 캠프"
  ],
  [
    -42.3,
    -5.5,
    "Northern Wheat<br>Plantation",
    "북부 밀농장"
  ],
  [
    -48.9,
    10.6,
    "Glish",
    "글리시 마을"
  ],
  [
    -50.6,
    -0.6,
    "Keplan",
    "케플란"
  ],
  [
    -54.8,
    -11.3,
    "Behr",
    "베어 마을"
  ],
  [
    -54.6,
    -19.2,
    "Trent",
    "트렌트 마을"
  ],
  [
    -63.5,
    -17.9,
    "Old Wisdom Tree",
    "지혜의 고목"
  ],
  [
    -59.2,
    -32.5,
    "Tooth Fairy Cabin",
    "이빨요정 다락집"
  ],
  [
    -46.6,
    30.9,
    "Tarif",
    "타리프 마을"
  ],
  [
    -37.4,
    30.6,
    "Kusha",
    "쿠샤 마을"
  ],
  [
    -50.1,
    44,
    "Abun",
    "아분 마을"
  ],
  [
    -39.2,
    61,
    "Sand Grain Bazaar",
    "모래알 바자르"
  ],
  [
    -22.9,
    59.7,
    "Shakatu",
    "샤카투"
  ],
  [
    -18,
    92.4,
    "Ancado Inner Harbor",
    "안카도 내항"
  ],
  [
    -30.3,
    116.6,
    "Arehaza Town",
    "아레하자 마을"
  ],
  [
    -49.9,
    102,
    "Muiquun",
    "무이쿤"
  ],
  [
    -21.6,
    25.3,
    "Iliya Island",
    "일리야섬"
  ],
  [
    -13.7,
    7.4,
    "Lema Island",
    "레마섬"
  ],
  [
    61.7,
    -91.8,
    "Port Ratt",
    "랏 항구 마을"
  ]
];

// Node types correspond to their in-game node tier (1 = smallest, 4 = largest)
export const NODES_T1 = [
  [
    -36.2,
    10,
    "Coastal Cave",
    "해안 동굴"
  ],
  [
    -35.9,
    7.4,
    "Coastal Cliff",
    " 해안 절벽"
  ],
  [
    -38.2,
    9.2,
    "Imp Cave",
    "임프 동굴"
  ],
  [
    -37.5,
    7.2,
    "Altar of Agris",
    "아그리스 제단"
  ],
  [
    -34.5,
    14.9,
    "Cron Castle Site",
    "크론 성터"
  ],
  [
    -36.1,
    17.1,
    "Ehwaz Hill",
    "애화저 언덕"
  ],
  [
    -38,
    15.5,
    "Forest of Plunder",
    "약탈의 숲"
  ],
  [
    -41.6,
    14.8,
    "Northern Heidel Quarry",
    "하이델 북부 채석장"
  ],
  [
    -41.5,
    8.6,
    "Ancient Stone Chamber",
    "고대인의 석실"
  ],
  [
    -44.7,
    7.6,
    "Northern Plain of Serendia",
    "세렌디아 북부 평원"
  ],
  [
    -44.2,
    10.6,
    "Lynch Farm Ruins",
    "린치 농장 폐허"
  ],
  [
    -47.6,
    5,
    "Orc Camp",
    "오크 캠프"
  ],
  [
    -48.2,
    6.6,
    "Watchtower",
    "감시탑"
  ],
  [
    -48.3,
    9.4,
    "Glish Swamp",
    "글리시 늪지"
  ],
  [
    -48.3,
    14.8,
    "Glish Ruins",
    "글리시 폐허"
  ],
  [
    -49.6,
    13,
    "Southern Cienaga",
    "남쪽 늪지대"
  ],
  [
    -35.6,
    4.6,
    "Balenos River Mouth",
    "발레노스강 어귀"
  ],
  [
    -36.2,
    3,
    "Wolf Hills",
    "늑대 언덕"
  ],
  [
    -33.1,
    4,
    "Olvia Coast",
    "올비아 해안"
  ],
  [
    -34.4,
    2,
    "Casta Farm",
    "카스타 농장"
  ],
  [
    -32.9,
    0.3,
    "Wale Farm",
    "웨일 농장"
  ],
  [
    -32,
    -3,
    "Terrmian Cliff",
    "테르미안 절벽"
  ],
  [
    -33.4,
    -4.3,
    "Florin Gateway",
    "플로린 관문"
  ],
  [
    -36.4,
    -5,
    "Mask Owl's Forest",
    "가면 올빼미의 숲"
  ],
  [
    -35.1,
    -10,
    "Elder's Bridge",
    "노인의 다리"
  ],
  [
    -33.8,
    -10.4,
    "Foot of Terrmian<br>Mountain",
    "테르미안 산기슭"
  ],
  [
    -37.2,
    -15.2,
    "Epheria Ridge",
    "에페리아 고개"
  ],
  [
    -41.9,
    -16.2,
    "Epheria Valley",
    "에페리아 계곡"
  ],
  [
    -40.7,
    -12.7,
    "Quint Hill",
    "귄트 언덕"
  ],
  [
    -43.8,
    -10.7,
    "Abandoned Land",
    "버림받은 땅"
  ],
  [
    -46.2,
    -14.8,
    "Calpheon Castle Site",
    "칼페온 성터"
  ],
  [
    -46.7,
    -1.8,
    "Marni Farm Ruins",
    "마르니 농장 폐허"
  ],
  [
    -49.6,
    -0.6,
    "Keplan Quarry",
    "케플란 채굴장"
  ],
  [
    -50,
    2.1,
    "Keplan Vicinity",
    "케플란 길목"
  ],
  [
    -51.1,
    0,
    "Keplan Hill",
    "케플란 언덕"
  ],
  [
    -51.2,
    -3.4,
    "Tarte Rock Fork",
    "타트 바위 삼거리"
  ],
  [
    -53.3,
    0.9,
    "Gehaku Plain",
    "게아쿠 평원"
  ],
  [
    -55.1,
    -2,
    "Hexe Stone Wall",
    "헥세 돌담"
  ],
  [
    -55.4,
    -3.6,
    "Marie Cave",
    "마리 동굴"
  ],
  [
    -51.6,
    -10.6,
    "Phoniel's Cabin Entrance",
    "포니엘 산장 입구"
  ],
  [
    -52.4,
    -12.7,
    "Behr Riverhead",
    "베어강 수원지"
  ],
  [
    -53.1,
    -10.3,
    "Behr Downstream",
    "베어강 하류"
  ],
  [
    -53.5,
    -8.6,
    "Rhua Tree Stub",
    "루아 나무 둥치"
  ],
  [
    -53.5,
    -20,
    "Lumberjack's Rest Area",
    "벌목장 쉼터"
  ],
  [
    -60.4,
    -11.2,
    "Atanis Pond",
    "아타니스 못"
  ],
  [
    -61,
    -13.2,
    "Caduil Forest",
    "카두일 숲"
  ],
  [
    -57.9,
    -16.1,
    "Valtarra Mountains",
    "발타라 산맥"
  ],
  [
    -64.5,
    -19.8,
    "Shady Tree Forest",
    "그늘나무 숲"
  ],
  [
    -65.5,
    -28.5,
    "Southern Kamasylvia",
    "카마실비아 남부"
  ],
  [
    -64.7,
    -27.3,
    "Okiara River",
    "오기에르 강"
  ],
  [
    -63.3,
    -35.3,
    "Looney Cabin",
    "러니 산장"
  ],
  [
    -62.6,
    -33.9,
    "Polly's Forest",
    "폴리숲"
  ],
  [
    -62.2,
    -36.2,
    "Krogdalo's Trace",
    "크로그달로의 자취"
  ],
  [
    -60.9,
    -36,
    "Weenie Cabin",
    "위니 사장"
  ],
  [
    -60,
    -24.2,
    "Holo Forest",
    "홀로 숲"
  ],
  [
    -60.5,
    -29.1,
    "White Wood Forest",
    "흰가지나무 숲"
  ],
  [
    -56,
    -26.6,
    "Yianaros's Field",
    "이아나로스의 들"
  ],
  [
    -55.3,
    -25.3,
    "Western Valtarra Mountains",
    "발타라 서부 산맥"
  ],
  [
    -40.7,
    -21.5,
    "Brellin Farm",
    "브렐린 농장"
  ],
  [
    -40.4,
    -24.8,
    "Outpost Supply Port",
    "전진 기지 보급항"
  ],
  [
    -62.7,
    -5.4,
    "Khalk Canyon",
    "칼크 협곡"
  ],
  [
    -63.5,
    1.5,
    "Gayak Altar",
    "가야크 제단"
  ],
  [
    -60.4,
    -0.7,
    "Sherekhan Necropolis",
    "셰레칸의 묘"
  ],
  [
    -58.4,
    -0.3,
    "Fountain of Origin",
    "기원의 샘"
  ],
  [
    -62.5,
    6,
    "Duvencrune Farmland",
    "드벤크룬 경작지"
  ],
  [
    -61.3,
    3,
    "Harak's Shelter",
    "하락의 쉼터"
  ],
  [
    -60.5,
    5.2,
    "Morning Fog Post",
    "새벽 안개 초소"
  ],
  [
    -58.8,
    5.2,
    "Windy Peak",
    "바람깃 봉우리"
  ],
  [
    -61.7,
    12.2,
    "Marak Farm",
    "마라크 농장"
  ],
  [
    -56.7,
    13.2,
    "Gervish Mountains",
    "게르비슈 산맥"
  ],
  [
    -56.5,
    20.7,
    "Tshira Ruins",
    "트쉬라 폐허"
  ],
  [
    -51,
    27.6,
    "Hasrah Cliff",
    "하스라 절벽"
  ],
  [
    -44.1,
    24.3,
    "Kamasylve Temple",
    "카마실브 사원"
  ],
  [
    -41.4,
    23.7,
    "Rumbling Land",
    "울림의 땅"
  ],
  [
    -41.4,
    25.7,
    "Ancient Ruins<br>Excavation Site",
    "고대 유적 발굴지"
  ],
  [
    -40.4,
    22.8,
    "Ancient Fissure",
    "고대의 틈"
  ],
  [
    -33.8,
    22.5,
    "The Mausoleum",
    "대족장의 영묘"
  ],
  [
    -33.8,
    25.2,
    "Mediah Northern<br>Highlands",
    "메디아 북부 고원"
  ],
  [
    -32.8,
    32.7,
    "Sausan Garrison<br>Wharf",
    "소산 주둔지 선착장"
  ],
  [
    -37,
    29.3,
    "Stonetail Wasteland",
    "돌꼬리 황무지"
  ],
  [
    -39.6,
    32.5,
    "Mediah Shore",
    "메디아 해안"
  ],
  [
    -43.3,
    29,
    "Ahto Farm",
    "아토 농장"
  ],
  [
    -42.2,
    37.1,
    "Stonebeak Shore",
    "돌부리 해안"
  ],
  [
    -43.5,
    36.3,
    "Awakening Bell",
    "경각의 종"
  ],
  [
    -44.5,
    32.7,
    "Asula Highland",
    "아술라 고원"
  ],
  [
    -46.6,
    34.3,
    "Highland Junction",
    "고원 삼거리"
  ],
  [
    -46.2,
    38.7,
    "Altinova Entrance",
    "알티노바 입구"
  ],
  [
    -48.5,
    35.4,
    "Abandoned Iron Mine<br>Entrance",
    "폐철광산 입구"
  ],
  [
    -51.2,
    37,
    "Alumn Rock Valley",
    "알룸바위 계곡"
  ],
  [
    -42.6,
    43.7,
    "Altinova Gateway",
    "알티노바 관문"
  ],
  [
    -43.6,
    47.3,
    "Pujiya Canyon",
    "푸지야 협곡"
  ],
  [
    -39.65,
    44.5,
    "Gorgo Rock Belt",
    "고르고 암석지대"
  ],
  [
    -39.1,
    46.9,
    "Veteran's Canyon",
    "노병의 협곡"
  ],
  [
    -37.2,
    50.2,
    "Pila Fe",
    "필라 페"
  ],
  [
    -35.8,
    45.3,
    "Kunid's Vacation Spot",
    "쿠니드의 쉼터"
  ],
  [
    -35.3,
    42.2,
    "Kisleev Crag",
    "키슬리브 암석지대"
  ],
  [
    -33.5,
    44,
    "Leical Falls",
    "라이칼 폭포"
  ],
  [
    -39.6,
    57.5,
    "Capotia",
    "카포티아"
  ],
  [
    -40.4,
    59.7,
    "Bazaar Farmland",
    "바자르 경작지"
  ],
  [
    -42.7,
    61.9,
    "Valencia Western<br>Highlands",
    "발렌시아 서부 고원"
  ],
  [
    -51.7,
    76,
    "Crescent Mountains",
    "초승달 산맥"
  ],
  [
    -50.8,
    108,
    "Cantusa Desert",
    "칸투사 사막"
  ],
  [
    -41.8,
    108.35,
    "Dona Rocky Mountain",
    "도나 바위산"
  ],
  [
    -38.8,
    114.5,
    "Central Cantusa",
    "칸투사 중부"
  ],
  [
    -28.7,
    113.7,
    "Areha Palm Forest",
    "아레하 야자숲"
  ],
  [
    -22.3,
    116.2,
    "Northern Sand Dune",
    "북부 모래 언덕"
  ],
  [
    -9.9,
    108.2,
    "Gavinya Volcano Zone",
    "가비냐 화산지대"
  ],
  [
    -4.1,
    108,
    "Gavinya Coastal Cliff",
    "가비냐 해안 절벽"
  ],
  [
    -9.7,
    103.5,
    "Roud Sulfur Mine",
    "루드 유황 광산"
  ],
  [
    -6.2,
    102.2,
    "Gavinya Great Crater",
    "가비냐 대분화구"
  ],
  [
    -5.5,
    95.2,
    "Ivory Wasteland",
    "상아 황무지"
  ],
  [
    -7.8,
    88.6,
    "Ivero Cliff",
    "이베로 절벽"
  ],
  [
    -18.6,
    94.3,
    "Altas Farmland",
    "알타스 경작지"
  ],
  [
    -24.7,
    90.3,
    "Rakshan Observatory",
    "라크샨 천문대"
  ],
  [
    -26.8,
    94.1,
    "Erdal Farm",
    "에르달 농장"
  ],
  [
    -28.8,
    93.7,
    "Valencia Plantation",
    "발렌시아 대농장"
  ],
  [
    -30.4,
    93.4,
    "Fohalam Farm",
    "포할람 농장"
  ],
  [
    -26.7,
    102.8,
    "Valencia Castle Site",
    "발렌시아 성터"
  ],
  [
    -17,
    85.6,
    "Ancado Coast",
    "안카도 해안"
  ],
  [
    -12.9,
    74.8,
    "Iris Canyon",
    "아이리스 협곡"
  ],
  [
    -16.8,
    75.2,
    "Kmach Canyon",
    "크마흐 협곡"
  ],
  [
    -15.6,
    71.9,
    "Bambu Valley",
    "밤부 골짜기"
  ],
  [
    -20.8,
    62,
    "Yalt Canyon",
    "얄트 협곡"
  ],
  [
    -22.3,
    58.9,
    "Shakatu Farmland",
    "샤카투 경작지"
  ],
  [
    -21.2,
    56.4,
    "Hope Pier",
    "희망나루"
  ],
  [
    -24.2,
    53.8,
    "Shakatu Abandoned Pier",
    "샤카투 폐 나루터"
  ],
  [
    -35.3,
    68.1,
    "Pilgrim's Haven",
    "순교자의 안식처"
  ],
  [
    -32.6,
    73.4,
    "Pilgrim's Sanctum:<br>Abstinence",
    "순례자의 성소 - 절제"
  ],
  [
    -22.8,
    79.3,
    "Pilgrim's Sanctum:<br>Obedience",
    "순례자의 성소 - 순종"
  ],
  [
    -31.4,
    90.2,
    "Pilgrim's Sanctum:<br>Fast",
    "순례자의 성소 - 금식"
  ],
  [
    -38.1,
    85.6,
    "Pilgrim's Sanctum:<br>Sharing",
    "순례자의 성소 - 분배"
  ],
  [
    -43.2,
    79.8,
    "Pilgrim's Sanctum:<br>Sincerity",
    "순례자의 성소 - 성실"
  ],
  [
    -42,
    92.1,
    "Pilgrim's Sanctum:<br>Purity",
    "순례자의 성소 - 순결"
  ],
  [
    -45.6,
    85.6,
    "Pilgrim's Sanctum:<br>Humility",
    "순례자의 성소 - 겸손"
  ],
  [
    -38,
    -31.1,
    "Teyamal Island",
    "테야말 섬"
  ],
  [
    -31.9,
    -30.1,
    "Rameda Island",
    "라메다 섬"
  ],
  [
    -32.4,
    -25,
    "Ginburrey Island",
    "진버레이 섬"
  ],
  [
    -35.8,
    -26.5,
    "Modric Island",
    "모드릭 섬"
  ],
  [
    -36.7,
    -24,
    "Baeza Island",
    "바에자 섬"
  ],
  [
    -36.6,
    -19.6,
    "Serca Island",
    "세르카 섬"
  ],
  [
    -29.3,
    -22.2,
    "Netnume Island",
    "네트넘 섬"
  ],
  [
    -28.3,
    -20.3,
    "Oben Island",
    "오벤 섬"
  ],
  [
    -30.3,
    -19.3,
    "Dunde Island",
    "던데 섬"
  ],
  [
    -29.6,
    -17.5,
    "Eberdeen Island",
    "에버딘 섬"
  ],
  [
    -32.6,
    -14.6,
    "Barater Island",
    "바라테르 섬"
  ],
  [
    -21.3,
    -23.1,
    "Teste Island",
    "테스테 섬"
  ],
  [
    -18.5,
    -20.4,
    "Almai Island",
    "알마이 섬"
  ],
  [
    -14.2,
    -16.55,
    "Kuit Islands",
    "쿠이트 제도"
  ],
  [
    -21.7,
    -16.6,
    "Padix Island",
    "파딕스 섬"
  ],
  [
    -18,
    -7.6,
    "Arita Island",
    "아리타 섬"
  ],
  [
    -28.2,
    -8.3,
    "Staren Island",
    "스타렌 섬"
  ],
  [
    -23.8,
    -7.2,
    "Lisz Island",
    "리스즈 섬"
  ],
  [
    -21.6,
    -3,
    "Narvo Island",
    "나르보 섬"
  ],
  [
    -25.25,
    -2.9,
    "Marka Island",
    "마르카 섬"
  ],
  [
    -10.9,
    2.1,
    "Tashu Island",
    "타슈 섬"
  ],
  [
    -21.1,
    1.9,
    "Invernen Island",
    "인버넨 섬"
  ],
  [
    -26,
    1.3,
    "Angie Island",
    "앙쥬 섬"
  ],
  [
    -23.8,
    4.4,
    "Balvege Island",
    "발베쥬 섬"
  ],
  [
    -23.9,
    6.9,
    "Marlene Island",
    "마를레느 섬"
  ],
  [
    -27.3,
    5.2,
    "Eveto Island",
    "에베토 섬"
  ],
  [
    -19.3,
    4.95,
    "Tulu Island",
    "툴루 섬"
  ],
  [
    -18.9,
    7.6,
    "Orffs Island",
    "오르프스 섬"
  ],
  [
    -26.9,
    10,
    "Mariveno Island",
    "마리베노 섬"
  ],
  [
    -30.8,
    12.7,
    "Ephde Rune Island",
    "에프데 룬 섬"
  ],
  [
    -15.7,
    15.2,
    "Al-Naha Island",
    "알나하 섬"
  ],
  [
    -19.3,
    18.25,
    "Ajir Island",
    "아지르 섬"
  ],
  [
    -24.45,
    15.2,
    "Weita Island",
    "웨이타 섬"
  ],
  [
    -28.2,
    15.7,
    "Paratama Island",
    "파라타마 섬"
  ],
  [
    -25.75,
    18.8,
    "Kanvera Island",
    "칸베라 섬"
  ],
  [
    -27.15,
    20.17,
    "Arakil Island",
    "아라킬 섬"
  ],
  [
    -29.3,
    22.9,
    "Taramura Island",
    "타라무라 섬"
  ],
  [
    -27.9,
    23.8,
    "Ostra Island",
    "오스트라 섬"
  ],
  [
    -28.7,
    29,
    "Delinghart Island",
    "델링하트 섬"
  ],
  [
    -21.5,
    33.5,
    "Pujara Island",
    "푸자라 섬"
  ],
  [
    -2.8,
    30.2,
    "Tinberra Island",
    "틴베라 섬"
  ],
  [
    -3.5,
    34.2,
    "Lerao Island",
    "레라오 섬"
  ],
  [
    -8.1,
    36.1,
    "Portanen Island",
    "포르타넨 섬"
  ],
  [
    -12.25,
    34.1,
    "Shasha Island",
    "샤샤 섬"
  ],
  [
    -12.1,
    37.6,
    "Rosevan Island",
    "로즈반 섬"
  ],
  [
    -15.5,
    46.6,
    "Boa Island",
    "보아 섬"
  ],
  [
    -33,
    39.4,
    "Sokota Island",
    "소코타 섬"
  ],
  [
    -30.1,
    44.6,
    "Riyed Island",
    "리에드 섬"
  ],
  [
    -25.8,
    46.8,
    "Esfah Island",
    "에스파 섬"
  ],
  [
    -24.55,
    45.6,
    "Tigris Island",
    "티그리스 섬"
  ],
  [
    -24.2,
    48.75,
    "Shirna Island",
    "시르나 섬"
  ],
  [
    -18.6,
    58.2,
    "Halmad Island",
    "할마드 섬"
  ],
  [
    -15.7,
    60.65,
    "Kashuma Island",
    "카슈마 섬"
  ],
  [
    -12.1,
    81.5,
    "Derko Island",
    "더코 섬"
  ],
  [
    -1.3,
    115.1,
    "Hakoven Island",
    "하코번 섬"
  ],
  [
    5.1,
    4.2,
    "Oquilla's Eye",
    "오킬루아의 눈"
  ],
  [
    11.6,
    33.6,
    "Crow's Nest",
    "까마귀의 둥지"
  ],
  [
    54.1,
    -96.5,
    "Mariul Island",
    "마리울 섬"
  ],
  [
    49.8,
    -101.2,
    "Nada Island",
    "나다 섬"
  ],
  [
    49.5,
    -93.3,
    "Zagam Island",
    "자감 섬"
  ],
  [
    -3.8,
    13.94,
    "Feltron Island",
    "펠트런 섬"
  ],
  [
    2.9,
    13.51,
    "Slippery Scallywags Isle",
    "팔딱생선 해적단 섬"
  ],
  [
    -68.64,
    -14.35,
    "Starry Midnight Port",
    "깊은 밤의 항구"
  ],
  [
    -67.71,
    -17.4,
    "Talibahr's Rope",
    "탈리바르의 끈"
  ],
  [
    -69.45,
    -12.88,
    "Thornwood Castle",
    "가시나무 성"
  ],
  [
    -68.73,
    -12.77,
    "La O'delle",
    "라 오델"
  ],
  [
    -68.51,
    -9.43,
    "Narcion",
    "낙시온"
  ],
  [
    -66.15,
    -14.06,
    "Tunkuta",
    "툰크타"
  ],
  [
    -64.86,
    -14.1,
    "Salun's Border",
    "살룬의 경계"
  ],
  [
    -65.35,
    -11.23,
    "Thornwood Forest",
    "가시나무 숲"
  ],
  [
    -63.63,
    -6.35,
    "Mountain of Division",
    "구분 짓는 산"
  ],
  [
    -64.81,
    -5.11,
    "Bahit Sanctum",
    "바히트 성소"
  ],
  [
    -66.12,
    -7.03,
    "Crypt of Resting Thoughts",
    "생각이 잠든 묘"
  ],
  [
    -67.75,
    -5.33,
    "Salanar Pond",
    "살라나르 못"
  ],
  [
    -68.99,
    -3.55,
    "Shiv Valley Road",
    "칼날협로"
  ],
  [
    -67.61,
    -2.81,
    "Delmira Plantation",
    "델리모르 농원"
  ],
  [
    -66.79,
    -0.37,
    "Forgotten Mountain",
    "지워진 산"
  ],
  [
    -66.18,
    -0.68,
    "Olun's Valley",
    "올룬의 계곡"
  ]
];
export const NODES_T2 = [
  [
    -37.1,
    11,
    "Loggia Farm",
    "로기아 농장"
  ],
  [
    -36.8,
    15.2,
    "Finto Farm",
    "핀토 농장"
  ],
  [
    -38.4,
    13.1,
    "Bartali Farm",
    "바탈리 농장"
  ],
  [
    -38.9,
    12.2,
    "Marino Farm",
    "마리노 농장"
  ],
  [
    -39,
    14.5,
    "Balenos Forest",
    "발레노스 숲"
  ],
  [
    -40.3,
    9.5,
    "Toscani Farm",
    "토스카니 농장"
  ],
  [
    -42.9,
    12.9,
    "Alejandro Farm",
    "알레한드로 농장"
  ],
  [
    -42.3,
    8.8,
    "Lynch Ranch",
    "린치 목장"
  ],
  [
    -45.5,
    13.2,
    "Costa Farm",
    "코스타 농장"
  ],
  [
    -46.1,
    15.9,
    "Northern Cienaga",
    "북쪽 늪지대"
  ],
  [
    -46.2,
    18.3,
    "Moretti Plantation",
    "모레티 거대 농장"
  ],
  [
    -41.3,
    -6.8,
    "Bernianto Farm",
    "베르니안토 농장"
  ],
  [
    -43.48,
    -8.01,
    "Contaminated Farm",
    "오염된 농장지"
  ],
  [
    -44,
    -5.3,
    "Dias Farm",
    "디아스 농장"
  ],
  [
    -45.8,
    -4.3,
    "Falres Dirt Farm",
    "팔르스 소농장"
  ],
  [
    -46.1,
    -11.8,
    "Gabino Farm",
    "가비노 농장"
  ],
  [
    -44.5,
    -13.8,
    "Cohen Farm",
    "코헨 농장"
  ],
  [
    -48.5,
    2,
    "Quarry Byway",
    "채굴장 사잇길"
  ],
  [
    -52,
    2.4,
    "Gianin Farm",
    "지아닌 농장"
  ],
  [
    -54.3,
    9.2,
    "Dormann Lumber Camp",
    "도르만 벌목장"
  ],
  [
    -53.4,
    21.1,
    "Khimut Lumber Camp",
    "히무트 벌목장"
  ],
  [
    -52.3,
    -0.9,
    "Abandoned Quarry",
    "폐채굴장"
  ],
  [
    -53.1,
    -3.6,
    "Dane Canyon",
    "데인 협곡"
  ],
  [
    -48.4,
    -6.9,
    "Oberen Farm",
    "오베렌 농장"
  ],
  [
    -49.4,
    -5.7,
    "Beacon Entrance Post",
    "봉화대 입구 초소"
  ],
  [
    -49.8,
    -8.3,
    "Bain Farmland",
    "바인 농장지"
  ],
  [
    -49.5,
    -15,
    "Rhutum Sentry Post",
    "루툼 감시초소"
  ],
  [
    -50.5,
    -13,
    "Phoniel Cabin",
    "포니엘 산장"
  ],
  [
    -49.1,
    -18.5,
    "Mansha Forest",
    "만샤 숲"
  ],
  [
    -50.3,
    -19.3,
    "Tobare's Cabin",
    "토바레 오두막"
  ],
  [
    -55.7,
    -16.4,
    "Longleaf Tree<br>Sentry Post",
    "긴잎나무 정찰 초소"
  ],
  [
    -55.9,
    -15,
    "Crioville",
    "크리오 마을"
  ],
  [
    -58.1,
    -13.8,
    "Viv Foretta Hamlet",
    "빕 포레타 산장"
  ],
  [
    -62.5,
    -26.7,
    "Lake Flondor",
    "플롱도르 호수"
  ],
  [
    -40.5,
    28.3,
    "Shuri Farm",
    "슈리 농장"
  ],
  [
    -41.9,
    30.3,
    "Stonetail Horse Ranch",
    "돌꼬리 언덕 목장"
  ],
  [
    -42.8,
    32.5,
    "Omar Lava Cave",
    "오마르 용암 동굴"
  ],
  [
    -46.6,
    32.2,
    "Kasula Farm",
    "카술라 농장"
  ],
  [
    -51.7,
    37.5,
    "Spalshing Point",
    "물텀벙 마을"
  ],
  [
    -30.4,
    51.4,
    "Deserted City of Runn",
    "폐허도시 룬"
  ],
  [
    -28.9,
    72.6,
    "Ibellab Oasis",
    "이벨랍 오아시스"
  ],
  [
    -48.4,
    79.2,
    "Aakman",
    "아크만"
  ],
  [
    -34.7,
    -27.8,
    "Theonil Island",
    "시오닐 섬"
  ],
  [
    -35,
    -19.4,
    "Randis Island",
    "란디스 섬"
  ],
  [
    -27.7,
    -24.3,
    "Daton Island",
    "데이튼 섬"
  ],
  [
    -30.8,
    -14.8,
    "Albresser Island",
    "알브레서 섬"
  ],
  [
    -26.2,
    -5.4,
    "Louruve Island",
    "루루브 섬"
  ],
  [
    -28.1,
    4.2,
    "Duch Island",
    "두흐 섬"
  ],
  [
    -30,
    8.5,
    "Luivano Island",
    "루이바노 섬"
  ],
  [
    -22,
    12.7,
    "Baremi Island",
    "바레미 섬"
  ],
  [
    -31.3,
    19.2,
    "Beiruwa Island",
    "베이루와 섬"
  ],
  [
    -12.8,
    17.9,
    "Racid Island",
    "라시드 섬"
  ],
  [
    -29.5,
    33.1,
    "Pilava Island",
    "필바라 섬"
  ],
  [
    -19.5,
    46.6,
    "Orisha Island",
    "오리샤 섬"
  ],
  [
    -52.5,
    -43.7,
    "Papua Crinea",
    "파푸아 크리니"
  ],
  [
    -64.64,
    -33.94,
    "Grandiha",
    "그란디하"
  ]
];
export const NODES_T3 = [
  [
    -40.1,
    15.8,
    "Heidel Pass",
    "하이델 길머리"
  ],
  [
    -38.8,
    5.3,
    "Western Gateway",
    "서부 관문"
  ],
  [
    -42.3,
    6.2,
    "Bandit's Den Byway",
    "산채 사잇길"
  ],
  [
    -42.6,
    15.3,
    "Northern Guard Camp",
    "북부 경비 캠프"
  ],
  [
    -44.4,
    20.4,
    "Eastern Border",
    "동부 경계"
  ],
  [
    -47.1,
    17.9,
    "Eastern Gateway",
    "동부 관문"
  ],
  [
    -47.2,
    13.9,
    "Central Guard Camp",
    "중부 경비 캠프"
  ],
  [
    -46.7,
    9.1,
    "Northwestern<br>Gateway",
    "서북부 관문"
  ],
  [
    -49.7,
    15.3,
    "Southern Guard Camp",
    "남부 경비 캠프"
  ],
  [
    -49.6,
    8.3,
    "Southwestern<br>Gateway",
    "서남부 관문"
  ],
  [
    -41.7,
    1.9,
    "Delphe Outpost",
    "델페 전진기지"
  ],
  [
    -44.7,
    1.2,
    "Delphe Knights Castle",
    "델페 기사단 성"
  ],
  [
    -51.8,
    4.2,
    "Serendia Western<br>Gateway",
    "세렌디아 서부 관문"
  ],
  [
    -48.3,
    -3.8,
    "Marni Cave Path",
    "마르니 동굴길"
  ],
  [
    -50.1,
    -6.6,
    "Trina Beacon Towers",
    "트리나 봉화대"
  ],
  [
    -51.1,
    -5.8,
    "Trina Fort",
    " 트리나 요새"
  ],
  [
    -38.2,
    -9.5,
    "Elder's Bridge Post",
    "노인의 다리 초소"
  ],
  [
    -41.5,
    -9.2,
    "Anti-Troll<br>Fortification",
    "트롤 방어기지"
  ],
  [
    -42,
    -11.5,
    "Isolated Sentry Post",
    "고립된 초소"
  ],
  [
    -40.3,
    -18.3,
    "Epheria Sentry Post",
    "에페리아 초소"
  ],
  [
    -45.3,
    -16.7,
    "Calpheon Castle",
    "칼페온 성"
  ],
  [
    -47.1,
    -14,
    "North Kaia Pier",
    "북 카이아 나루"
  ],
  [
    -48.1,
    -14.6,
    "South Kaia Pier",
    "남 카이아 나루"
  ],
  [
    -51.9,
    -18.3,
    "Abandoned Monastery",
    "버려진 수도원"
  ],
  [
    -59.4,
    -9.4,
    "Lemoria Guard Post",
    "레모리아 경비초소"
  ],
  [
    -61,
    -24,
    "Central Lemoria Camp",
    "레모리아 중부 캠프"
  ],
  [
    -64.5,
    -25,
    "Lemoria Beacon Towers",
    "레모리아 봉화대"
  ],
  [
    -65.2,
    -29.6,
    "Acher Southern Camp",
    "아케르 남부 캠프"
  ],
  [
    -57.2,
    -37.7,
    "Acher Western Camp",
    "아케르 서부 캠프"
  ],
  [
    -54.2,
    -30.3,
    "Acher Guard Post",
    "아케르 경비초소"
  ],
  [
    -41.9,
    -24.5,
    "Calpheon Northwestern<br>Outpost",
    "칼페온 서북부 전진 기지"
  ],
  [
    -61.9,
    -8,
    "Ahib Conflict Zone",
    "아히브 분쟁지역"
  ],
  [
    -63.7,
    -2.1,
    "Marcha Outpost",
    "마르차 전초기지"
  ],
  [
    -59.2,
    13.7,
    "Night Crow Post",
    "밤 까마귀 초소"
  ],
  [
    -56,
    22.3,
    "Forgotten Gateway",
    "잊혀진 관문"
  ],
  [
    -34.6,
    20.3,
    "Mediah Northern<br>Gateway",
    "메디아 북부 관문"
  ],
  [
    -36.6,
    32.3,
    "Sarma Outpost",
    "사르마 기지"
  ],
  [
    -38,
    37.3,
    "Mediah Castle",
    "메디아 성"
  ],
  [
    -41.4,
    46.7,
    "Rock Post",
    "바윗돌 초소"
  ],
  [
    -40,
    55.4,
    "Barhan Gateway",
    "바르한 관문"
  ],
  [
    -28.7,
    52.2,
    "Runn Gateway<br>Intersection",
    "룬 관문 삼거리"
  ],
  [
    -21.75,
    106.85,
    "Valencia Castle",
    "발렌시아 성"
  ]
];
export const NODES_T4 = [
  [
    -33.9,
    13.3,
    "Cron Castle",
    "크론성"
  ],
  [
    -38.9,
    16.7,
    "Goblin Cave",
    "고블린 동굴"
  ],
  [
    -40.5,
    8.3,
    "Forest of Seclusion",
    "은둔의 숲"
  ],
  [
    -43.8,
    4.5,
    "Biraghi Den",
    "비라기 산채"
  ],
  [
    -40,
    2.1,
    "Karanda Ridge",
    "카란다 능선"
  ],
  [
    -42.3,
    -1.4,
    "Khuruto Cave",
    "쿠루토 동굴"
  ],
  [
    -43.1,
    -1.6,
    "Old Dandelion",
    "구 단델리온"
  ],
  [
    -38.8,
    -3.3,
    "Caphras Cave",
    "카프라스 동굴"
  ],
  [
    -38.7,
    -6,
    "Bree Tree Ruins",
    "브리 나무 유적지"
  ],
  [
    -47.5,
    26,
    "Tungrad Forest",
    "툰그라드 숲"
  ],
  [
    -45.8,
    24,
    "Soldier's Grave",
    "병사의 무덤"
  ],
  [
    -47.8,
    20.4,
    "Castle Ruins",
    "폐성터"
  ],
  [
    -51.2,
    15.4,
    "Serendia Shrine",
    "세렌디아 신전"
  ],
  [
    -51.5,
    9.8,
    "Bloody Monastery",
    "핏빛 수도원"
  ],
  [
    -46.3,
    4.2,
    "Bradie Fortress",
    "브레디 요새"
  ],
  [
    -47.1,
    0.4,
    "Oze Pass",
    "오제 고개"
  ],
  [
    -48.2,
    0,
    "Oze's House",
    "오제의 집"
  ],
  [
    -49.3,
    -0.3,
    "North Abandoned<br>Quarry",
    "버려진 채굴장"
  ],
  [
    -49.6,
    -3.2,
    "Marni's Lab",
    "마르니의 실험터"
  ],
  [
    -50.2,
    -2.5,
    "Glutoni Cave",
    "글루토니 동굴"
  ],
  [
    -50,
    4.9,
    "Southern Neutral Zone",
    "남부 중립 지역"
  ],
  [
    -54.5,
    0.9,
    "Primal Giant Post",
    "거인족 주둔지"
  ],
  [
    -52.8,
    -5.3,
    "Saunil Camp",
    "사우닐 캠프"
  ],
  [
    -52.4,
    -8.4,
    "Saunil Battlefield",
    "사우닐 전장"
  ],
  [
    -48.3,
    -10.9,
    "North Kaia<br>Mountaintop",
    "북 카이아산 정상"
  ],
  [
    -48.3,
    -16,
    "Lake Kaia",
    "카이아 호수"
  ],
  [
    -47.7,
    -17.2,
    "Catfishman Camp",
    "메기맨 캠프"
  ],
  [
    -47.6,
    -19.4,
    "Calpheon Castle W.<br>Forest",
    "칼페온 성터 서쪽 숲"
  ],
  [
    -50.7,
    -16.3,
    "Rhutum Outstation",
    "루툼족 주둔지"
  ],
  [
    -51.7,
    -21.5,
    "Treant Forest",
    "엔트 숲"
  ],
  [
    -55.6,
    -7,
    "Hexe Sanctuary",
    "헥세 성역"
  ],
  [
    -56.9,
    -4.3,
    "Witch's Chapel",
    "마녀의 예배당"
  ],
  [
    -56.1,
    -13,
    "Longleaf Tree<br>Forest",
    "긴잎나무 숲"
  ],
  [
    -58,
    -8.6,
    "Kamasylvia Vicinity",
    "카마실비아 진입로"
  ],
  [
    -57.8,
    -19,
    "Valtarra - Altar of Training",
    "발타라 - 수련의 제단"
  ],
  [
    -60.3,
    -18.8,
    "Manshaum Forest",
    "만샤움 숲"
  ],
  [
    -58.6,
    -24.3,
    "Mirumok Ruins",
    "미루목 유적지"
  ],
  [
    -63.1,
    -21.7,
    "Navarn Steppe",
    "나반 초원"
  ],
  [
    -66.1,
    -27.9,
    "Gyfin Rhasia Temple",
    "가이핀라시아 사원"
  ],
  [
    -58.4,
    -36.2,
    "Tooth Fairy Forest",
    "이빨요정 산림"
  ],
  [
    -53.6,
    -32.5,
    "Loopy Tree Forest",
    "고리나무 숲"
  ],
  [
    -51,
    -29.4,
    "Ash Forest",
    "잿빛 숲"
  ],
  [
    -46,
    -29,
    "Star's End",
    "별무덤"
  ],
  [
    -61.3,
    -7.1,
    "Akum Rocky Mountain",
    "아쿰 바위산"
  ],
  [
    -58.6,
    10.5,
    "Garmoth's Nest",
    "가모스의 둥지"
  ],
  [
    -59.7,
    17.6,
    "Blood Wolf Settlement",
    "붉은늑대 부락"
  ],
  [
    -38.1,
    22.1,
    "Helms Post",
    "투구족 주둔지"
  ],
  [
    -37,
    26.2,
    "Elric Shrine",
    "엘릭 사원"
  ],
  [
    -39.3,
    26.7,
    "Canyon of Corruption",
    "부패의 협곡"
  ],
  [
    -33.8,
    30.7,
    "Sausan Garrison",
    "소산 주둔지"
  ],
  [
    -44.1,
    27.9,
    "Manes Hideout",
    "갈기족 소굴"
  ],
  [
    -48.2,
    32.1,
    "Wandering Rogue Den",
    "방랑도적 주둔지"
  ],
  [
    -49.3,
    38.4,
    "Abandoned Iron Mine",
    "폐철광산"
  ],
  [
    -49.3,
    41.6,
    "Abdn. Iron Mine<br>Rhutum Dt.",
    "폐철광산 루툼 지구"
  ],
  [
    -51.1,
    40,
    "Abdn. Iron Mine<br>Saunil Dt.",
    "폐철광산 사우닐 지구"
  ],
  [
    -51.8,
    44.2,
    "Marni's 2nd Lab",
    "마르니 제 2 실험터"
  ],
  [
    -39.6,
    42.1,
    "Basilisk Den",
    "바실리스크 소굴"
  ],
  [
    -36.8,
    48.1,
    "Cadry Ruins",
    "카드리 폐허"
  ],
  [
    -40.3,
    52.2,
    "Taphtar Plain",
    "타프타르 평야"
  ],
  [
    -33,
    55.2,
    "Scarlet Sand Chamber",
    "붉은 모래 석실"
  ],
  [
    -36.4,
    57.1,
    "Desert Naga Temple",
    "사막 나가 성전"
  ],
  [
    -46.8,
    51.6,
    "Bashim Base",
    "바심족 주둔지"
  ],
  [
    -47.1,
    59.3,
    "Waragon Nest",
    "와라곤 둥지"
  ],
  [
    -18.3,
    65.7,
    "Gahaz Bandit's Lair",
    "가하즈 도적단 소굴"
  ],
  [
    -53.2,
    72.3,
    "Crescent Shrine",
    "초승달 신전"
  ],
  [
    -51.3,
    94.7,
    "Titium Valley",
    "티티움 계곡"
  ],
  [
    -46.6,
    106.4,
    "Pila Ku Jail",
    "필라 쿠 감옥"
  ],
  [
    -11.9,
    101.5,
    "Roud Sulfur Works",
    "루드 유황 작업장"
  ]
];

// Y-Shape = node connector island, Circle = standalone island node
export const ISLANDS_Y      = [
  [
    -38,
    -31.1,
    "Teyamal Island",
    "테야말 섬"
  ],
  [
    -31.9,
    -30.1,
    "Rameda Island",
    "라메다 섬"
  ],
  [
    -32.4,
    -25,
    "Ginburrey Island",
    "진버레이 섬"
  ],
  [
    -35.8,
    -26.5,
    "Modric Island",
    "모드릭 섬"
  ],
  [
    -36.7,
    -24,
    "Baeza Island",
    "바에자 섬"
  ],
  [
    -36.6,
    -19.6,
    "Serca Island",
    "세르카 섬"
  ],
  [
    -29.3,
    -22.2,
    "Netnume Island",
    "네트넘 섬"
  ],
  [
    -28.3,
    -20.3,
    "Oben Island",
    "오벤 섬"
  ],
  [
    -30.3,
    -19.3,
    "Dunde Island",
    "던데 섬"
  ],
  [
    -29.6,
    -17.5,
    "Eberdeen Island",
    "에버딘 섬"
  ],
  [
    -32.6,
    -14.6,
    "Barater Island",
    "바라테르 섬"
  ],
  [
    -21.3,
    -23.1,
    "Teste Island",
    "테스테 섬"
  ],
  [
    -18.5,
    -20.4,
    "Almai Island",
    "알마이 섬"
  ],
  [
    -14.2,
    -16.55,
    "Kuit Islands",
    "쿠이트 제도"
  ],
  [
    -21.7,
    -16.6,
    "Padix Island",
    "파딕스 섬"
  ],
  [
    -18,
    -7.6,
    "Arita Island",
    "아리타 섬"
  ],
  [
    -28.2,
    -8.3,
    "Staren Island",
    "스타렌 섬"
  ],
  [
    -23.8,
    -7.2,
    "Lisz Island",
    "리스즈 섬"
  ],
  [
    -21.6,
    -3,
    "Narvo Island",
    "나르보 섬"
  ],
  [
    -25.25,
    -2.9,
    "Marka Island",
    "마르카 섬"
  ],
  [
    -10.9,
    2.1,
    "Tashu Island",
    "타슈 섬"
  ],
  [
    -21.1,
    1.9,
    "Invernen Island",
    "인버넨 섬"
  ],
  [
    -26,
    1.3,
    "Angie Island",
    "앙쥬 섬"
  ],
  [
    -23.8,
    4.4,
    "Balvege Island",
    "발베쥬 섬"
  ],
  [
    -23.9,
    6.9,
    "Marlene Island",
    "마를레느 섬"
  ],
  [
    -27.3,
    5.2,
    "Eveto Island",
    "에베토 섬"
  ],
  [
    -19.3,
    4.95,
    "Tulu Island",
    "툴루 섬"
  ],
  [
    -18.9,
    7.6,
    "Orffs Island",
    "오르프스 섬"
  ],
  [
    -26.9,
    10,
    "Mariveno Island",
    "마리베노 섬"
  ],
  [
    -30.8,
    12.7,
    "Ephde Rune Island",
    "에프데 룬 섬"
  ],
  [
    -15.7,
    15.2,
    "Al-Naha Island",
    "알나하 섬"
  ],
  [
    -19.3,
    18.25,
    "Ajir Island",
    "아지르 섬"
  ],
  [
    -24.45,
    15.2,
    "Weita Island",
    "웨이타 섬"
  ],
  [
    -28.2,
    15.7,
    "Paratama Island",
    "파라타마 섬"
  ],
  [
    -25.75,
    18.8,
    "Kanvera Island",
    "칸베라 섬"
  ],
  [
    -27.15,
    20.17,
    "Arakil Island",
    "아라킬 섬"
  ],
  [
    -29.3,
    22.9,
    "Taramura Island",
    "타라무라 섬"
  ],
  [
    -27.9,
    23.8,
    "Ostra Island",
    "오스트라 섬"
  ],
  [
    -28.7,
    29,
    "Delinghart Island",
    "델링하트 섬"
  ],
  [
    -21.5,
    33.5,
    "Pujara Island",
    "푸자라 섬"
  ],
  [
    -2.8,
    30.2,
    "Tinberra Island",
    "틴베라 섬"
  ],
  [
    -3.5,
    34.2,
    "Lerao Island",
    "레라오 섬"
  ],
  [
    -8.1,
    36.1,
    "Portanen Island",
    "포르타넨 섬"
  ],
  [
    -12.25,
    34.1,
    "Shasha Island",
    "샤샤 섬"
  ],
  [
    -12.1,
    37.6,
    "Rosevan Island",
    "로즈반 섬"
  ],
  [
    -15.5,
    46.6,
    "Boa Island",
    "보아 섬"
  ],
  [
    -33,
    39.4,
    "Sokota Island",
    "소코타 섬"
  ],
  [
    -30.1,
    44.6,
    "Riyed Island",
    "리에드 섬"
  ],
  [
    -25.8,
    46.8,
    "Esfah Island",
    "에스파 섬"
  ],
  [
    -24.55,
    45.6,
    "Tigris Island",
    "티그리스 섬"
  ],
  [
    -24.2,
    48.75,
    "Shirna Island",
    "시르나 섬"
  ],
  [
    -18.6,
    58.2,
    "Halmad Island",
    "할마드 섬"
  ],
  [
    -15.7,
    60.65,
    "Kashuma Island",
    "카슈마 섬"
  ],
  [
    -12.1,
    81.5,
    "Derko Island",
    "더코 섬"
  ],
  [
    -1.3,
    115.1,
    "Hakoven Island",
    "하코번 섬"
  ],
  [
    5.1,
    4.2,
    "Oquilla's Eye",
    "오킬루아의 눈"
  ],
  [
    11.6,
    33.6,
    "Crow's Nest",
    "까마귀의 둥지"
  ],
  [
    54.1,
    -96.5,
    "Mariul Island",
    "마리울 섬"
  ],
  [
    49.8,
    -101.2,
    "Nada Island",
    "나다 섬"
  ],
  [
    49.5,
    -93.3,
    "Zagam Island",
    "자감 섬"
  ],
  [
    -3.8,
    13.94,
    "Feltron Island",
    "펠트런 섬"
  ],
  [
    2.9,
    13.51,
    "Slippery Scallywags Isle",
    "팔딱생선 해적단 섬"
  ]
];
export const ISLANDS_CIRCLE = [
  [
    -34.7,
    -27.8,
    "Theonil Island",
    "시오닐 섬"
  ],
  [
    -35,
    -19.4,
    "Randis Island",
    "란디스 섬"
  ],
  [
    -27.7,
    -24.3,
    "Daton Island",
    "데이튼 섬"
  ],
  [
    -30.8,
    -14.8,
    "Albresser Island",
    "알브레서 섬"
  ],
  [
    -26.2,
    -5.4,
    "Louruve Island",
    "루루브 섬"
  ],
  [
    -28.1,
    4.2,
    "Duch Island",
    "두흐 섬"
  ],
  [
    -30,
    8.5,
    "Luivano Island",
    "루이바노 섬"
  ],
  [
    -22,
    12.7,
    "Baremi Island",
    "바레미 섬"
  ],
  [
    -31.3,
    19.2,
    "Beiruwa Island",
    "베이루와 섬"
  ],
  [
    -12.8,
    17.9,
    "Racid Island",
    "라시드 섬"
  ],
  [
    -29.5,
    33.1,
    "Pilava Island",
    "필바라 섬"
  ],
  [
    -19.5,
    46.6,
    "Orisha Island",
    "오리샤 섬"
  ],
  [
    -52.5,
    -43.7,
    "Papua Crinea",
    "파푸아 크리니"
  ]
];

// ── NPCs ──────────────────────────────────────────────────────

export const HARBORS           = [
  [
    -36.05,
    12.7
  ],
  [
    -45.05,
    15.15
  ],
  [
    -39.61,
    6.03
  ],
  [
    5.36,
    3.48
  ],
  [
    -14.13,
    7.63
  ],
  [
    -21.88,
    24.7
  ],
  [
    -30.27,
    47.3
  ],
  [
    -23.83,
    53.7
  ],
  [
    -46.08,
    5.5
  ],
  [
    -39.44,
    -17.82
  ],
  [
    -39.93,
    -25.2
  ],
  [
    -44.95,
    -8.02
  ],
  [
    -15.62,
    -15.85
  ],
  [
    61.38,
    -92.23
  ],
  [
    -32.44,
    32.88
  ],
  [
    -43.68,
    42.8
  ],
  [
    -47.01,
    30.5
  ],
  [
    -30.05,
    117.92
  ],
  [
    -17.8,
    92.7
  ],
  [
    -65.36,
    -34.37
  ],
  [
    -53.51,
    -41.55
  ],
  [
    -50.5,
    -41.43
  ],
  [
    -68.99,
    -14.36
  ],
  [
    10.81,
    31.66
  ]
];
export const IMPERIAL_DELIVERY = [
  [
    -36.65,
    12.8
  ],
  [
    -62.2,
    7.9
  ],
  [
    -51.15,
    38.3
  ],
  [
    -28.1,
    98.7
  ],
  [
    -49.02,
    10.3
  ],
  [
    -64,
    -30.2
  ],
  [
    -39.49,
    -17.91
  ],
  [
    -68.46,
    -0.33
  ]
];
export const TRADE_MANAGERS    = [
  [
    61.34,
    -92.23
  ],
  [
    -35.66,
    -28.44
  ],
  [
    -34.55,
    -19.67
  ],
  [
    -30.88,
    -15.61
  ],
  [
    -27.84,
    -23.53
  ],
  [
    -26.14,
    -5.99
  ],
  [
    -28.27,
    4.28
  ],
  [
    -29.37,
    8.07
  ],
  [
    -22.02,
    13.6
  ],
  [
    -30.82,
    19.09
  ],
  [
    -21.79,
    25.12
  ],
  [
    -12.06,
    18.17
  ],
  [
    -28.75,
    32.7
  ],
  [
    -19.52,
    46.76
  ],
  [
    -37.23,
    11.07
  ],
  [
    -37.19,
    13.94
  ],
  [
    -36.99,
    15.31
  ],
  [
    -38.51,
    13.08
  ],
  [
    -39.09,
    11.95
  ],
  [
    -39.09,
    14.67
  ],
  [
    -39.48,
    6.79
  ],
  [
    -40.41,
    9.69
  ],
  [
    -34.53,
    20.66
  ],
  [
    -42.94,
    12.93
  ],
  [
    -42.46,
    8.66
  ],
  [
    -43.8,
    15.29
  ],
  [
    -41.64,
    2.01
  ],
  [
    -44.78,
    1.15
  ],
  [
    -33.74,
    0.44
  ],
  [
    -38.9,
    -2.37
  ],
  [
    -40.38,
    -17.21
  ],
  [
    -41.54,
    -9.29
  ],
  [
    -41.35,
    -6.83
  ],
  [
    -42.42,
    -5.66
  ],
  [
    -44.02,
    -5.39
  ],
  [
    -43.43,
    -7.93
  ],
  [
    -43.93,
    -8.79
  ],
  [
    -44.9,
    -7.11
  ],
  [
    -46.52,
    -8.38
  ],
  [
    -46.08,
    -11.87
  ],
  [
    -44.59,
    -13.8
  ],
  [
    -45.72,
    -4.24
  ],
  [
    -46.99,
    -13.16
  ],
  [
    -48.11,
    -14.67
  ],
  [
    -49.6,
    -14.97
  ],
  [
    -50.37,
    -13.05
  ],
  [
    -49.14,
    -18.85
  ],
  [
    -50.48,
    -19.31
  ],
  [
    -51.82,
    -18.34
  ],
  [
    -54.54,
    -19.06
  ],
  [
    -54.53,
    -11.31
  ],
  [
    -48.53,
    -6.9
  ],
  [
    -49.89,
    -8.29
  ],
  [
    -49.59,
    -5.56
  ],
  [
    -48.47,
    -3.96
  ],
  [
    -51.03,
    -4.71
  ],
  [
    -48.48,
    1.98
  ],
  [
    -50.3,
    -0.16
  ],
  [
    -51.97,
    2.26
  ],
  [
    -51.93,
    4.18
  ],
  [
    -52.34,
    -0.9
  ],
  [
    -53.23,
    -3.49
  ],
  [
    -50.61,
    -29.66
  ],
  [
    -54.23,
    -29.78
  ],
  [
    -55.62,
    -16.52
  ],
  [
    -55.69,
    -14.48
  ],
  [
    -52.27,
    -43.65
  ],
  [
    -58.89,
    -32
  ],
  [
    -58.27,
    -13.5
  ],
  [
    -59.65,
    -9.99
  ],
  [
    -61.99,
    -30.42
  ],
  [
    -64.65,
    -30.12
  ],
  [
    -64.84,
    -32.51
  ],
  [
    -63.34,
    -17.43
  ],
  [
    -62.05,
    -8.15
  ],
  [
    -60.32,
    -0.87
  ],
  [
    -63.69,
    -2.15
  ],
  [
    -62.73,
    6.79
  ],
  [
    -62.09,
    8.26
  ],
  [
    -54.45,
    9.28
  ],
  [
    -53.47,
    21.44
  ],
  [
    -45.93,
    12.57
  ],
  [
    -45.86,
    15.01
  ],
  [
    -46.22,
    18.21
  ],
  [
    -47.01,
    17.95
  ],
  [
    -47.24,
    14.05
  ],
  [
    -46.89,
    9.04
  ],
  [
    -48.96,
    10.3
  ],
  [
    -49.77,
    8.6
  ],
  [
    -49.75,
    15.42
  ],
  [
    -37.68,
    30.31
  ],
  [
    -40.53,
    28.26
  ],
  [
    -42.01,
    30.26
  ],
  [
    -42.82,
    32.43
  ],
  [
    -46.17,
    30.85
  ],
  [
    -46.61,
    32.2
  ],
  [
    -51.15,
    38.12
  ],
  [
    -49.89,
    43.78
  ],
  [
    -45.88,
    40.24
  ],
  [
    -46.39,
    41.97
  ],
  [
    -41.33,
    47.2
  ],
  [
    -30.16,
    50.86
  ],
  [
    -39.01,
    61.01
  ],
  [
    -22.55,
    60.07
  ],
  [
    -18.09,
    92.37
  ],
  [
    -29.69,
    117.4
  ],
  [
    -28.78,
    72.5
  ],
  [
    -29.57,
    95.26
  ],
  [
    -26.9,
    98.05
  ],
  [
    -49.77,
    102.04
  ]
];
export const BARTERERS         = [
  [
    -37.2,
    -31.3
  ],
  [
    -31.9,
    -29.6
  ],
  [
    -35.75,
    -28.31
  ],
  [
    -35.8,
    -26
  ],
  [
    -36.6,
    -24.5
  ],
  [
    -32.4,
    -25.6
  ],
  [
    -36.2,
    -19.35
  ],
  [
    -34.6,
    -20.1
  ],
  [
    -27.825,
    -23.325
  ],
  [
    -28.6,
    -22.3
  ],
  [
    -27.7,
    -21.4
  ],
  [
    -30.3,
    -19.2
  ],
  [
    -29.9,
    -18
  ],
  [
    -31.1,
    -15.7
  ],
  [
    -32.6,
    -14.9
  ],
  [
    -19.8,
    -23.1
  ],
  [
    -19,
    -20.75
  ],
  [
    -15.4,
    -16.5
  ],
  [
    -17.5,
    -16.5
  ],
  [
    -19.7,
    -6.5
  ],
  [
    -10.1,
    1.9
  ],
  [
    -12.1,
    8.1
  ],
  [
    -28.8,
    -8.6
  ],
  [
    -23.2,
    -6.3
  ],
  [
    -26.1,
    -6.2
  ],
  [
    -25.6,
    -3.1
  ],
  [
    -22.1,
    -2.4
  ],
  [
    -26.4,
    1.1
  ],
  [
    -21.75,
    2.95
  ],
  [
    -19.1,
    4.6
  ],
  [
    -19.4,
    7
  ],
  [
    -23.5,
    4
  ],
  [
    -23.3,
    6.75
  ],
  [
    -28.4,
    4.55
  ],
  [
    -26.6,
    5.5
  ],
  [
    -29.35,
    7.9
  ],
  [
    -26.4,
    9.7
  ],
  [
    -31.1,
    12.8
  ],
  [
    -28.8,
    15.2
  ],
  [
    -24.8,
    15.2
  ],
  [
    -21.99,
    13.66
  ],
  [
    -16.05,
    15.6
  ],
  [
    -12.03,
    18.25
  ],
  [
    -18.7,
    18.85
  ],
  [
    -25.4,
    18.65
  ],
  [
    -27.1,
    19.85
  ],
  [
    -30.8,
    19.1
  ],
  [
    -29.4,
    23.7
  ],
  [
    -27.45,
    24.1
  ],
  [
    -28.6,
    29.5
  ],
  [
    -28.77,
    32.61
  ],
  [
    -21.91,
    24.96
  ],
  [
    -21.8,
    33
  ],
  [
    -2.6,
    31
  ],
  [
    -1.6,
    34.7
  ],
  [
    -8.85,
    35.75
  ],
  [
    -13.95,
    33
  ],
  [
    -12.6,
    36.8
  ],
  [
    -15.85,
    46.3
  ],
  [
    -18.1,
    47.55
  ],
  [
    -32.45,
    39.9
  ],
  [
    -30.05,
    43.75
  ],
  [
    -24.13,
    45.63
  ],
  [
    -26.2,
    46.7
  ],
  [
    -24.05,
    49.15
  ],
  [
    -18.25,
    57.7
  ],
  [
    -16.9,
    59.3
  ],
  [
    -10.8,
    80.55
  ],
  [
    0.1,
    114.1
  ]
];

// Ocean barterers: [lat, lng, "Name EN", "Name KR"]
export const BARTERERS_OCEAN   = [
  [
    11.1,
    33.1,
    "Ravinia<br>(Crow Coin Exchange)",
    "라비니아<br>(까마귀 주화 교환원)"
  ],
  [
    -14.15,
    7.52,
    "Rebinia<br>(Crow Coin Exchange)",
    "르비니아<br>(까미귀 주화 교환원)"
  ],
  [
    61.45,
    -92.08,
    "Ravinia<br>(Crow Coin Exchange)",
    "리비니아<br>(까미귀 주화 교환원)"
  ],
  [
    37.31,
    -72,
    "Haran<br>(Shipwrecked Cargo Ship)",
    "하란<br>(난파된 하란의 수송선)"
  ],
  [
    39.3,
    -60.69,
    "Popo<br>(Old Moon Carrack)",
    "포포<br>(그믐달 길드의 중범선)"
  ],
  [
    48.75,
    -46.74,
    "Heracio<br>(Incomplete Ship)",
    "헤라치오<br>(떠내려온 미완성 선박)"
  ],
  [
    43.02,
    -40.09,
    "Lantinia<br>(Langtia's Combat Raft)",
    "랑티니아<br>(랑티니아의 전투 뗏목)"
  ],
  [
    27.84,
    -58.49,
    "Cholace Chiko<br>(Cholace Chiko's Pirate Union)",
    "숄라스 치코<br>(숄라스 치코의 해적 연합)"
  ],
  [
    36.68,
    -32.49,
    "Harus<br>(Wandering Merchant Ship)",
    "하루스<br>(떠돌이 상인의 배)"
  ],
  [
    23.44,
    -30.16,
    "Olcia Viano<br>(Crow Merchant Ship)",
    "올시아 비아노<br>(까마귀 상단 소유의 선박)"
  ],
  [
    19.9,
    -42.61,
    "Atinia<br>(Shipwrecked Ancient Relic Transport Vessel)",
    "아티니아<br>(난파된 고대 유적 수송선)"
  ],
  [
    9.36,
    -56.25,
    "Rickun<br>(Rikkun's Shipwreck Boat)",
    "릭쿤<br>(난파된 릭쿤의 배)"
  ],
  [
    0.4,
    -67.91,
    "Donalia<br>(Shipwrecked Naval Ship)",
    "도날리아<br>(난파된 해상군의 배)"
  ],
  [
    -3.25,
    -51.15,
    "Picira Baho<br>(Shipwrecked Cox Pirate's Ship)",
    "피치라 바호<br>(난파된 콕스 해적선)"
  ],
  [
    44.27,
    -16.15,
    "Pakio<br>(Pakio's Combat Raft)",
    "파키오<br>(파키오의 전투 뗏목)"
  ]
];

// ── Sea monsters ──────────────────────────────────────────────
// [lat, lng, "Name EN", "Name KR", "IconKey", {}]
export const SEA_MONSTERS      = [
  [
    30.71,
    3.77,
    "Vell",
    "벨",
    "IconVell",
    {}
  ],
  [
    7.56,
    -19.44,
    "Ocean Stalker",
    "표류추적자",
    "IconOceanStalker",
    {}
  ],
  [
    -34.18,
    -46.45,
    "Ocean Stalker",
    "표류추적자",
    "IconOceanStalker",
    {}
  ],
  [
    -9.13,
    -40.75,
    "Hekaru",
    "헤카루",
    "IconHekaru",
    {}
  ],
  [
    19.15,
    24.59,
    "Hekaru",
    "헤카루",
    "IconHekaru",
    {}
  ],
  [
    -3,
    4.65,
    "Young Sea Monster",
    "어린 해왕류",
    "IconYoungSeaMonster",
    {}
  ],
  [
    -26.12,
    -13.09,
    "Young Sea Monster",
    "어린 해왕류",
    "IconYoungSeaMonster",
    {}
  ],
  [
    41.74,
    -51.96,
    "Nineshark",
    "나인샤크",
    "IconNineshark",
    {}
  ],
  [
    47.5,
    -0.24,
    "Candidum",
    "칸디둠",
    "IconCandidum",
    {}
  ],
  [
    -13.84,
    -73.61,
    "Black Rust",
    "검은무쇠이빨",
    "IconBlackRust",
    {}
  ],
  [
    57.04,
    -27.4,
    "Saltwater Crocodile",
    "바다 악어",
    "IconSaltwaterCrocodile",
    {}
  ],
  [
    54.42,
    -69.3,
    "Black Rust",
    "검은무쇠이빨",
    "IconBlackRust2",
    {}
  ],
  [
    48.31,
    -87.18,
    "Goldmont Pirate",
    "골드몬트 해적단",
    "IconGoldmontPirate",
    {}
  ],
  [
    24.29,
    -98.39,
    "Lekrashan",
    "레크라샨",
    "IconLekrashan",
    {}
  ]
];

export const COX_PIRATES_GHOST = [
  [
    -37.16,
    -29.11
  ],
  [
    -31.28,
    -28.27
  ],
  [
    -34.51,
    -23.01
  ],
  [
    -32.83,
    -19.65
  ],
  [
    -27.6,
    -22.12
  ],
  [
    -23.73,
    -23.68
  ],
  [
    -17.72,
    -24.42
  ],
  [
    -26.62,
    -7.45
  ],
  [
    -21,
    -1.2
  ],
  [
    -21.8,
    -5.15
  ],
  [
    -15.17,
    -7.44
  ],
  [
    -24.56,
    3.05
  ],
  [
    -23.62,
    5.71
  ],
  [
    -17.1,
    5.59
  ],
  [
    -30.66,
    10.72
  ],
  [
    -27.86,
    9.09
  ],
  [
    -17.39,
    9.88
  ],
  [
    -10.83,
    12.56
  ],
  [
    -23.6,
    13.49
  ],
  [
    -13.64,
    16.15
  ],
  [
    -17.82,
    16.41
  ],
  [
    -18.84,
    20.08
  ],
  [
    -29.82,
    17.18
  ],
  [
    -29.85,
    20.84
  ],
  [
    -25.84,
    22.39
  ],
  [
    -26.55,
    26.78
  ],
  [
    -20.69,
    30.75
  ],
  [
    -10.25,
    36.05
  ],
  [
    -2.97,
    32.15
  ]
];
export const CARGO_SHIPS       = [
  [
    -35.36,
    -22
  ],
  [
    -36.87,
    -27.75
  ],
  [
    -30.54,
    -25.95
  ],
  [
    -25.21,
    -8.63
  ],
  [
    -23.23,
    -2.22
  ],
  [
    -21.95,
    5.95
  ],
  [
    -18.78,
    11.75
  ],
  [
    -10.33,
    16.17
  ],
  [
    -14.98,
    28.74
  ],
  [
    -30.09,
    29.22
  ]
];
export const DRUNK_SNIPERS     = [
  [
    -35.94,
    -19.71
  ],
  [
    -35.32,
    -19.94
  ],
  [
    -31.05,
    -14.46
  ],
  [
    -26.65,
    -18.52
  ],
  [
    -20.25,
    -22.77
  ],
  [
    -23.72,
    -6.13
  ],
  [
    -20.86,
    -2.54
  ],
  [
    -19.17,
    8.01
  ],
  [
    -23.61,
    6.52
  ],
  [
    -26.8,
    10.33
  ],
  [
    -24.13,
    14.51
  ],
  [
    -15.1,
    14.8
  ],
  [
    -27.15,
    20.26
  ],
  [
    -31.45,
    20.12
  ],
  [
    -16.08,
    24.37
  ],
  [
    -28.33,
    28.51
  ],
  [
    -29.41,
    32.05
  ],
  [
    -8.73,
    36.68
  ],
  [
    -3.04,
    30.95
  ],
  [
    -20.71,
    34.07
  ]
];
export const PIRATE_FLAGS      = [
  [
    -36.11,
    -23.79
  ],
  [
    -37.93,
    -30.76
  ],
  [
    -35.96,
    -28.49
  ],
  [
    -34.9,
    -26.54
  ],
  [
    -32.66,
    -25.13
  ],
  [
    -32.6,
    -30.48
  ],
  [
    -31.36,
    -29.52
  ],
  [
    -28.62,
    -25.27
  ],
  [
    -29.27,
    -22.53
  ],
  [
    -36.41,
    -20.07
  ],
  [
    -35.18,
    -18.89
  ],
  [
    -30.1,
    -18.78
  ],
  [
    -29.45,
    -18.17
  ],
  [
    -26.94,
    -18.31
  ],
  [
    -32.68,
    -15.47
  ],
  [
    -30.76,
    -14.29
  ],
  [
    -28.64,
    -8
  ],
  [
    -26.41,
    -4.83
  ],
  [
    -22.88,
    -6.61
  ],
  [
    -25.5,
    -2.93
  ],
  [
    -22.08,
    -3.1
  ],
  [
    -26.49,
    1.72
  ],
  [
    -21.11,
    3.06
  ],
  [
    -18.86,
    4.82
  ],
  [
    -23.34,
    5
  ],
  [
    -27.94,
    3.76
  ],
  [
    -26.75,
    5.31
  ],
  [
    -30.33,
    7.83
  ],
  [
    -31.27,
    12.83
  ],
  [
    -21.37,
    13.18
  ],
  [
    -24.56,
    13.81
  ],
  [
    -15.59,
    16.12
  ],
  [
    -11.77,
    17.55
  ],
  [
    -18.94,
    17.54
  ],
  [
    -30.64,
    18.72
  ],
  [
    -28.59,
    21.47
  ],
  [
    -27.94,
    24.53
  ],
  [
    -8.62,
    36.98
  ],
  [
    -26.84,
    20.08
  ]
];

// ── Seagull fishing spots ─────────────────────────────────────
// Each array is [lat, lng] positions for that fish species' seagull spots

export const SPOTS_COELACANTH     = [
  [
    -30.51,
    5.41
  ],
  [
    -35.69,
    11.87
  ],
  [
    -35.61,
    10.65
  ],
  [
    -35.69,
    8.94
  ],
  [
    -34.5,
    8.9
  ],
  [
    -33.77,
    10.37
  ],
  [
    -33.59,
    9.57
  ],
  [
    -32.87,
    10.34
  ],
  [
    -31.79,
    11.11
  ],
  [
    -15.75,
    30.43
  ],
  [
    -19.61,
    31.11
  ],
  [
    -40.64,
    -19.87
  ],
  [
    -39.64,
    -21
  ],
  [
    -39.02,
    -19.83
  ],
  [
    -37.52,
    -18.08
  ],
  [
    -37.7,
    -20.57
  ],
  [
    -34.42,
    -33.07
  ],
  [
    -35.55,
    -32.37
  ],
  [
    -26.25,
    -16.08
  ],
  [
    -28.13,
    -10.54
  ],
  [
    -38.29,
    -28.54
  ],
  [
    -25.77,
    -11.06
  ],
  [
    -19.04,
    -4.69
  ],
  [
    -25.52,
    -26.22
  ],
  [
    -9.8,
    -9.6
  ],
  [
    -18.9,
    -1.3
  ],
  [
    -16.47,
    -0.59
  ],
  [
    -25.36,
    6.17
  ],
  [
    -25.74,
    7.88
  ],
  [
    -9.3,
    16.36
  ],
  [
    -24.96,
    39.51
  ],
  [
    -17.56,
    37.57
  ],
  [
    -9.66,
    28.81
  ],
  [
    -1.01,
    26.5
  ],
  [
    -16.65,
    44.55
  ],
  [
    -23.01,
    44.59
  ],
  [
    -18.56,
    45.11
  ],
  [
    -3.57,
    16.51
  ],
  [
    -28.94,
    118.88
  ],
  [
    -27.25,
    119.51
  ],
  [
    -30.61,
    120.43
  ],
  [
    -28.94,
    122.1
  ]
];
export const SPOTS_GRUNT          = [
  [
    -24.28,
    2.71
  ],
  [
    -21.34,
    4.9
  ],
  [
    -33.64,
    10.31
  ],
  [
    -29.5,
    18.64
  ],
  [
    -25.63,
    25.16
  ],
  [
    -34.05,
    9.35
  ],
  [
    -34.07,
    7.41
  ],
  [
    -32.93,
    7.61
  ],
  [
    -33.05,
    9.45
  ],
  [
    -28.34,
    11.32
  ],
  [
    -27.18,
    17.99
  ],
  [
    -21.37,
    6.5
  ],
  [
    -19.75,
    3.51
  ],
  [
    -21.17,
    -4.62
  ],
  [
    -24.5,
    -4.76
  ],
  [
    -20.99,
    -7.95
  ],
  [
    -23.74,
    -8.56
  ],
  [
    -8.43,
    6.87
  ],
  [
    -15.92,
    18.9
  ],
  [
    -5.92,
    19.79
  ],
  [
    -3.24,
    32.12
  ],
  [
    -7.8,
    29.76
  ],
  [
    -4.72,
    37.75
  ],
  [
    -12.97,
    40.49
  ],
  [
    -25.1,
    32.04
  ],
  [
    -22.77,
    18.98
  ]
];
export const SPOTS_TUNA           = [
  [
    -23.19,
    18.07
  ],
  [
    -12.42,
    16.22
  ],
  [
    -3.03,
    12.12
  ],
  [
    -7.54,
    9.3
  ],
  [
    -16.76,
    6.77
  ],
  [
    -22.26,
    -0.16
  ],
  [
    -25.09,
    -0.65
  ],
  [
    -22.7,
    -5.14
  ],
  [
    -25.21,
    25.8
  ],
  [
    -28.18,
    26.11
  ],
  [
    -13.84,
    22.1
  ],
  [
    -1.5,
    27
  ],
  [
    1.05,
    32
  ],
  [
    -4.57,
    32.34
  ],
  [
    -5.66,
    34.83
  ],
  [
    -9.71,
    36.06
  ],
  [
    -21.24,
    37.33
  ],
  [
    -18.62,
    36.71
  ],
  [
    -26.49,
    38.52
  ],
  [
    -28.98,
    27.51
  ],
  [
    -12.4,
    24.84
  ]
];
export const SPOTS_GIANT_OCTOPUS  = [
  [
    -15.37,
    44.49
  ],
  [
    -20.97,
    48.57
  ],
  [
    -22.88,
    45.78
  ],
  [
    -20.29,
    47.85
  ],
  [
    -17.87,
    49.01
  ],
  [
    -23.43,
    47.17
  ],
  [
    -13.89,
    45.64
  ],
  [
    -15.23,
    48.6
  ],
  [
    -19.17,
    49.29
  ],
  [
    -21.96,
    46.5
  ],
  [
    -15.04,
    132.61
  ],
  [
    4.127,
    122.56
  ],
  [
    -35.48,
    122.86
  ]
];
export const SPOTS_SPOTTED_SBASS  = [
  [
    -26.2,
    10.64
  ],
  [
    -26.6,
    -2.45
  ],
  [
    -25.85,
    16.5
  ],
  [
    -23.17,
    17
  ],
  [
    -21.72,
    17.17
  ],
  [
    -24.96,
    12.15
  ],
  [
    -24.76,
    30.6
  ],
  [
    -17.9,
    36.45
  ],
  [
    -12.95,
    36.27
  ],
  [
    -11.04,
    36.15
  ],
  [
    -11.33,
    28
  ],
  [
    0.44,
    34.04
  ],
  [
    -15.26,
    20.13
  ],
  [
    -12.88,
    10.22
  ],
  [
    -17.17,
    13.71
  ],
  [
    -5.65,
    10.53
  ],
  [
    -1.95,
    14.72
  ],
  [
    -7.67,
    4.4
  ],
  [
    -24.06,
    1.51
  ],
  [
    -23.2,
    -1.06
  ],
  [
    -19.87,
    -1.9
  ],
  [
    -27.04,
    -0.25
  ],
  [
    -23.44,
    -3.85
  ],
  [
    -12.75,
    -0.02
  ]
];
export const SPOTS_TILEFISH       = [
  [
    -16.53,
    49.47
  ],
  [
    -21.42,
    49.33
  ],
  [
    -17.2,
    49.91
  ],
  [
    -22.82,
    44.43
  ],
  [
    -37.9,
    124.18
  ],
  [
    -29.77,
    125.08
  ],
  [
    -15.73,
    121.05
  ],
  [
    0.912,
    124.53
  ],
  [
    1.11,
    126.78
  ]
];
export const SPOTS_BLUE_GROUPER   = [
  [
    -26.6,
    43.67
  ],
  [
    -20.04,
    43.69
  ],
  [
    -14.46,
    44.14
  ],
  [
    -12.58,
    44.65
  ],
  [
    -15.88,
    43.74
  ],
  [
    -28.03,
    44.56
  ],
  [
    -28.51,
    123.31
  ],
  [
    -40.45,
    126.59
  ],
  [
    -42.58,
    125.96
  ],
  [
    -6.62,
    123.1
  ]
];
export const SPOTS_PORGY          = [
  [
    -17.36,
    -23.38
  ],
  [
    -28.65,
    -13.56
  ],
  [
    -20.25,
    -8.69
  ],
  [
    -16.84,
    -11.58
  ],
  [
    -14.88,
    -3.77
  ],
  [
    -10.75,
    -6.48
  ],
  [
    -11.68,
    -22.14
  ],
  [
    -17.01,
    -24.89
  ],
  [
    -21.05,
    -27.73
  ],
  [
    -23.7,
    -20.57
  ],
  [
    -33.82,
    -21.53
  ],
  [
    -37.46,
    -22.14
  ],
  [
    -30.45,
    -28.12
  ],
  [
    -35.89,
    -31.71
  ],
  [
    -38.29,
    -33
  ],
  [
    -37.64,
    -28.09
  ]
];
export const SPOTS_BLACK_PORGY    = [
  [
    -26.92,
    21.84
  ],
  [
    -25.06,
    6.01
  ],
  [
    -27.99,
    -0.05
  ],
  [
    -25.53,
    -7.7
  ],
  [
    -24.98,
    4.68
  ],
  [
    -25.17,
    10.61
  ],
  [
    -15.76,
    31.74
  ],
  [
    -25.18,
    7.87
  ],
  [
    -27.73,
    32.65
  ],
  [
    -27.8,
    1.17
  ],
  [
    -28.04,
    2.4
  ],
  [
    -24.22,
    8.04
  ],
  [
    -22.8,
    9.69
  ],
  [
    -25.17,
    10.55
  ],
  [
    -19.95,
    15.9
  ],
  [
    -21.72,
    18.15
  ],
  [
    -24.55,
    21.06
  ],
  [
    -23.73,
    22.22
  ],
  [
    -15.85,
    2.52
  ],
  [
    -10.5,
    0.1
  ],
  [
    -3.12,
    20.85
  ],
  [
    -17.97,
    36.9
  ],
  [
    -8.93,
    39.49
  ],
  [
    -1.46,
    37
  ],
  [
    -4.44,
    31.51
  ],
  [
    -26.86,
    -8.24
  ]
];
export const SPOTS_SMOKEY_CHROMIS = [
  [
    -18.53,
    -4.75
  ],
  [
    -25.23,
    -18.1
  ],
  [
    -23.06,
    -20.88
  ],
  [
    -36.22,
    -21.66
  ],
  [
    -37.32,
    -21.42
  ],
  [
    -34.76,
    -24.55
  ],
  [
    -39.69,
    -30.17
  ],
  [
    -33.86,
    -30.78
  ],
  [
    -31.12,
    -31.68
  ],
  [
    -30.79,
    -25.89
  ],
  [
    -30.34,
    -23.98
  ],
  [
    -31.84,
    -18.87
  ],
  [
    -31.18,
    -17.61
  ],
  [
    -32.69,
    -16.51
  ],
  [
    -30.06,
    -13.71
  ],
  [
    -28.73,
    -12.77
  ],
  [
    -17.94,
    -11.34
  ],
  [
    -14.33,
    -23.48
  ],
  [
    -9.81,
    -18.39
  ],
  [
    -8.31,
    -8.44
  ],
  [
    -23.21,
    -21.87
  ],
  [
    -29.66,
    -27.88
  ]
];
export const SPOTS_SEA_BASS       = [
  [
    -22.42,
    -21.11
  ],
  [
    -30.6,
    -12.4
  ],
  [
    -37.67,
    -27.06
  ],
  [
    -37.22,
    -28.06
  ],
  [
    -36.45,
    -33.09
  ],
  [
    -30.41,
    -21.73
  ],
  [
    -31.81,
    -22.64
  ],
  [
    -28.15,
    -16.67
  ],
  [
    -27.27,
    -16.94
  ],
  [
    -31.67,
    -13.42
  ],
  [
    -26.41,
    -13.85
  ],
  [
    -26.78,
    -12.82
  ],
  [
    -22.31,
    -11.12
  ],
  [
    -20.9,
    -11.01
  ],
  [
    -15.82,
    -9.42
  ],
  [
    -13.11,
    -4.68
  ],
  [
    -10.61,
    -3.42
  ],
  [
    -10.58,
    -9.9
  ],
  [
    -9.76,
    -16.54
  ],
  [
    -13.3,
    -22.78
  ],
  [
    -20.7,
    -21.05
  ],
  [
    -21.03,
    -27.32
  ],
  [
    -23.73,
    -21
  ]
];
export const SPOTS_NIBBLER        = [
  [
    -21.9,
    43.08
  ],
  [
    -13.48,
    45.76
  ],
  [
    -22.11,
    46.33
  ],
  [
    -21.84,
    48.12
  ],
  [
    -17.32,
    48.12
  ],
  [
    -19.35,
    41.95
  ],
  [
    -14.01,
    124.84
  ],
  [
    -6.752,
    125.63
  ],
  [
    -18.07,
    126.69
  ],
  [
    -35.79,
    127.03
  ]
];
export const SPOTS_EYESPOT_PUFFER = [
  [
    -19.94,
    -21.89
  ],
  [
    -20.28,
    -5.21
  ],
  [
    -15.52,
    -23.74
  ],
  [
    -23.98,
    -13.24
  ],
  [
    -23.85,
    -11.21
  ],
  [
    -19.64,
    -20.51
  ],
  [
    -19.46,
    -4.86
  ],
  [
    -37.21,
    -30.3
  ],
  [
    -35.93,
    -29.44
  ],
  [
    -32.98,
    -32.07
  ],
  [
    -34.01,
    -23.1
  ],
  [
    -31.61,
    -20.13
  ],
  [
    -27.5,
    -22.2
  ],
  [
    -32.45,
    -16.71
  ],
  [
    -23.76,
    -22.86
  ],
  [
    -23.9,
    -19.27
  ],
  [
    -15.17,
    -23.04
  ],
  [
    -10.71,
    -21.12
  ],
  [
    -17,
    -16.27
  ],
  [
    -16.28,
    -13.57
  ],
  [
    -13.53,
    -6.54
  ],
  [
    -11.97,
    -8.21
  ],
  [
    -9.36,
    -11.26
  ]
];
