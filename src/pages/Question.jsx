import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { aboutYouQuestions, aboutGamesQuestions } from "../quizData";
import { useAudio } from "../components/AudioManager";

const Wrapper = styled.div`
  width: 100%;
  min-height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--text-primary);
  padding: 20px;
  position: relative;
`;

const Title = styled.div`
  font-family: var(--exo-font);
  font-size: 32px;
  font-weight: 600;
  width: auto;
  max-width: 85%;
  text-align: center;
  margin-bottom: 25px;
  padding: 20px 25px;
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(120, 119, 198, 0.3);
  border-radius: 15px;
  box-shadow: var(--shadow-glow);
  color: var(--text-primary);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);

  @media screen and (max-width: 768px) {
    font-size: 26px;
    width: 95%;
    padding: 18px 20px;
  }
`;

const MediaContainer = styled.div`
  margin: 25px 0;
  width: 100%;
  max-width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img,
  video {
    max-width: 100%;
    max-height: 350px;
    border-radius: 15px;
    object-fit: contain;
    border: 2px solid rgba(120, 119, 198, 0.4);
    box-shadow: var(--shadow-glow), 0 8px 32px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 0 30px rgba(120, 119, 198, 0.6),
        0 12px 40px rgba(0, 0, 0, 0.4);
    }
  }

  audio {
    width: 100%;
    border-radius: 10px;
    background: var(--card-bg);
    backdrop-filter: blur(10px);

    &::-webkit-media-controls-panel {
      background: var(--card-bg);
    }
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 600px;
`;

const OptionButton = styled(Button)`
  padding: 20px 25px;
  font-size: 18px;
  font-family: var(--exo-font);
  font-weight: 500;
  text-align: left;
  position: relative;
  border-radius: 12px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  overflow: hidden;

  background: ${(props) => {
    if (props.$selected) {
      if (props.$correct)
        return "linear-gradient(135deg, #00C851 0%, #007E33 100%)";
      return "linear-gradient(135deg, #FF4444 0%, #CC0000 100%)";
    }
    return props.$category === "aboutYou"
      ? "var(--gradient-secondary)"
      : "var(--gradient-primary)";
  }};

  box-shadow: ${(props) => {
    if (props.$selected) {
      if (props.$correct) return "0 0 25px rgba(0, 200, 81, 0.5)";
      return "0 0 25px rgba(255, 68, 68, 0.5)";
    }
    return props.$category === "aboutYou"
      ? "0 0 15px rgba(79, 195, 247, 0.3)"
      : "0 0 15px rgba(120, 119, 198, 0.3)";
  }};

  opacity: ${(props) =>
    !props.$selected && props.$showAnswer && !props.$correct ? 0.5 : 1};

  color: white;

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
    transition: left 0.6s;
  }

  &:after {
    content: ${(props) =>
      props.$selected && props.$correct
        ? "'✓'"
        : props.$selected && !props.$correct
        ? "'✗'"
        : "''"};
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    animation: ${(props) => (props.$selected ? "popIn 0.3s ease" : "none")};
  }

  @keyframes popIn {
    0% {
      transform: translateY(-50%) scale(0);
    }
    50% {
      transform: translateY(-50%) scale(1.2);
    }
    100% {
      transform: translateY(-50%) scale(1);
    }
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${(props) => {
      if (props.$selected) {
        if (props.$correct)
          return "0 0 35px rgba(0, 200, 81, 0.7), 0 8px 16px rgba(0, 0, 0, 0.3)";
        return "0 0 35px rgba(255, 68, 68, 0.7), 0 8px 16px rgba(0, 0, 0, 0.3)";
      }
      return props.$category === "aboutYou"
        ? "0 0 25px rgba(79, 195, 247, 0.6), 0 8px 16px rgba(0, 0, 0, 0.3)"
        : "0 0 25px rgba(120, 119, 198, 0.6), 0 8px 16px rgba(0, 0, 0, 0.3)";
    }};

    &::before {
      left: 100%;
    }
  }

  &:disabled {
    cursor: not-allowed;
    transform: none;
  }
`;

