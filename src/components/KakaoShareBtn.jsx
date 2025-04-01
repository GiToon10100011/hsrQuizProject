import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import JAVASCRIPT_KEY from "../envs";

const { Kakao } = window;

const KakaoShareBtn = ({ resultImg, resultName }) => {
  const url = "https://ybti.netlify.app";

  //결과페이지가 뜨도록함.
  const resultURL = window.location.href;

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "염동훈 유형 검사 결과",
        description: `동훈이를 키운다면 가장 잘 맞는 동훈이는 ${resultName}입니다!`,
        imageUrl: `${url}${resultImg}`,
        link: {
          mobileWebUrl: resultURL,
          webUrl: resultURL,
        },
      },

      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  useEffect(() => {
    // Kakao.cleanup();
    //난 상대방이 내 결과를 상세하게 볼 수 있으면 좋겠다
    Kakao.init(JAVASCRIPT_KEY);
    Kakao.isInitialized();
  }, []);
  return (
    <Button onClick={shareKakao} variant="warning">
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareBtn;
