// Quiz data for both categories

// Category: About You
export const aboutYouQuestions = [
  {
    id: 1,
    title: "요새 나의 말투는?",
    options: [
      { id: 1, text: "진짜 가벼워" },
      { id: 2, text: "멍청이~" },
      { id: 3, text: "뭉탱이" },
      { id: 4, text: "아것도 못 맞추진 않겠지 ㅋㅋ" },
    ],
    correctAnswer: 1,
    type: "image",
    mediaPath: "/myImages/sus.jpeg",
  },
  {
    id: 2,
    title: "내 거주지는?",
    options: [
      { id: 1, text: "서울시 강남구" },
      { id: 2, text: "서울시 강동구" },
      { id: 3, text: "이거 못맞추는건 진짜 아니다 ^^" },
      { id: 4, text: "서울시 강서구" },
    ],
    correctAnswer: 2,
    type: "image",
    mediaPath: "/myImages/glare.jpeg",
  },
  {
    id: 3,
    title: "내가 주문하는 방법은?",
    options: [
      { id: 1, text: "저기요~" },
      { id: 2, text: "주문할게요." },
      { id: 3, text: "..." },
      { id: 4, text: "아노.." },
    ],
    correctAnswer: 3,
    type: "text"
  },
  {
    id: 4,
    title: "해당 사진에서 내가 외친 말은?",
    options: [
      { id: 1, text: "너 지금 떠나면 나랑 사귀는거다!!!" },
      { id: 2, text: "siuuuu" },
      { id: 3, text: "야!!!!" },
      { id: 4, text: "나뭇잎 오의 닌자 달리기" },
    ],
    correctAnswer: 2,
    type: "image",
    mediaPath: "/myImages/siuuu.jpeg", 
  },
  {
    id: 5,
    title: "내가 최근에 한 봉사는?",
    options: [
      { id: 1, text: "친구 숙제 도와주기" },
      { id: 2, text: "양파싹 제거하기 ㅎㅎ" },
      { id: 3, text: "길고양이 밥주기" },
      { id: 4, text: "코딩 도와주기" },
    ],
    correctAnswer: 2,
    type: "text",
  },
  {
    id: 6,
    title: "사진에서 내가 만들고 있는 것은?",
    options: [
      { id: 1, text: "건담베이스 에디션 퍼스트 건담" },
      { id: 2, text: "윙 EW 건담" },
      { id: 3, text: "아스트레이 레드 프레임" },
      { id: 4, text: "따라큐 프라모델" },
    ],
    correctAnswer: 1,
    type: "image",
    mediaPath: "/myImages/building.jpeg", 
  },
  {
    id: 7,
    title: "내가 요새 하는 게임은?",
    options: [
      { id: 1, text: "몬스터헌터 와일드" },
      { id: 2, text: "몬스터헌터 와일즈" },
      { id: 3, text: "몬스터헌터 월드" },
      { id: 4, text: "몬스터헌터 디스크 프론티어" },
    ],
    correctAnswer: 2,
    type: "image",
    mediaPath: "/myImages/madman.jpeg",
  },
  {
    id: 8,
    title: "내가 빠지지 않은 릴스 밈은?",
    options: [
      { id: 1, text: "마인크래프트 영화대사" },
      { id: 2, text: "검은거" },
      { id: 3, text: "Ashton Hall" },
      { id: 4, text: "Eye of Rah" },
    ],
    correctAnswer: 4,
    type: "image",
    mediaPath: "/myImages/weed.png",
  },
  {
    id: 9,
    title: "내가 아침에 일어나자마자 하는 것은?",
    options: [
      { id: 1, text: "알람끄기" },
      { id: 2, text: "스트레칭" },
      { id: 3, text: "사라토가 탄산수로 세수하기" },
      { id: 4, text: "핸드폰 확인" },
    ],
    correctAnswer: 1,
    type: "image",
    mediaPath: "/myImages/tired.jpeg",
  },
  {
    id: 10,
    title: "이 퀴즈에 자꾸 등장하는 효과음의 정체는?",
    options: [
      { id: 1, text: "캐인" },
      { id: 2, text: "김진우" },
      { id: 3, text: "뭉텡이" },
      { id: 4, text: "최진우" },
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
    title:
      "사진에 나온 레이튼 교수 문제 풀기",
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
    description:
      "움.. 쏘쏘하네.. 좀 더 열심히 해봐.. ㅋ",
    effect: "sound1", 
    imagePath: "/myImages/making-fun.jpeg", 
  },
  {
    min: 8,
    max: 9,
    title: "게임 마스터!",
    description:
      "아 이걸 다 못맞추네 ㅋㅋ 내 수준까진 아직 못 넘었네 ㅋㅋ",
    effect: "sound2", 
    imagePath: "/myImages/making-fun.jpeg", 
  },
  {
    min: 10,
    max: 10,
    title: "게임의 신!",
    description:
      "이걸 다맞춘다고? 전진우급 겜창으로 인정한다 ㅋㅋ",
    effect: "chaos", 
    imagePath: "/myImages/weed.jpeg", 
  },
];

export const getResultRangesByCategory = (category) => {
  return category === "aboutGames"
    ? aboutGamesResultRanges
    : aboutYouResultRanges;
};
