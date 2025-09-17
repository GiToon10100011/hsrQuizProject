import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { getResultRangesByCategory } from "../quizData";
import ShareButtons from "../components/ShareButtons";
import { useAudio } from "../components/AudioManager";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  color: var(--text-primary);
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.$bgColor || "transparent"};
  padding: 20px;
`;

const ContentContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  z-index: 10;
  background: var(--card-bg);
  backdrop-filter: blur(15px);
  padding: 30px 40px;
  border-radius: 20px;
  border: 2px solid rgba(120, 119, 198, 0.3);
  box-shadow: var(--shadow-glow);
  max-width: 95%;
  width: 650px;
  max-height: 85vh;
  overflow-y: auto;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0.05;
    border-radius: 18px;
    pointer-events: none;
  }

  ${(props) =>
    props.$crazyMode &&
    css`
      animation: ${fastSpinEffect} ${(props) => props.$spinSpeed || 3}s linear
        infinite;
      transform-origin: center center;
    `}
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
  background: ${(props) =>
    props.$color === "#ff0"
      ? "linear-gradient(45deg, #FFD700, #FFA500)"
      : "var(--gradient-primary)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 20px rgba(120, 119, 198, 0.6);
  letter-spacing: 1px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const ScoreDisplay = styled.div`
  font-size: 36px;
  font-weight: 800;
  margin: 10px 0;
  padding: 15px 25px;
  border-radius: 15px;
  background: var(--card-bg);
  border: 2px solid;
  border-color: ${(props) => {
    if (props.$percent >= 90) return "#00C851";
    if (props.$percent >= 70) return "#FFD700";
    if (props.$percent >= 40) return "#FF8C00";
    return "#FF4444";
  }};
  color: ${(props) => {
    if (props.$percent >= 90) return "#00C851";
    if (props.$percent >= 70) return "#FFD700";
    if (props.$percent >= 40) return "#FF8C00";
    return "#FF4444";
  }};
  box-shadow: 0 0 20px
    ${(props) => {
      if (props.$percent >= 90) return "rgba(0, 200, 81, 0.4)";
      if (props.$percent >= 70) return "rgba(255, 215, 0, 0.4)";
      if (props.$percent >= 40) return "rgba(255, 140, 0, 0.4)";
      return "rgba(255, 68, 68, 0.4)";
    }};
  text-shadow: 0 0 15px currentColor;
`;

const Description = styled.div`
  margin: 15px 0;
  font-size: 20px;
  font-family: var(--exo-font);
  font-weight: 400;
  max-width: 550px;
  line-height: 1.6;
  color: var(--text-secondary);
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
`;

const ResultImage = styled.img`
  max-width: 90%;
  max-height: 200px;
  border-radius: 15px;
  margin: 15px 0;
  object-fit: contain;
  border: 2px solid rgba(120, 119, 198, 0.4);
  box-shadow: var(--shadow-glow), 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 30px rgba(120, 119, 198, 0.6),
      0 12px 40px rgba(0, 0, 0, 0.4);
  }
`;

// Animation for the uncanny effect
const zoomEffect = keyframes`
  0% {
    transform: scale(1);
    filter: grayscale(0);
  }
  100% {
    transform: scale(1.5);
    filter: grayscale(1) contrast(1.5);
  }
`;

// Animation for screen glitching
const glitchEffect = keyframes`
  0% {
    transform: translate(0);
    filter: hue-rotate(0deg);
  }
  1% {
    transform: translate(-5px, 5px);
    filter: hue-rotate(90deg);
  }
  2% {
    transform: translate(5px, -5px);
    filter: hue-rotate(180deg);
  }
  3% {
    transform: translate(0);
    filter: hue-rotate(0deg);
  }
  20% {
    transform: translate(0);
    filter: hue-rotate(0deg);
  }
  21% {
    transform: translate(-10px, 10px);
    filter: hue-rotate(180deg) blur(2px);
  }
  22% {
    transform: translate(10px, -10px);
    filter: hue-rotate(270deg);
  }
  23% {
    transform: translate(0);
    filter: hue-rotate(0deg);
  }
  100% {
    transform: translate(0);
    filter: hue-rotate(0deg);
  }
`;

// 펄스 애니메이션 효과 추가
const pulseEffect = keyframes`
  0% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.2);
    filter: brightness(1.3);
  }
  100% {
    transform: scale(1);
    filter: brightness(1);
  }
