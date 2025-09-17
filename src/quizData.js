// Quiz data for both categories

// Category: About You
export const aboutYouQuestions = [
  {
    id: 1,
    title: "에이언즈는 무엇을 의미하는가?",
    options: [
      { id: 1, text: "우주의 신" },
      { id: 2, text: "영겁을 살아가는 존재" },
      { id: 3, text: "강력한 무기" },
      { id: 4, text: "우주선의 이름" },
    ],
    correctAnswer: 1,
    type: "image",
    mediaPath: "/myImages/sus.jpeg",
  },
  {
    id: 2,
    title: "에이언즈 중 '풍요'을 담당하는 자는?",
    options: [
      { id: 1, text: "클리포트" },
      { id: 2, text: "약사" },
      { id: 3, text: "타이츠론스" },
      { id: 4, text: "란" },
    ],
    correctAnswer: 2,
    type: "image",
    mediaPath: "/myImages/glare.jpeg",
  },
  {
    id: 3,
    title: "수렵의 에이언즈 란은 어떤 특징을 가지고 있는가?",
    options: [
      { id: 1, text: "평화주의자" },
      { id: 2, text: "최고의 궁수" },
      { id: 3, text: "불멸의 존재를 사냥" },
      { id: 4, text: "치유 능력" },
    ],
    correctAnswer: 3,
    type: "text",
  },
  {
    id: 4,
    title: "'파멸'의 에이언즈는 누구인가?",
    options: [
      { id: 1, text: "야릴로" },
      { id: 2, text: "나누크" },
      { id: 3, text: "오로보로스" },
      { id: 4, text: "고구마" },
    ],
    correctAnswer: 2,
    type: "image",
    mediaPath: "/myImages/siuuu.jpeg",
  },
  {
    id: 5,
    title: "에이언즈한테 선택받아 힘을 받는 존재들을 무엇이라 하는가?",
    options: [
      { id: 1, text: "공허 사냥꾼" },
      { id: 2, text: "스텔라론 헌터" },
      { id: 3, text: "사도" },
      { id: 4, text: "갤럭시 레인저" },
    ],
    correctAnswer: 3,
    type: "text",
  },
  {
    id: 6,
    title: "그렇다면 파멸의 사도는 뭐라고 부르는가?",
    options: [
      { id: 1, text: "소멸파" },
      { id: 2, text: "소각공" },
      { id: 3, text: "절멸대군" },
      { id: 4, text: "적막의 영주" },
    ],
    correctAnswer: 3,
    type: "image",
    mediaPath: "/myImages/building.jpeg",
  },
  {
    id: 7,
    title: "'지식'의 에이언즈는 누구인가?",
    options: [
      { id: 1, text: "셉터" },
      { id: 2, text: "누스" },
      { id: 3, text: "아이언툼" },
      { id: 4, text: "헤르타" },
    ],
    correctAnswer: 2,
    type: "image",
    mediaPath: "/myImages/madman.jpeg",
  },
  {
    id: 8,
    title: "스텔라론은 누가 만들었는가?",
    options: [
      { id: 1, text: "아키비리" },
      { id: 2, text: "밝혀지지 않음" },
      { id: 3, text: "카프카" },
      { id: 4, text: "나누크" },
    ],
    correctAnswer: 4,
    type: "image",
    mediaPath: "/myImages/weed.png",
  },
  {
    id: 9,
    title: "'기억'의 에이언즈는 누구인가?",
    options: [
      { id: 1, text: "마쎄/삼칠이" },
      { id: 2, text: "블랙스완" },
      { id: 3, text: "후리" },
      { id: 4, text: "난가..?" },
    ],
    correctAnswer: 3,
    type: "image",
    mediaPath: "/myImages/tired.jpeg",
  },
  {
    id: 10,
    title: "'개척'의 에이언즈는 누구인가?",
    options: [
      { id: 1, text: "아하" },
      { id: 2, text: "선데이" },
      { id: 3, text: "폼폼" },
      { id: 4, text: "아키비리" },
    ],
    correctAnswer: 4,
    type: "image",
    mediaPath: "/myImages/kane.jpg",
  },
];

