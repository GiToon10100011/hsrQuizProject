# 만우절 기념 퀴즈 프로젝트 

Here's a summary of what you need to finalize the project:

Media files:
Place audio files in /public/audio/ (correct.mp3, incorrect.mp3, special_incorrect.mp3, etc.)

Place images in /public/images/ (background.jpg, quiz_logo.jpg, etc.)

Place video files in /public/videos/ for any video content

Quiz content:
The quiz structure is ready with your questions about yourself and games
You'll need to finalize question answers and add correct media files

Sound effects:
The audio player system is set up to manage sounds throughout the app
Add your specific sound effects for the different score ranges

To try the quiz, simply run:

```js
Apply to .env
cd Quiz
npm install
npm run dev
```

The quiz will ask users to turn on their volume, let them select a category (about you or about games), present 10 questions with immediate feedback, and then show a result screen with special effects based on their score.

# Required Images for Quiz App

## Share Icons (24x24px)

- kakao_icon.png - Yellow Kakao Talk icon
- twitter_icon.png - Blue Twitter/X icon
- facebook_icon.png - Blue Facebook icon
- link_icon.png - Gray link/chain icon

## Quiz Content Images

- quiz_logo.jpg - Logo image shown on home page
- background.jpg - Background image for the entire app

## Question Media

- For questions with image/audio/video, add the files in their respective directories:
  - /images/
  - /audio/
  - /videos/

## Result Images

- uncanny.jpg - Creepy image for low scores (0-3)
- kane.jpg - Chaos image for perfect score (10)
- meme1.jpg through meme5.jpg - Meme images for chaos effect on perfect score

# 필요한 오디오 파일 목록

이 폴더에 다음 오디오 파일들을 넣어주세요:

1. **효과음**

   - `correct.mp3` - 정답 효과음
   - `incorrect.mp3` - 오답 효과음
   - `special_incorrect.mp3` - 여러 번 오답 시 효과음
   - `okay.mp3` - 중간 점수 효과음
   - `great.mp3` - 좋은 점수 효과음

2. **문제 관련 오디오**
   - `saying.mp3` - "요새 나의 말투는?" 질문용 오디오
   - `effect.mp3` - "이 퀴즈에 자꾸 등장하는 효과음의 정체는?" 질문용
   - `pokemon_route.mp3` - "포켓몬 몇번도로 브금" 질문용
   - `monster_cry.mp3` - "몬헌 울음소리" 질문용
   - `persona_bgm.mp3` - "페르소나 브금" 질문용
   - `ace_attorney_bgm.mp3` - "역전재판 브금" 질문용

## 파일 형식

- 모든 오디오 파일은 MP3 형식으로 준비해 주세요
- 파일 크기가 작을수록 로딩 속도가 빠릅니다 (가능하면 500KB 이하)
- 효과음은 짧게 (1-2초), 배경음악은 적절한 길이로 준비해 주세요

## 오디오 연결 방법

1. 위 오디오 파일들을 이 폴더(`/public/audio/`)에 넣습니다.
2. 파일명이 코드에서 참조하는 이름과 정확히 일치해야 합니다.
3. 모든 오디오는 자동으로 50% 볼륨으로 재생됩니다.

# 퀴즈 오디오 테스트 및 업로드 방법

## 1. 오디오 파일 준비하기

필요한 오디오 파일:

```
Quiz/public/audio/
 ├── correct.mp3           # 정답 효과음
 ├── incorrect.mp3         # 오답 효과음
 ├── special_incorrect.mp3 # 연속 오답 효과음
 ├── okay.mp3              # 중간 점수 효과음
 ├── great.mp3             # 좋은 점수 효과음
 ├── saying.mp3            # "요새 나의 말투는?" 질문용
 ├── effect.mp3            # "효과음의 정체는?" 질문용
 ├── pokemon_route.mp3     # 포켓몬 브금 질문용
 ├── monster_cry.mp3       # 몬헌 울음소리 질문용
 ├── persona_bgm.mp3       # 페르소나 브금 질문용
 └── ace_attorney_bgm.mp3  # 역전재판 브금 질문용
```

## 2. 오디오 파일 업로드하기

1. 각 오디오 파일을 MP3 형식으로 준비합니다.
2. 파일명을 위 목록과 정확히 일치하도록 설정합니다.
3. `Quiz/public/audio/` 폴더에 파일들을 복사합니다.

## 3. 간단한 오디오 테스트 방법

### 테스트 1: 홈 화면 테스트

1. 프로젝트를 실행합니다: `npm run dev`
2. 홈 화면에서 소리 테스트 버튼을 클릭합니다.
3. `correct.mp3` 파일이 재생되어야 합니다.

### 테스트 2: 문제 오디오 테스트

1. 퀴즈를 시작하고 오디오 문제(예: "요새 나의 말투는?")에 도달합니다.
2. 오디오 플레이어가 나타나면 재생 버튼을 클릭합니다.
3. 해당 문제의 오디오(`saying.mp3`)가 재생되어야 합니다.

### 테스트 3: 정답/오답 효과음 테스트

1. 아무 문제나 풀고 정답을 선택합니다.
2. `correct.mp3` 효과음이 재생되어야 합니다.
3. 다른 문제를 풀고 오답을 선택합니다.
4. `incorrect.mp3` 효과음이 재생되어야 합니다.

## 4. 오디오 문제 해결

문제가 발생하는 경우:

1. **파일 형식 확인**: MP3 형식인지 확인합니다.
2. **파일명 대소문자 확인**: 대소문자가 정확히 일치해야 합니다.
3. **브라우저 캐시 삭제**: 개발자 도구에서 'Application' > 'Clear Storage' 클릭
4. **개발자 콘솔 확인**: F12 키를 누르고 콘솔 탭에서 오류 메시지 확인
5. **다른 브라우저 시도**: Chrome이 가장 권장됩니다.

## 5. 맞춤 오디오 효과음 찾기

무료 효과음 사이트:
- https://freesound.org/
- https://pixabay.com/sound-effects/
- https://www.zapsplat.com/
- https://mixkit.co/free-sound-effects/

게임 효과음을 찾으려면:
- "(게임이름) sound effects" 검색
- "(게임이름) soundtrack" 검색

## 6. 오디오 파일 컨버팅 및 편집

MP3가 아닌 파일을 변환하거나 편집이 필요한 경우:
- [Audacity](https://www.audacityteam.org/) - 무료 오디오 편집 프로그램
- [Online Audio Converter](https://online-audio-converter.com/) - 온라인 변환 도구 