`;

// 기존 애니메이션에 펄스 효과를 결합
const memeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 0) rotate(0deg) scale(0.5);
  }
  10% {
    opacity: 1;
    transform: translate(${() => Math.random() * 300 - 150}px, ${() =>
  Math.random() * 300 - 150}px) rotate(${() =>
  Math.random() * 360}deg) scale(${() => Math.random() * 0.7 + 0.8});
  }
  90% {
    opacity: 1;
    transform: translate(${() => Math.random() * 300 - 150}px, ${() =>
  Math.random() * 300 - 150}px) rotate(${() =>
  Math.random() * 360}deg) scale(${() => Math.random() * 0.7 + 0.8});
  }
  100% {
    opacity: 0;
    transform: translate(0, 0) rotate(0deg) scale(0.5);
  }
`;

// MemeImg 컴포넌트 수정 - 펄스 애니메이션 추가
const MemeImg = styled.img`
  position: absolute;
  width: 250px;
  height: 250px;
  object-fit: contain;
  z-index: ${(props) => props.$zIndex || 5};
  top: ${(props) => props.$top || "50%"};
  left: ${(props) => props.$left || "50%"};
  animation: ${memeAnimation} ${(props) => props.$duration || 4}s ease-in-out
      ${(props) => props.$delay || 0}s infinite,
    ${pulseEffect} ${(props) => 0.5 + Math.random() * 1.5}s ease-in-out
      alternate infinite;
  filter: hue-rotate(${(props) => props.$hueRotate || 0}deg);
`;

const GlitchOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  pointer-events: none;
  z-index: 5;
  animation: ${glitchEffect} 10s infinite;
  mix-blend-mode: overlay;
`;

// Adobe 스타일 에러 팝업
const ErrorPopup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 450px;
  color: #333;
  text-align: left;
  z-index: 100;
  border-radius: 4px;
  overflow: hidden;
  font-family: "Segoe UI", "Arial", sans-serif;
`;

const ErrorHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
`;

const ErrorTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const CloseButton = styled.div`
  color: #999;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #666;
  }
`;

const ErrorContent = styled.div`
  padding: 20px 15px;
  font-size: 14px;
  line-height: 1.4;
`;

const ErrorButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 15px 20px 15px;
`;

const ErrorButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: 8px 15px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 2px;
  color: #0066cc;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    color: #0066cc;
    margin-right: 10px;
    width: 16px;
    height: 16px;
  }
`;

const CategoryTag = styled.div`
  background: ${(props) =>
    props.$category === "aboutYou"
      ? "var(--gradient-secondary)"
      : "var(--gradient-primary)"};
  color: white;
  font-size: 18px;
  font-family: var(--exo-font);
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 25px;
  margin-bottom: 20px;
  display: inline-block;
  box-shadow: 0 0 15px rgba(120, 119, 198, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.2);
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
`;

const StyledButton = styled(Button)`
  padding: 15px 35px;
  font-size: 20px;
  font-family: var(--exo-font);
  font-weight: 600;
  background: ${(props) =>
    props.$variant === "danger"
      ? "linear-gradient(135deg, #FF4444 0%, #CC0000 100%)"
      : "var(--gradient-primary)"};
  border: none;
  border-radius: 25px;
  color: white;
  box-shadow: ${(props) =>
    props.$variant === "danger"
      ? "0 0 20px rgba(255, 68, 68, 0.4)"
      : "var(--shadow-glow)"};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin: 15px 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover:not(:disabled) {
    transform: scale(1.05) translateY(-2px);
    box-shadow: ${(props) =>
      props.$variant === "danger"
        ? "0 0 30px rgba(255, 68, 68, 0.8), 0 10px 20px rgba(0, 0, 0, 0.3)"
        : "0 0 30px rgba(120, 119, 198, 0.8), 0 10px 20px rgba(0, 0, 0, 0.3)"};

    &::before {
      left: 100%;
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

// 새로운 팝업을 위한 스타일
const PerfectScoreModal = styled(Modal)`
  .modal-content {
    background-color: rgba(0, 0, 0, 0.85);
    color: #fff;
    border: 2px solid #ff0;
    border-radius: 10px;
    text-align: center;
  }

  .modal-header {
    border-bottom: 1px solid #ff0;
  }

  .modal-footer {
    border-top: 1px solid #ff0;
  }
`;

const GiftButton = styled(Button)`
  background-color: #ff0;
  color: #000;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  &:hover {
    background-color: #ffff00;
    transform: scale(1.05);
  }
`;

// 계속 커지는 이미지를 위한 애니메이션
const continuousGrowthEffect = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    filter: grayscale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(10);
    filter: grayscale(1) contrast(2) brightness(0.6);
  }
`;

// UncannyImage 컴포넌트 추가 - 확대되는 이미지를 fixed로 설정
const UncannyImage = styled.img`
  position: fixed; // 스크롤에 상관없이 고정 위치
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1); // 중앙 정렬
  max-width: 90%;
  max-height: 180px;
  border-radius: 10px;
  object-fit: contain;
  z-index: 50; // ContentContainer(z-index: 10)보다 높게 설정
  animation: ${continuousGrowthEffect} 30s forwards linear;
  transform-origin: center;