// Category: About Games
export const aboutGamesQuestions = [
  {
    id: 1,
    title: "포켓몬 몇번도로 브금 맞추기",
    options: [
      { id: 1, text: "228번 도로(아침)" },
      { id: 2, text: "216번 도로(아침)" },
      { id: 3, text: "216번 도로(저녁)" },
      { id: 4, text: "228번 도로(저녁)" },
    ],
    correctAnswer: 1,
    type: "audio",
    mediaPath: "/audio/pokemon_route.mp3",
  },
  {
    id: 2,
    title: "포켓몬 타입 맞추기",
    options: [
      { id: 1, text: "물" },
      { id: 2, text: "물, 드래곤" },
      { id: 3, text: "물, 악" },
      { id: 4, text: "물, 비행" },
    ],
    correctAnswer: 4,
    type: "image",
    mediaPath: "/gameImages/pokemon.png",
  },
  {
    id: 3,
    title: "몬헌 울음소리",
    options: [
      { id: 1, text: "라이젝스" },
      { id: 2, text: "리오레우스" },
      { id: 3, text: "알슈베르도" },
      { id: 4, text: "디아블로스" },
    ],
    correctAnswer: 3,
    type: "audio",
    mediaPath: "/audio/monster_cry.mp3",
  },
  {
    id: 4,
    title: "페르소나 맞추기",
    options: [
      { id: 1, text: "아르센" },
      { id: 2, text: "이자나기" },
      { id: 3, text: "루시퍼" },
      { id: 4, text: "메시아" },
    ],
    correctAnswer: 2,
    type: "image",
    mediaPath: "/gameImages/persona.png",
  },
  {
    id: 5,
    title: "페르소나 브금 맞추기",
    options: [
      { id: 1, text: "Iwatodai Dorm" },
      { id: 2, text: "Life Will Change" },
      { id: 3, text: "It's Going Down Now" },
      { id: 4, text: "Beneath the Mask" },
    ],
    correctAnswer: 3,
    type: "audio",
    mediaPath: "/audio/persona_bgm.mp3",
  },
  {
    id: 6,
    title: "사진에 나온 레이튼 교수 문제 풀기",
    options: [
      { id: 1, text: "3" },
      { id: 2, text: "5" },
      { id: 3, text: "7" },
      { id: 4, text: "9" },
    ],
    correctAnswer: 1,
    type: "image",
    mediaPath: "/gameImages/layton_puzzle.png",
  },
  {
    id: 7,
    title: "레이튼 교수 문제의 반짝캐럿 개수 맞추기(참고로 정답은 89)",
    options: [
      { id: 1, text: "20개" },
      { id: 2, text: "15개" },
      { id: 3, text: "70개" },
      { id: 4, text: "50개" },
    ],
    correctAnswer: 3,
    type: "image",
    mediaPath: "/gameImages/layton_hint.png",
  },
  {
    id: 8,
    title: "역전재판 캐릭터 맞추기(역전재판1 제외 기준)",
    options: [
      { id: 1, text: "재판관" },
      { id: 2, text: "재판장" },
      { id: 3, text: "판사" },
      { id: 4, text: "법관" },
    ],
    correctAnswer: 2,
    type: "image",
    mediaPath: "/gameImages/ace_attorney.jpeg",
  },
  {
    id: 9,
    title: "역전재판 브금 맞추기",
    options: [
      { id: 1, text: "Objection! - 역전재판 1" },
      { id: 2, text: "Objection! - 역전재판 2" },
      { id: 3, text: "Objection! - 역전재판 3" },
      { id: 4, text: "Objection! - 역전재판 4" },
    ],
    correctAnswer: 3,
    type: "audio",
    mediaPath: "/audio/ace_attorney_bgm.mp3",
  },
  {
    id: 10,
    title: "내가 안 해본 게임은?",
    options: [
      { id: 1, text: "잇 테익스 투" },
      { id: 2, text: "발더스 게이트 3" },
      { id: 3, text: "엔터더건전" },
      { id: 4, text: "스카이림" },
    ],
    correctAnswer: 4,
    type: "text",
  },
];

export const aboutYouResultRanges = [
  {
    min: 0,
    max: 3,
    title: "너.. 내 친구 맞니..?",
    description:
      "친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..",
    effect: "uncanny",
    imagePath: "/myImages/aooni.jpeg",
  },
  {
    min: 4,
    max: 7,
    title: "괜찮네~",
    description: "좀 아쉽네.. 이정도 밖에 안돼? 더 열심히 해봐ㅋ",
    effect: "sound1",
    imagePath: "/myImages/making-fun.jpeg",
  },
  {
    min: 8,
    max: 9,
    title: "이욜~",
    description:
      "좀 치는데? 근데 솔직히 만점 못받은거 좀 그렇긴 하다 ㅋㅋ 만점 받으면 엄청난 일이 생긴다는데..",
    effect: "sound2",
    imagePath: "/myImages/making-fun.jpeg",
  },
  {
    min: 10,
    max: 10,
    title: "완벽해요! 당신은 저의 모든 것을 알고 있어요!",
    description:
      "케인의 뭉탱이월드에 오신 것을 환영합니다! 당신은 진정한 내 친구입니다!",
    effect: "chaos",
    imagePath: "/myImages/weed.jpeg",
  },
];

export const aboutGamesResultRanges = [
  {
    min: 0,
    max: 3,
    title: "게임 초보자!",
    description:
      "친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..친구야..",
    effect: "uncanny",
    imagePath: "/myImages/aooni.jpeg",
  },
  {
    min: 4,
    max: 7,
    title: "평범한 게이머",
    description: "움.. 쏘쏘하네.. 좀 더 열심히 해봐.. ㅋ",
    effect: "sound1",
    imagePath: "/myImages/making-fun.jpeg",
  },
  {
    min: 8,
    max: 9,
    title: "게임 마스터!",
    description: "아 이걸 다 못맞추네 ㅋㅋ 내 수준까진 아직 못 넘었네 ㅋㅋ",
    effect: "sound2",
    imagePath: "/myImages/making-fun.jpeg",
  },
  {
    min: 10,
    max: 10,
    title: "게임의 신!",
    description: "이걸 다맞춘다고? 전진우급 겜창으로 인정한다 ㅋㅋ",
    effect: "chaos",
    imagePath: "/myImages/weed.jpeg",
  },
];

export const getResultRangesByCategory = (category) => {
  return category === "aboutGames"
    ? aboutGamesResultRanges
    : aboutYouResultRanges;
};
