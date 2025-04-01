// Quiz data for both categories

// Category: About You
export const aboutYouQuestions = [
  {
    id: 1,
    title: "요새 나의 말투는?",
    options: [
      { id: 1, text: "진짜가벼워" },
      { id: 2, text: "그거아닌데~" },
      { id: 3, text: "뭉탱이" },
      { id: 4, text: "설마했어" },
    ],
    correctAnswer: 1,
    type: "audio",
    mediaPath: "/audio/saying.mp3", // Audio will be added later
  },
  {
    id: 2,
    title: "내 거주지는?",
    options: [
      { id: 1, text: "서울시 강남구" },
      { id: 2, text: "서울시 강동구" },
      { id: 3, text: "서울시 송파구" },
      { id: 4, text: "서울시 강서구" },
    ],
    correctAnswer: 2,
    type: "text",
  },
  {
    id: 3,
    title: "내가 주문하는 방법은?",
    options: [
      { id: 1, text: "전화로 주문" },
      { id: 2, text: "앱으로 주문" },
      { id: 3, text: "직접 가서 주문" },
      { id: 4, text: "배민으로 주문" },
    ],
    correctAnswer: 4, // You'll need to specify the correct answer
    type: "text",
  },
  {
    id: 4,
    title: "해당 사진에서 내가 외친 말은?",
    options: [
      { id: 1, text: "와!" },
      { id: 2, text: "siuuuu" },
      { id: 3, text: "아이고~" },
      { id: 4, text: "하하하" },
    ],
    correctAnswer: 2,
    type: "image",
    mediaPath: "/images/shouting.jpg", // Image will be added later
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
      { id: 2, text: "레고 스타워즈" },
      { id: 3, text: "플라모델 자동차" },
      { id: 4, text: "페이퍼크래프트" },
    ],
    correctAnswer: 1,
    type: "image",
    mediaPath: "/images/building.jpg", // Image will be added later
  },
  {
    id: 7,
    title: "내가 요새 하는 게임은?",
    options: [
      { id: 1, text: "배틀그라운드" },
      { id: 2, text: "몬스터헌터 와일즈" },
      { id: 3, text: "발로란트" },
      { id: 4, text: "롤" },
    ],
    correctAnswer: 2,
    type: "text",
  },
  {
    id: 8,
    title: "내가 요새 보자마자 보내는 릴스 밈은?",
    options: [
      { id: 1, text: "마인크래프트 영화대사" },
      { id: 2, text: "고양이 영상" },
      { id: 3, text: "춤추는 영상" },
      { id: 4, text: "요리 레시피" },
    ],
    correctAnswer: 1,
    type: "video",
    mediaPath: "/videos/meme.mp4", // Video will be added later
  },
  {
    id: 9,
    title: "내가, 아침에 일어나자마자 하는 것은?",
    options: [
      { id: 1, text: "알람끄기" },
      { id: 2, text: "스트레칭" },
      { id: 3, text: "사라토가 세수" },
      { id: 4, text: "핸드폰 확인" },
    ],
    correctAnswer: 1,
    type: "text",
  },
  {
    id: 10,
    title: "이 퀴즈에 자꾸 등장하는 효과음의 정체는?",
    options: [
      { id: 1, text: "슈퍼마리오" },
      { id: 2, text: "케인" },
      { id: 3, text: "조커" },
      { id: 4, text: "마동석" },
    ],
    correctAnswer: 2,
    type: "audio",
    mediaPath: "/audio/effect.mp3", // Audio will be added later
  },
];

