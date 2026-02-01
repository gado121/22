
import React from 'react';

interface SurpriseVideoProps {
  onClose: () => void;
}

const SurpriseVideo: React.FC<SurpriseVideoProps> = ({ onClose }) => {
  const VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"; 

  return (
    <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-xl animate-fade-in">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
      >
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(30,27,75,0.3)] border-2 border-indigo-900/30">
        <iframe 
          src={VIDEO_URL}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Surprise Birthday Video"
        />
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl md:text-5xl font-black luxury-gradient mb-4 italic">كل سنة وإنتي امولتي المنورة حياتي!</h2>
        <p className="text-indigo-400 text-xl font-bold uppercase tracking-widest">يا رب الفيديو يعجبك يا أغلى ما عندي</p>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SurpriseVideo;