const StyledProgressBar = styled(ProgressBar)`
  height: 8px;
  background: rgba(15, 15, 35, 0.8);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);

  .progress-bar {
    background: ${(props) =>
      props.$category === "aboutYou"
        ? "var(--gradient-secondary)"
        : "var(--gradient-primary)"};
    border-radius: 10px;
    box-shadow: 0 0 15px
      ${(props) =>
        props.$category === "aboutYou"
          ? "rgba(79, 195, 247, 0.6)"
          : "rgba(120, 119, 198, 0.6)"};
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
      );
      animation: shimmer 2s infinite;
    }
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;

const NextButton = styled(Button)`
  margin-top: 30px;
  padding: 15px 35px;
  font-size: 20px;
  font-family: var(--exo-font);
  font-weight: 600;
  background: var(--gradient-primary);
  border: none;
  border-radius: 25px;
  color: white;
  box-shadow: var(--shadow-glow);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

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

  &:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 0 30px rgba(120, 119, 198, 0.8),
      0 10px 20px rgba(0, 0, 0, 0.3);

    &::before {
      left: 100%;
    }
  }
`;

const ScoreDisplay = styled.div`
  font-family: var(--orbitron-font);
  font-size: 28px;
  font-weight: 600;
  margin: 20px 0;
  color: var(--text-primary);
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  padding: 12px 24px;
  border-radius: 20px;
  border: 2px solid rgba(120, 119, 198, 0.3);
  box-shadow: 0 0 15px rgba(120, 119, 198, 0.2);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const CategoryBadge = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: ${(props) =>
    props.$category === "aboutYou"
      ? "var(--gradient-secondary)"
      : "var(--gradient-primary)"};
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  font-size: 16px;
  font-family: var(--exo-font);
  font-weight: 600;
  z-index: 100;
  box-shadow: 0 0 20px rgba(120, 119, 198, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
`;

const Question = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.state?.category || "aboutYou";
  const { playSound } = useAudio();

  const [questionData, setQuestionData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  useEffect(() => {
    // Set the appropriate questions based on category
    setQuestionData(
      category === "aboutGames" ? aboutGamesQuestions : aboutYouQuestions
    );
  }, [category]);

  const handleOptionSelect = (optionId) => {
    if (showAnswer) return; // Prevent selecting after answer is shown

    const currentQuestion = questionData[currentQuestionIndex];
    setSelectedOption(optionId);
    setShowAnswer(true);

    if (optionId === currentQuestion.correctAnswer) {
      // Correct answer
      setScore(score + 1);
      playSound("correct");
    } else {
      // Incorrect answer
      const newIncorrectCount = incorrectCount + 1;
      setIncorrectCount(newIncorrectCount);

      // Play special sound if too many incorrect answers
      if (newIncorrectCount >= 3) {
        playSound("special_incorrect");
      } else {
        playSound("incorrect");
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else {
      // Quiz is complete, navigate to result page
      navigate("/result", {
        state: { score, totalQuestions: questionData.length, category },
      });
    }
  };

  if (questionData.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questionData[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questionData.length) * 100;

  return (
    <>
      <StyledProgressBar
        variant={category === "aboutYou" ? "info" : "danger"}
        now={progress}
        label={`${Math.round(progress)}%`}
        $category={category}
      />
      <CategoryBadge $category={category}>
        {category === "aboutYou" ? "🚀 개척자 테스트" : "🎮 은하 게임"}
      </CategoryBadge>
      <Wrapper>
        <ScoreDisplay>점수: {score} / 10</ScoreDisplay>

        <Title>{currentQuestion.title}</Title>

        {/* Render media based on type */}
        {currentQuestion.type !== "text" && (
          <MediaContainer>
            {currentQuestion.type === "image" && (
              <img src={currentQuestion.mediaPath} alt="Question" />
            )}
            {currentQuestion.type === "audio" && (
              <audio controls>
                <source src={currentQuestion.mediaPath} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
            {currentQuestion.type === "video" && (
              <video controls>
                <source src={currentQuestion.mediaPath} type="video/mp4" />
                Your browser does not support the video element.
              </video>
            )}
          </MediaContainer>
        )}

        <OptionsContainer>
          {currentQuestion.options.map((option) => (
            <OptionButton
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              $category={category}
              $selected={selectedOption === option.id}
              $correct={option.id === currentQuestion.correctAnswer}
              $showAnswer={showAnswer}
              disabled={showAnswer}
            >
              {option.text}
            </OptionButton>
          ))}
        </OptionsContainer>

        {showAnswer && (
          <NextButton
            variant={category === "aboutYou" ? "success" : "danger"}
            onClick={handleNextQuestion}
          >
            {currentQuestionIndex < questionData.length - 1
              ? "다음 문제"
              : "결과 보기"}
          </NextButton>
        )}
      </Wrapper>
    </>
  );
};

export default Question;
