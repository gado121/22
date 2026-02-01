
import React, { useRef, useEffect, useState } from 'react';

interface BackgroundMusicProps {
  isPlaying: boolean;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ isPlaying }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [manualControl, setManualControl] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // INSTRUCTIONS: To change the music, replace the URL in the 'src' attribute below.
  // You can use a link to an MP3 file or any direct audio stream.
  const MUSIC_URL = "/music.mp3"; 

  useEffect(() => {
    if (isPlaying && audioRef.current && !manualControl) {
      audioRef.current.play().catch(e => console.log("Auto-play blocked, waiting for interaction", e));
      setIsAudioPlaying(true);
    }
  }, [isPlaying, manualControl]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
      setManualControl(true);
    }
  };

  return (
    <div className="fixed top-6 left-6 z-[110]">
      <button 
        onClick={toggleMusic}
        className="w-12 h-12 glass rounded-full flex items-center justify-center text-[#d4af37] hover:scale-110 transition-transform shadow-lg border border-[#d4af37]/40"
        title={isAudioPlaying ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
      >
        {isAudioPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
      <audio ref={audioRef} src={MUSIC_URL} loop />
    </div>
  );
};

export default BackgroundMusic;