// Category: About Games
export const aboutGamesQuestions = [
  {
    id: 1,
    title: "포켓몬 몇번도로 브금 맞추기",
    options: [
      { id: 1, text: "210번 도로" },
      { id: 2, text: "1번 도로" },
      { id: 3, text: "22번 도로" },
      { id: 4, text: "120번 도로" },
    ],
    correctAnswer: 3, // You'll need to specify the correct answer
    type: "audio",
    mediaPath: "/audio/pokemon_route.mp3", // Audio will be added later
  },
  {
    id: 2,
    title: "포켓몬 타입 맞추기",
    options: [
      { id: 1, text: "노말" },
      { id: 2, text: "물" },
      { id: 3, text: "불꽃" },
      { id: 4, text: "페어리" },
    ],
    correctAnswer: 4, // You'll need to specify the correct answer
    type: "image",
    mediaPath: "/images/pokemon_type.jpg", // Image will be added later
  },
  {
    id: 3,
    title: "몬헌 울음소리(알슈베르도)",
    options: [
      { id: 1, text: "라이제크스" },
      { id: 2, text: "리오레우스" },
      { id: 3, text: "알슈베르도" },
      { id: 4, text: "디아블로스" },
    ],
    correctAnswer: 3,
    type: "audio",
    mediaPath: "/audio/monster_cry.mp3", // Audio will be added later
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
    correctAnswer: 2, // You'll need to specify the correct answer
    type: "image",
    mediaPath: "/images/persona.jpg", // Image will be added later
  },
  {
    id: 5,
    title: "페르소나 브금 맞추기",
    options: [
      { id: 1, text: "Last Surprise" },
      { id: 2, text: "Life Will Change" },
      { id: 3, text: "Rivers in the Desert" },
      { id: 4, text: "Beneath the Mask" },
    ],
    correctAnswer: 3, // You'll need to specify the correct answer
    type: "audio",
    mediaPath: "/audio/persona_bgm.mp3", // Audio will be added later
  },
  {
    id: 6,
    title: "레이튼 교수 문제 하나(고난이도)",
    options: [
      { id: 1, text: "3" },
      { id: 2, text: "5" },
      { id: 3, text: "7" },
      { id: 4, text: "9" },
    ],
    correctAnswer: 2, // You'll need to specify the correct answer
    type: "image",
    mediaPath: "/images/layton_puzzle.jpg", // Image will be added later
  },
  {
    id: 7,
    title: "레이튼 교수 문제의 반짝캐럿 개수 맞추기",
    options: [
      { id: 1, text: "50개" },
      { id: 2, text: "70개" },
      { id: 3, text: "100개" },
      { id: 4, text: "120개" },
    ],
    correctAnswer: 3, // You'll need to specify the correct answer
    type: "image",
    mediaPath: "/images/layton_hint.jpg", // Image will be added later
  },
  {
    id: 8,
    title: "역전재판 캐릭터 맞추기",
    options: [
      { id: 1, text: "나루호도 료이치" },
      { id: 2, text: "재판장" },
      { id: 3, text: "미츠루기 레이지" },
      { id: 4, text: "고도츠" },
    ],
    correctAnswer: 1, // You'll need to specify the correct answer
    type: "image",
    mediaPath: "/images/ace_attorney.jpg", // Image will be added later
  },
  {
    id: 9,
    title: "역전재판 브금 맞추기",
    options: [
      { id: 1, text: "Objection!" },
      { id: 2, text: "Cross Examination ~ Allegro" },
      { id: 3, text: "Pursuit ~ Cornered" },
      { id: 4, text: "Trial" },
    ],
    correctAnswer: 3, // You'll need to specify the correct answer
    type: "audio",
    mediaPath: "/audio/ace_attorney_bgm.mp3", // Audio will be added later
  },
  {
    id: 10,
    title: "내가 안 해본 게임은?",
    options: [
      { id: 1, text: "포켓몬" },
      { id: 2, text: "몬스터헌터" },
      { id: 3, text: "발로란트" },
      { id: 4, text: "스카이림" },
    ],
    correctAnswer: 3, // You'll need to specify the correct answer
    type: "text",
  },
];

// Define result ranges
export const resultRanges = [
  {
    min: 0,
    max: 3,
    title: "저런... 우리는 친구가 아닌 것 같아요.",
    description: "당신은 저에 대해 거의 모르시네요. 더 친해져야겠어요!",
    effect: "uncanny", // Special effect for this range
    imagePath: "/images/uncanny.jpg", // Image will be added later
  },
  {
    min: 4,
    max: 7,
    title: "괜찮네~",
    description: "어느 정도 저에 대해 알고 계시네요!",
    effect: "sound1", // Sound effect for this range
    soundPath: "/audio/okay.mp3", // Audio will be added later
  },
  {
    min: 8,
    max: 9,
    title: "오! 꽤 잘 아시네요!",
    description: "저에 대해 정말 잘 알고 계시네요! 감사합니다!",
    effect: "sound2", // Sound effect for this range
    soundPath: "/audio/great.mp3", // Audio will be added later
  },
  {
    min: 10,
    max: 10,
    title: "완벽해요! 당신은 저의 모든 것을 알고 있어요!",
    description: "케인의 뭉탱이월드에 오신 것을 환영합니다!",
    effect: "chaos", // Special chaos effect for perfect score
    imagePath: "/images/kane.jpg", // Image will be added later
  },
];
