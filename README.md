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
