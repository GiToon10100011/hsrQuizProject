import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
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
  padding: 20px;
`;

const Header = styled.div`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 30px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  text-shadow: 0 0 30px rgba(120, 119, 198, 0.5);

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

const Contents = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  max-width: 600px;
  width: 100%;

  button {
    align-self: stretch;
    font-size: 18px;
    padding: 15px 30px;
    font-family: var(--exo-font);
    font-weight: 500;
  }
`;

const Title = styled.div`
  font-family: var(--exo-font);
  font-size: 32px;
  font-weight: 600;
  margin: 20px 0 10px;
  text-align: center;
  color: var(--text-primary);
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`;

const LogoImg = styled.div`
  position: relative;

  & > img {
    padding: 24px;
    object-fit: cover;
    border-radius: 20px;
    margin-bottom: 20px;
    border: 3px solid transparent;
    background: var(--gradient-primary);
    background-clip: padding-box;
    box-shadow: var(--shadow-glow), inset 0 0 20px rgba(120, 119, 198, 0.2);
    transition: all 0.3s ease;
  }

  &::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: 17px;
    background: var(--gradient-primary);
    border-radius: 23px;
    z-index: -1;
    opacity: 0.7;
    filter: blur(8px);
  }

  &:hover > img {
    transform: scale(1.02);
    box-shadow: 0 0 40px rgba(120, 119, 198, 0.6),
      inset 0 0 30px rgba(120, 119, 198, 0.3);
  }

  @media screen and (max-width: 768px) {
    & > img {
      width: 300px;
      height: 300px;
    }
  }
`;

const VolumeMessage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    circle at center,
    rgba(15, 15, 35, 0.95) 0%,
    rgba(0, 0, 0, 0.98) 100%
  );
  backdrop-filter: blur(10px);
  z-index: 1000;
  flex-direction: column;
  gap: 30px;

  h2 {
    font-size: 42px;
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
    text-shadow: 0 0 20px rgba(120, 119, 198, 0.5);
  }

  p {
    font-family: var(--exo-font);
    font-size: 22px;
    color: var(--text-secondary);
    text-align: center;
    max-width: 80%;
    line-height: 1.8;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }

  button {
    padding: 15px 30px;
    font-size: 22px;
    font-family: var(--exo-font);
    font-weight: 600;
    background: var(--gradient-primary);
    border: none;
    border-radius: 25px;
    margin-top: 20px;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-glow);
    color: white;
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
      box-shadow: 0 0 30px rgba(120, 119, 198, 0.6),
        0 10px 20px rgba(0, 0, 0, 0.3);

      &::before {
        left: 100%;
      }
    }
  }

  .volume-icon {
    font-size: 80px;
    animation: pulse 2s infinite, float 3s ease-in-out infinite;
    filter: drop-shadow(0 0 20px rgba(120, 119, 198, 0.7));
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const CategoryCard = styled(Button)`
  width: 100%;
  padding: 30px !important;
  margin: 15px 0;
  text-align: center;
  font-size: 24px !important;
  font-family: var(--exo-font) !important;
  font-weight: 600 !important;
  background: ${(props) =>
    props.$bgColor === "#3498db"
      ? "var(--gradient-secondary)"
      : "var(--gradient-primary)"};
  border: 2px solid transparent;
  border-radius: 15px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-glow);
  color: white !important;

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

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 70%
    );
    transition: all 0.6s;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  &:hover {
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0 0 40px rgba(120, 119, 198, 0.8),
      0 15px 30px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.3);

    &::before {
      left: 100%;
    }

    &::after {
      width: 300px;
      height: 300px;
    }
  }

  &:active {
    transform: scale(0.98) translateY(-2px);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const TestSoundButton = styled(Button)`
  padding: 15px 30px;
  font-size: 22px;
  font-family: var(--exo-font);
  font-weight: 600;
  background: var(--gradient-secondary);
  border: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(79, 195, 247, 0.4);
  color: white;
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
    box-shadow: 0 0 25px rgba(79, 195, 247, 0.6), 0 8px 16px rgba(0, 0, 0, 0.3);

    &::before {
      left: 100%;
    }
  }
`;

const Home = () => {
  const [showVolumeMessage, setShowVolumeMessage] = useState(true);
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();
  const { preloadSound, playSound } = useAudio();
  const soundTestPlayed = useRef(false);

  useEffect(() => {
    // Preload test sound
    preloadSound("test", "/audio/test.mp3");
  }, [preloadSound, playSound, showVolumeMessage]);

  const handleVolumeMessageClose = () => {
    setShowVolumeMessage(false);
    setShowCategories(true);
  };

  const handleTestSound = () => {
    playSound("test");
    soundTestPlayed.current = true;
  };

  const handleCategorySelect = (category) => {
    navigate("/question", { state: { category } });
  };

  return (
    <Wrapper>
      {showVolumeMessage && (
        <VolumeMessage>
          <div className="volume-icon">🎵</div>
          <h2>은하철도 탑승 준비!</h2>
          <p>
            스타레일 퀴즈에는 특별한 사운드 효과가 포함되어 있습니다.
            <br />
            최고의 우주 여행을 위해 음량을 켜주세요! ⭐
            <br />
            (음량은 50%로 설정되어 있습니다)
          </p>
          <ButtonGroup>
            <TestSoundButton onClick={handleTestSound}>
              🎧 사운드 테스트
            </TestSoundButton>
            <Button variant="danger" onClick={handleVolumeMessageClose}>
              🚀 여행 시작!
            </Button>
          </ButtonGroup>
        </VolumeMessage>
      )}

      {showCategories && (
        <>
          <Header>스타레일 퀴즈</Header>
          <p
            style={{
              fontSize: "18px",
              color: "var(--text-secondary)",
              marginBottom: "-15px",
              fontFamily: "var(--exo-font)",
              textShadow: "0 0 8px rgba(255, 255, 255, 0.2)",
            }}
          >
          </p>
          <Contents>
            <Title>은하철도의 여정을 시작하세요!</Title>
            <p
              style={{
                fontSize: "18px",
                color: "var(--text-secondary)",
                fontFamily: "var(--exo-font)",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.1)",
              }}
            >
              만점을 받으면 특별한 보상이..? ⭐ (PC 환경 권장)
            </p>
            <LogoImg>
              <img src="/myImages/favicon.png" alt="quiz logo" />
            </LogoImg>

            <CategoryCard
              $bgColor="#3498db"
              $hoverColor="#2980b9"
              onClick={() => handleCategorySelect("aboutYou")}
            >
              🚀 에이언즈 지식 테스트
            </CategoryCard>

            <CategoryCard
              $bgColor="#e74c3c"
              $hoverColor="#c0392b"
              onClick={() => handleCategorySelect("aboutGames")}
            >
              🎮 지니어스 클럽 상식퀴즈
            </CategoryCard>
          </Contents>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
