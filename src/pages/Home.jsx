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
  height: 100vh;
  color: #fff;
`;

const Header = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Contents = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  button {
    align-self: stretch;
    font-size: 18px;
    padding: 12px 24px;
  }
`;

const Title = styled.div`
  font-size: 28px;
  margin: 20px 0 10px;
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    & > img {
      width: 300px;
      object-fit: cover;
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
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  flex-direction: column;
  gap: 30px;

  h2 {
    font-size: 40px;
    color: white;
    text-align: center;
  }

  p {
    font-size: 22px;
    color: white;
    text-align: center;
    max-width: 80%;
    line-height: 1.6;
  }

  button {
    padding: 15px 30px;
    font-size: 22px;
    background-color: #e74c3c;
    border: none;
    margin-top: 20px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #c0392b;
      transform: scale(1.05);
    }
  }

  .volume-icon {
    font-size: 80px;
    animation: pulse 2s infinite;
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
`;

const CategoryCard = styled(Button)`
  width: 100%;
  padding: 30px !important;
  margin: 10px 0;
  text-align: center;
  font-size: 22px !important;
  background-color: ${(props) => props.bgColor || "#007bff"};
  border: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.hoverColor || "#0069d9"};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TestSoundButton = styled(Button)`
  padding: 15px 30px;
  font-size: 22px;
  background-color: #3498db;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
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
          <div className="volume-icon">🔊</div>
          <h2>음량을 켜주세요!</h2>
          <p>
            퀴즈에 오디오 효과가 포함되어 있습니다.
            <br />
            최상의 경험을 위해 음량을 켜주세요.
            <br />
            (음량은 50%로 설정되어 있습니다)
          </p>
          <ButtonGroup>
            <TestSoundButton onClick={handleTestSound}>
              소리 테스트
            </TestSoundButton>
            <Button variant="danger" onClick={handleVolumeMessageClose}>
              알겠습니다!
            </Button>
          </ButtonGroup>
        </VolumeMessage>
      )}

      {showCategories && (
        <>
          <Header>상식 퀴즈</Header>
          <Contents>
            <Title>카테고리를 선택해주세요!</Title>
            <LogoImg>
              <img src="/myImages/favicon.jpg" alt="quiz logo" />
            </LogoImg>

            <CategoryCard
              bgColor="#3498db"
              hoverColor="#2980b9"
              onClick={() => handleCategorySelect("aboutYou")}
            >
              나에 대한 상식 퀴즈
            </CategoryCard>

            <CategoryCard
              bgColor="#e74c3c"
              hoverColor="#c0392b"
              onClick={() => handleCategorySelect("aboutGames")}
            >
              게임 상식 퀴즈
            </CategoryCard>
          </Contents>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