`;

// 전체화면 jumpscare를 위한 스타일 컴포넌트
const FullscreenJumpscare = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) => (props.$disappearing ? fadeOut : fadeIn)} 0.1s
    forwards;
  &::after {
    content: "넌 날 벗어날 수 없어..";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-size: 100px;
    color: red;
    text-align: center;
    z-index: 1000;
  }
`;

const JumpscareImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: top;
  transform: scale(1);
`;

// 페이드인/아웃 애니메이션
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// 점프스케어 효과음 재생
const playJumpscareSound = () => {
  const audio = new Audio("/audio/jumpscare.mp3");
  audio.volume = 1.0;
  audio.play().catch((err) => console.error("오디오 재생 실패:", err));
};

// 무지개 배경 효과를 위한 애니메이션
const rainbowBackground = keyframes`
  0% { background-color: rgba(255, 0, 0, 0.1); }
  16.6% { background-color: rgba(255, 165, 0, 0.1); }
  33.3% { background-color: rgba(255, 255, 0, 0.1); }
  50% { background-color: rgba(0, 255, 0, 0.1); }
  66.6% { background-color: rgba(0, 0, 255, 0.1); }
  83.3% { background-color: rgba(75, 0, 130, 0.1); }
  100% { background-color: rgba(238, 130, 238, 0.1); }
`;

// 별이 반짝이는 효과
const twinkleEffect = keyframes`
  0% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0.2; transform: scale(0.8); }
`;

// 회전하는 효과
const spinEffect = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// 화면에 반짝이는 별 컴포넌트
const Star = styled.div`
  position: fixed;
  width: ${(props) => props.$size || 10}px;
  height: ${(props) => props.$size || 10}px;
  background-color: ${(props) => props.$color || "white"};
  border-radius: 50%;
  top: ${(props) => props.$top}%;
  left: ${(props) => props.$left}%;
  z-index: 4;
  animation: ${twinkleEffect} ${(props) => props.$duration || 1}s ease-in-out
    infinite;
`;

// 회전하는 이모지 컴포넌트
const SpinningEmoji = styled.div`
  position: fixed;
  font-size: ${(props) => props.$size || 30}px;
  top: ${(props) => props.$top}%;
  left: ${(props) => props.$left}%;
  z-index: 4;
  animation: ${spinEffect} ${(props) => props.$duration || 5}s linear infinite;
`;

// 화면 전체 배경 효과
const RainbowOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
  mix-blend-mode: overlay;
  animation: ${rainbowBackground} 10s linear infinite;
`;

