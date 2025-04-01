import React, { createContext, useContext, useRef } from "react";

// Create a context for audio management
const AudioContext = createContext();

// Hook to use the audio context
export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};

// Audio Provider component
export const AudioProvider = ({ children }) => {
  const audioRefs = useRef({});

  // Preload sounds with 50% volume
  const preloadSound = (id, src) => {
    if (!audioRefs.current[id]) {
      const audio = new Audio(src);
      audio.preload = "auto";
      audio.volume = 0.5; // Set volume to 50%
      audioRefs.current[id] = audio;
      return audio;
    }
    return audioRefs.current[id];
  };

  // Play a sound
  const playSound = (id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      audio.currentTime = 0;
      audio
        .play()
        .catch((e) => console.error(`Failed to play sound ${id}:`, e));
    } else {
      console.warn(`Sound with id ${id} not found`);
    }
  };

  // Stop a sound
  const stopSound = (id) => {
    const audio = audioRefs.current[id];
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const value = {
    preloadSound,
    playSound,
    stopSound,
  };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};

export default AudioProvider;
