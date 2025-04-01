# 만우절 기념 퀴즈 프로젝트 

# 필요한 오디오 파일 목록

이 폴더에 다음 오디오 파일들을 넣어주세요:

1. **효과음**

   - `correct.mp3` - 정답 효과음
   - `incorrect.mp3` - 오답 효과음
   - `special_incorrect.mp3` - 여러 번 오답 시 효과음

2. **문제 관련 오디오**
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
3. `test.mp3` 파일이 재생되어야 합니다.

### 테스트 2: 정답/오답 효과음 테스트

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
