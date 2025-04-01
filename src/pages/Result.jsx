import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { getResultRangesByCategory } from "../quizData";
import ShareButtons from "../components/ShareButtons";
import { useAudio } from "../components/AudioManager";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #fff;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.bgColor || "transparent"};
`;

const ContentContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 15px;
  max-width: 90%;
  text-align: center;
  transition: all 0.3s ease;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${(props) => props.color || "#fff"};
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const ScoreDisplay = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin: 10px 0;
  color: ${(props) => {
    if (props.percent >= 90) return "#28a745";
    if (props.percent >= 70) return "#ffc107";
    if (props.percent >= 40) return "#fd7e14";
    return "#dc3545";
  }};
`;

const Description = styled.div`
  margin: 10px 0;
  font-size: 20px;
  max-width: 500px;
  line-height: 1.6;
`;

const ResultImage = styled.img`
  max-width: 100%;
  max-height: 300px;
  border-radius: 10px;
  margin: 20px 0;

  ${(props) =>
    props.effect === "uncanny" &&
    css`
      animation: ${zoomEffect} 10s infinite alternate;
    `}
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

const memeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 0) rotate(0deg) scale(0.5);
  }
  10% {
    opacity: 1;
    transform: translate(${() => Math.random() * 200 - 100}px, ${() =>
  Math.random() * 200 - 100}px) rotate(${() =>
  Math.random() * 360}deg) scale(${() => Math.random() * 0.5 + 0.5});
  }
  90% {
    opacity: 1;
    transform: translate(${() => Math.random() * 200 - 100}px, ${() =>
  Math.random() * 200 - 100}px) rotate(${() =>
  Math.random() * 360}deg) scale(${() => Math.random() * 0.5 + 0.5});
  }
  100% {
    opacity: 0;
    transform: translate(0, 0) rotate(0deg) scale(0.5);
  }
`;

const MemeImg = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
  object-fit: contain;
  z-index: ${(props) => props.zIndex || 5};
  top: ${(props) => props.top || "50%"};
  left: ${(props) => props.left || "50%"};
  animation: ${memeAnimation} ${(props) => props.duration || 4}s ease-in-out
    ${(props) => props.delay || 0}s infinite;
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

const ErrorPopup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f0f0f0;
  border: 1px solid #888;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: 400px;
  color: #000;
  text-align: center;
  z-index: 100;
  border-radius: 8px;

  h2 {
    color: #333;
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 15px;
  }

  button {
    margin-top: 10px;
  }
`;

const CategoryTag = styled.div`
  background-color: ${(props) =>
    props.category === "aboutYou" ? "#3498db" : "#e74c3c"};
  color: white;
  font-size: 16px;
  padding: 5px 12px;
  border-radius: 20px;
  margin-bottom: 15px;
  display: inline-block;
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

  const chaosTimerRef = useRef(null);
  const alertTimerRef = useRef(null);

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

      // Handle sound effects
      if (result.effect === "sound1") {
        playSound("okay");
      } else if (result.effect === "sound2") {
        playSound("great");
      }

      // Handle special effects
      if (result.effect === "uncanny") {
        // Uncanny effect after a short delay
        setTimeout(() => {
          document.documentElement.style.filter =
            "grayscale(0.5) contrast(1.2)";

          // Show fake error popup after some time
          setTimeout(() => {
            setShowErrorPopup(true);
          }, 8000);
        }, 3000);
      } else if (result.effect === "chaos") {
        // Prepare meme images for chaos effect
        const memeCount = 15;
        const newMemes = [];

        for (let i = 0; i < memeCount; i++) {
          newMemes.push({
            id: i,
            src: `/images/meme${(i % 5) + 1}.jpg`, // You'll need to add these images
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            zIndex: 5 + Math.floor(Math.random() * 5),
            duration: 2 + Math.random() * 4,
            delay: Math.random() * 2,
          });
        }

        setMemeImages(newMemes);

        // Start chaos escalation
        chaosTimerRef.current = setInterval(() => {
          setChaosLevel((prev) => {
            const newLevel = prev + 1;
            if (newLevel >= 10) {
              // Maximum chaos, start showing alerts
              if (!alertTimerRef.current) {
                alertTimerRef.current = setInterval(() => {
                  window.alert(
                    category === "aboutYou"
                      ? "축하합니다! 케인의 뭉탱이월드에 오신것을 환영합니다!"
                      : "축하합니다! 당신은 게임의 신입니다!"
                  );
                }, 1000);
              }
            }
            return newLevel;
          });
        }, 1000);
      }
    }

    return () => {
      // Clean up
      document.documentElement.style.filter = "";
      if (chaosTimerRef.current) clearInterval(chaosTimerRef.current);
      if (alertTimerRef.current) clearInterval(alertTimerRef.current);
    };
  }, [score, category, playSound]);

  const handlePlayAgain = () => {
    // 단순히 홈으로 이동하는 대신 페이지를 새로고침하여 상태 초기화
    window.location.href = "/";
  };

  if (!resultData) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper bgColor={resultData.effect === "uncanny" ? "#000" : "transparent"}>
      {resultData.effect === "uncanny" && <GlitchOverlay />}

      {resultData.effect === "chaos" && (
        <>
          <GlitchOverlay style={{ opacity: chaosLevel * 0.1 }} />
          {memeImages.map((meme) => (
            <MemeImg
              key={meme.id}
              src={meme.src}
              top={meme.top}
              left={meme.left}
              zIndex={meme.zIndex}
              duration={meme.duration}
              delay={meme.delay}
            />
          ))}
        </>
      )}

      <ContentContainer
        style={{
          transform:
            resultData.effect === "chaos" ? `rotate(${chaosLevel}deg)` : "none",
        }}
      >
        <CategoryTag category={category}>
          {category === "aboutYou" ? "나에 대해서" : "게임에 대해서"}
        </CategoryTag>

        <Title color={resultData.effect === "chaos" ? "#ff0" : "#fff"}>
          {resultData.title}
        </Title>

        <ScoreDisplay percent={scorePercent}>
          {score} / {totalQuestions} 점 ({Math.round(scorePercent)}%)
        </ScoreDisplay>

        {resultData.imagePath && (
          <ResultImage
            src={resultData.imagePath}
            alt="Result"
            effect={resultData.effect}
          />
        )}

        <Description>{resultData.description}</Description>

        <Button
          variant={resultData.effect === "uncanny" ? "danger" : "primary"}
          onClick={handlePlayAgain}
          size="lg"
        >
          다시 도전하기
        </Button>

        <ShareButtons
          resultName={resultData.title}
          resultImg={resultData.imagePath}
          score={score}
          totalQuestions={totalQuestions}
        />
      </ContentContainer>

      {showErrorPopup && (
        <ErrorPopup>
          <h2>시스템 오류</h2>
          <p>이 프로그램이 응답하지 않습니다. 지금 종료하시겠습니까?</p>
          <Button variant="secondary" onClick={() => setShowErrorPopup(false)}>
            대기
          </Button>
          <Button variant="danger" onClick={handlePlayAgain}>
            종료
          </Button>
        </ErrorPopup>
      )}
    </Wrapper>
  );
};

export default Result;
