import React, { useState } from "react";
import styled from "styled-components";
import KakaoShareBtn from "./KakaoShareBtn";

const ShareContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
  gap: 10px;
`;

const ShareTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #fff;
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$bgColor || "#007bff"};
  color: ${(props) => props.$textColor || "#ffffff"};
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
  width: 100%;
  max-width: 300px;

  &:hover {
    filter: brightness(90%);
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;

const CopyMessage = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1000;
  animation: fadeInOut 2s forwards;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const ShareButtons = ({
  resultName,
  resultImg,
  score,
  totalQuestions,
  disabled,
}) => {
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText("https://toonaprilfoolsquiz.web.app/");
    setShowCopyMessage(true);
    setTimeout(() => setShowCopyMessage(false), 2000);
  };

  const handleXShare = () => {
    const text = `나는 "${resultName}" 결과를 받았어요! (${score}/${totalQuestions}점)`;
    const url = "https://toonaprilfoolsquiz.web.app/";
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  return (
    <ShareContainer>
      <ShareTitle>결과 공유하기</ShareTitle>

      <KakaoShareBtn
        resultName={resultName}
        resultImg={resultImg}
        score={score}
        totalScore={totalQuestions}
        disabled={disabled}
      />

      <ShareButton
        onClick={handleXShare}
        $bgColor="#000000"
        disabled={disabled}
      >
        <img src="/X.svg" alt="X" style={{ filter: "invert(1)" }} />
        X로 공유하기
      </ShareButton>

      <ShareButton
        onClick={handleCopyUrl}
        $bgColor="#6c757d"
        disabled={disabled}
      >
        <img src="/link.svg" alt="Copy URL" />
        URL 복사하기
      </ShareButton>

      {showCopyMessage && (
        <CopyMessage>URL이 클립보드에 복사되었습니다!</CopyMessage>
      )}
    </ShareContainer>
  );
};

export default ShareButtons;
