import React, { useEffect, useState } from "react";
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

const KakaoShareBtn = ({
  resultName,
  resultImg,
  score,
  totalScore,
  disabled,
}) => {
  const [isKakaoInitialized, setIsKakaoInitialized] = useState(false);

  // Initialize Kakao SDK
  useEffect(() => {
    // Check if Kakao SDK is already loaded
    if (window.Kakao) {
      try {
        if (!window.Kakao.isInitialized()) {
          // JavaScript key from Kakao Developer console
          window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
        }
        setIsKakaoInitialized(true);
      } catch (error) {
        console.error("카카오 초기화 에러:", error);
      }
    } else {
      // Load Kakao SDK
      const script = document.createElement("script");
      script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js";
      script.async = true;
      script.integrity =
        "sha384-kYPsUbBPlktXsY6/oNHSUDZoTX6+YI51f63jCPEBKgPwNNMu/YO7FVyEc9r6jnTH";
      script.crossOrigin = "anonymous";

      document.body.appendChild(script);

      script.onload = () => {
        if (window.Kakao) {
          try {
            // JavaScript key from Kakao Developer console
            window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
            setIsKakaoInitialized(true);
            console.log("카카오 SDK 초기화 성공");
          } catch (error) {
            console.error("카카오 초기화 에러:", error);
          }
        }
      };

      script.onerror = () => {
        console.error("카카오 SDK 로딩 실패");
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  const shareKakao = () => {
    if (!window.Kakao) {
      console.error("카카오 SDK가 로드되지 않았습니다.");
      alert(
        "카카오톡 공유하기를 로드할 수 없습니다. 잠시 후 다시 시도해주세요."
      );
      return;
    }

    if (!window.Kakao.Share) {
      console.error("Kakao.Share API를 찾을 수 없습니다.");
      alert(
        "카카오톡 공유하기를 로드할 수 없습니다. 잠시 후 다시 시도해주세요."
      );
      return;
    }

    try {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "나에 대한 퀴즈 결과",
          description: `${resultName} - ${
            score ? `${score}/${totalScore}점` : ""
          }`,
          imageUrl:
            "https://toonaprilfoolsquiz.web.app" +
            (resultImg || "/images/quiz_logo.jpg"),
          link: {
            mobileWebUrl: "https://toonaprilfoolsquiz.web.app/",
            webUrl: "https://toonaprilfoolsquiz.web.app/",
          },
        },
        buttons: [
          {
            title: "결과 확인하기",
            link: {
              mobileWebUrl: "https://toonaprilfoolsquiz.web.app/",
              webUrl: "https://toonaprilfoolsquiz.web.app/",
            },
          },
          {
            title: "퀴즈 풀기",
            link: {
              mobileWebUrl: "https://toonaprilfoolsquiz.web.app/",
              webUrl: "https://toonaprilfoolsquiz.web.app/",
            },
          },
        ],
      });
    } catch (error) {
      console.error("카카오 공유하기 에러:", error);
      alert("카카오톡 공유하기에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <ShareButton onClick={shareKakao} disabled={disabled}>
      <img src="/kakao.svg" alt="Kakao" />
      카카오톡으로 공유하기
    </ShareButton>
  );
};

export default KakaoShareBtn;
