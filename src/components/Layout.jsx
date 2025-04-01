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
    preloadSound("test", "/audio/test.mp3");
  }, [preloadSound]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
