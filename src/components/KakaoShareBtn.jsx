import React, { useEffect } from "react";
import styled from "styled-components";

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fee500;
  color: #000000;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
  width: 100%;
  max-width: 300px;

  &:hover {
    background-color: #e6cf00;
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;

const KakaoShareBtn = ({ resultName, resultImg, score, totalScore }) => {
  // Initialize Kakao SDK
  useEffect(() => {
    // Load Kakao SDK
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Kakao) {
        // JavaScript key from Kakao Developer console
        window.Kakao.init("YOUR_KAKAO_JAVASCRIPT_KEY"); // 여기에 실제 카카오 JavaScript SDK 키를 넣으세요
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const shareKakao = () => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        return;
      }

      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "나에 대한 퀴즈 결과",
          description: `${resultName} - ${
            score ? `${score}/${totalScore}점` : ""
          }`,
          imageUrl:
            window.location.origin + (resultImg || "/images/quiz_logo.jpg"),
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "결과 확인하기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: "퀴즈 풀기",
            link: {
              mobileWebUrl: window.location.origin,
              webUrl: window.location.origin,
            },
          },
        ],
      });
    }
  };

  return (
    <ShareButton onClick={shareKakao}>
      <img src="/images/kakao_icon.png" alt="Kakao" />
      카카오톡으로 공유하기
    </ShareButton>
  );
};

export default KakaoShareBtn;
