import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAudio } from "./AudioManager";

const Layout = () => {
  const { preloadSound } = useAudio();

  // Preload all common sound effects at the start
  useEffect(() => {
    preloadSound("correct", "/audio/correct.mp3");
    preloadSound("incorrect", "/audio/incorrect.mp3");
    preloadSound("special_incorrect", "/audio/special_incorrect.mp3");
    preloadSound("okay", "/audio/okay.mp3");
    preloadSound("great", "/audio/great.mp3");
  }, [preloadSound]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