// 빠른 회전 애니메이션 추가
const fastSpinEffect = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    score = 0,
    totalQuestions = 10,
    category = "aboutYou",
  } = location.state || {};
  const { playSound } = useAudio();

  const [resultData, setResultData] = useState(null);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [chaosLevel, setChaosLevel] = useState(0);
  const [memeImages, setMemeImages] = useState([]);
  // 새로운 상태들
  const [showPerfectScoreModal, setShowPerfectScoreModal] = useState(false);
  const [crazyEffectTriggered, setCrazyEffectTriggered] = useState(false);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [showJumpscare, setShowJumpscare] = useState(false);
  const [isJumpscareDisappearing, setIsJumpscareDisappearing] = useState(false);
  const [stars, setStars] = useState([]);
  const [emojis, setEmojis] = useState([]);
  const [resultSpinSpeed, setResultSpinSpeed] = useState(0.8); // 초기 회전 속도 0.8초 (3초에서 변경)

  const chaosTimerRef = useRef(null);
  const alertTimerRef = useRef(null);
  const audioRefs = useRef([]);
  const musicTimerRef = useRef(null);

  const scorePercent = (score / totalQuestions) * 100;

  useEffect(() => {
    // Get the result ranges based on category
    const resultRanges = getResultRangesByCategory(category);

    // Find the appropriate result range
    const result = resultRanges.find(
      (range) => score >= range.min && score <= range.max
    );

    if (result) {
      setResultData(result);

      // Handle special effects
      if (result.effect === "uncanny") {
        // Uncanny effect after a short delay - 항상 적용
        setTimeout(() => {
          document.documentElement.style.filter =
            "grayscale(0.7) contrast(1.5)";

          // Show fake error popup after some time
          setTimeout(() => {
            setShowErrorPopup(true);
          }, 2000);
        }, 3000);
      } else if (
        result.effect === "chaos" &&
        (score === 0 || score === totalQuestions)
      ) {
        // 만점일 때 팝업 표시 (사용자 상호작용 필요)
        setShowPerfectScoreModal(true);
      }
    }

    return () => {
      // Clean up
      document.documentElement.style.filter = "";
      if (chaosTimerRef.current) clearInterval(chaosTimerRef.current);
      if (alertTimerRef.current) clearInterval(alertTimerRef.current);
      if (musicTimerRef.current) clearInterval(musicTimerRef.current);
      audioRefs.current.forEach((audio) => {
        audio.pause();
        audio.remove();
      });
      audioRefs.current = [];
    };
  }, [score, category, playSound, totalQuestions]);

  // 선물 받기 버튼 클릭 핸들러 - 뭉탱이월드 노래 효과 시작
  const handleGiftClick = () => {
    // 모달 닫기
    setShowPerfectScoreModal(false);

    // 이펙트 활성화
    setCrazyEffectTriggered(true);
    setButtonsDisabled(true);
    startCrazyMusic();
    startChaosEffect();

    // myImages.zip 파일 다운로드
    downloadZipFile();
  };

  // myImages.zip 파일 다운로드 함수
  const downloadZipFile = () => {
    // 모바일 환경에서는 다운로드하지 않음 (이미 모달에서 안내 메시지 표시)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // 모바일이 아닌 경우에만 다운로드 실행
    if (!isMobile) {
      // 데스크톱에서는 자동 다운로드
      const fileUrl = "/myImages.zip"; // 파일이 public 루트에 있음
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "선물.zip";

      // 요소를 DOM에 추가하고 클릭 이벤트 발생시킨 후 제거
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // 오디오 겹쳐서 재생하는 함수
  const startCrazyMusic = () => {
    // 오디오 파일 경로
    const musicPath = "/audio/mteworld.mp3"; // 실제 파일 경로로 수정 필요

    // 2초마다 새 오디오 추가
    musicTimerRef.current = setInterval(() => {
      const audio = new Audio(musicPath);
      audio.volume = 0.7;
      audioRefs.current.push(audio);
      audio.play().catch((err) => console.error("오디오 재생 실패:", err));
    }, 2000);

    // 첫번째 오디오 바로 재생
    const firstAudio = new Audio(musicPath);
    firstAudio.volume = 0.7;
    audioRefs.current.push(firstAudio);
    firstAudio.play().catch((err) => console.error("오디오 재생 실패:", err));
  };

  // 카오스 효과 시작
  const startChaosEffect = () => {
    // 모바일 환경 감지
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // 별 생성
    const starCount = 30;
    const newStars = [];
    const starColors = ["#FFD700", "#87CEEB", "#FF69B4", "#00FF00", "#FF6347"];

    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 5 + Math.random() * 15,
        duration: 0.5 + Math.random() * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    setStars(newStars);

    // 이모지 생성
    const emojiCount = 15;
    const newEmojis = [];
    const emojiList = [
      "🤣",
      "😂",
      "🥰",
      "😍",
      "🎮",
      "🎯",
      "🎪",
      "🎭",
      "🎨",
      "🚀",
      "💥",
      "⭐",
      "🌈",
    ];

    for (let i = 0; i < emojiCount; i++) {
      newEmojis.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 20 + Math.random() * 40,
        duration: 5 + Math.random() * 15,
        emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
      });
    }

    setEmojis(newEmojis);

    // 밈 이미지 준비
    const memeCount = 15;
    const newMemes = [];

    // 이미지 파일 확장자를 포함한 배열
    const memeFiles = [
      "meme1.jpg",
      "meme2.jpg",
      "meme3.jpg",
      "meme4.webp",
      "meme5.webp",
      "meme6.webp",
      "meme7.gif",
      "meme7.jpg",
      "meme8.gif",
      "meme9.jpg",
      "meme10.jpeg",
    ];

    for (let i = 0; i < memeCount; i++) {
      // memeFiles 배열에서 랜덤하게 파일 선택
      const randomFileIndex = Math.floor(Math.random() * memeFiles.length);
      const randomFile = memeFiles[randomFileIndex];

      newMemes.push({
        id: i,
        src: `/crazyImages/${randomFile}`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        zIndex: 5 + Math.floor(Math.random() * 5),
        duration: 2 + Math.random() * 4,
        delay: Math.random() * 2,
        hueRotate: Math.random() * 360, // 색상 변화를 위한 hue-rotate 값 추가
      });
    }

    setMemeImages(newMemes);

    // 훨씬 더 빠른 결과창 회전 시작
    setResultSpinSpeed(0.02); // 처음부터 빠르게 회전 (0.8초에 한 바퀴)

    // 알림창 표시 - 모바일에서도 작동하도록 수정
    const showAlertMessage = () => {
      const message =
        category === "aboutYou"
          ? "축하합니다! 케인의 뭉탱이월드에 오신것을 환영합니다!"
          : "축하합니다! 당신은 게임의 신입니다!";

      window.alert(message);

      // 다음 알림창 예약 (모바일에서는 간격을 약간 더 길게 설정)
      alertTimerRef.current = setTimeout(showAlertMessage, isMobile ? 100 : 0);
    };

    // 약간의 지연 후 알림창 시작
    setTimeout(showAlertMessage, 500);

    // 카오스 레벨에 따라 회전 속도 변경 - 더 급격히 빨라지도록
    chaosTimerRef.current = setInterval(() => {
      setChaosLevel((prev) => {
        const newLevel = prev + 1;
        // 카오스 레벨 5 이상부터 회전 속도 빠르게 (10에서 5로 낮춤)
        // 회전 속도 감소 비율도 0.8에서 0.6으로 변경하여 더 급격히 빨라지도록
        if (newLevel >= 5 && newLevel % 3 === 0) {
          // 3레벨마다 속도 증가 (5에서 3으로 변경)
          setResultSpinSpeed((prev) => Math.max(0.2, prev * 0.6)); // 최소 0.2초에 한바퀴까지 빨라짐
        }
        return newLevel;
      });
    }, 1000);
  };

  const handlePlayAgain = () => {
    // 단순히 홈으로 이동하는 대신 페이지를 새로고침하여 상태 초기화
    window.location.href = "/";
  };

  // 점프스케어 효과 함수
  const triggerJumpscare = () => {
    // 점프스케어 표시 전에 현재 필터와 확대 효과 제거
    document.documentElement.style.filter = "";

    // 1. 점프스케어 표시
    setShowJumpscare(true);
    playJumpscareSound();

    // 2. 약간 길게 1.5초 후 사라지는 애니메이션 시작
    setTimeout(() => {
      setIsJumpscareDisappearing(true);

      // 3. 애니메이션 완료 후 메인으로 이동
      setTimeout(() => {
        window.location.href = "/";
      }, 300);
    }, 1500);
  };

  // 팝업 버튼 핸들러 수정
  const handleCloseErrorPopup = () => {
    // 팝업 즉시 닫기
    setShowErrorPopup(false);

    // 약간의 지연 후 점프스케어 시작 (갑툭튀 효과 증대)
    setTimeout(() => {
      triggerJumpscare();
    }, 100);
  };

  const handleWaitErrorPopup = () => {
    // 팝업 즉시 닫기
    setShowErrorPopup(false);

    // 약간의 지연 후 점프스케어 시작 (갑툭튀 효과 증대)
    setTimeout(() => {
      triggerJumpscare();
    }, 100);
  };

  if (!resultData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Wrapper
        $bgColor={resultData.effect === "uncanny" ? "#000" : "transparent"}
      >
        {resultData.effect === "uncanny" && <GlitchOverlay />}

        {crazyEffectTriggered && (
          <>
            <RainbowOverlay />
            <GlitchOverlay style={{ opacity: chaosLevel * 0.1 }} />

            {/* 별 렌더링 */}
            {stars.map((star) => (
              <Star
                key={`star-${star.id}`}
                $top={star.top}
                $left={star.left}
                $size={star.size}
                $duration={star.duration}
                $color={star.color}
              />
            ))}

            {/* 회전하는 이모지 렌더링 */}
            {emojis.map((emoji) => (
              <SpinningEmoji
                key={`emoji-${emoji.id}`}
                $top={emoji.top}
                $left={emoji.left}
                $size={emoji.size}
                $duration={emoji.duration}
              >
                {emoji.emoji}
              </SpinningEmoji>
            ))}

            {/* 밈 이미지 */}
            {memeImages.map((meme) => (
              <MemeImg
                key={meme.id}
                src={meme.src}
                $top={meme.top}
                $left={meme.left}
                $zIndex={meme.zIndex}
                $duration={meme.duration}
                $delay={meme.delay}
                $hueRotate={meme.hueRotate}
              />
            ))}
          </>
        )}

        <ContentContainer
          $crazyMode={crazyEffectTriggered}
          $spinSpeed={resultSpinSpeed}
          style={{}}
        >
          <CategoryTag $category={category}>
            {category === "aboutYou" ? "🚀 개척자 테스트" : "🎮 은하 게임"}
          </CategoryTag>

          <Title $color={crazyEffectTriggered ? "#ff0" : "#fff"}>
            {resultData.title}
          </Title>

          <ScoreDisplay $percent={scorePercent}>
            {score} / {totalQuestions} 점 ({Math.round(scorePercent)}%)
          </ScoreDisplay>

          {/* uncanny 효과가 아닌 경우에만 일반 이미지 표시 */}
          {resultData.imagePath && resultData.effect !== "uncanny" && (
            <ResultImage src={resultData.imagePath} alt="Result" />
          )}

          <Description>{resultData.description}</Description>

          <StyledButton
            $variant={resultData.effect === "uncanny" ? "danger" : "primary"}
            onClick={handlePlayAgain}
            disabled={buttonsDisabled}
          >
            🚀 다시 도전하기
          </StyledButton>

          <ShareButtons
            resultName={resultData.title}
            resultImg={resultData.imagePath}
            score={score}
            totalQuestions={totalQuestions}
            disabled={buttonsDisabled}
          />
        </ContentContainer>

        {/* uncanny 효과일 때는 컨테이너 외부에 고정된 이미지 표시 */}
        {resultData.imagePath && resultData.effect === "uncanny" && (
          <UncannyImage src={resultData.imagePath} alt="Result" />
        )}

        {showErrorPopup && (
          <ErrorPopup>
            <ErrorHeader>
              <ErrorTitle>
                <img src="/images/adobe_icon.png" alt="Adobe" />
                프로그램 응답없음
              </ErrorTitle>
              <CloseButton onClick={handleCloseErrorPopup}>✕</CloseButton>
            </ErrorHeader>
            <ErrorContent>
              브라우저가 응답하지 않습니다.
              <p style={{ marginTop: "15px" }}>
                프로그램을 닫으면 사용자 정보의 복구를 시도합니다.
              </p>
            </ErrorContent>
            <ErrorButtons>
              <ErrorButton onClick={handleCloseErrorPopup}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                프로그램 닫기
              </ErrorButton>
              <ErrorButton onClick={handleWaitErrorPopup}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                프로그램 응답 대기
              </ErrorButton>
            </ErrorButtons>
          </ErrorPopup>
        )}

        {/* 만점 축하 모달 */}
        <PerfectScoreModal
          show={showPerfectScoreModal}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header>
            <Modal.Title>🎉 축하합니다! 10점을 달성하셨습니다! 🎉</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              당신은 진정한{" "}
              {category === "aboutYou" ? "저의 친구" : "게임의 신"}
              입니다!
            </p>
            <p>특별한 선물을 준비했습니다. 받으시겠습니까?</p>
            <p
              style={{
                color: "#ff9900",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              ※ 선물은 PC 환경에서만 다운로드 받을 수 있습니다!
            </p>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <GiftButton onClick={handleGiftClick}>선물 받기 🎁</GiftButton>
          </Modal.Footer>
        </PerfectScoreModal>
      </Wrapper>

      {/* 전체화면 점프스케어 */}
      {showJumpscare && (
        <FullscreenJumpscare $disappearing={isJumpscareDisappearing}>
          <JumpscareImage src="/myImages/aooni.jpeg" alt="Jumpscare" />
        </FullscreenJumpscare>
      )}
    </>
  );
};

export default Result;
