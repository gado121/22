
import React, { useState } from 'react';

interface PreloaderProps {
  onFinish?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  const [clicked, setClicked] = useState(false);

  const handleStart = () => {
    setClicked(true);
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 1000);
  };

  return (
    <div className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-1000 ${clicked ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-900 rounded-full animate-spin mb-10"></div>
      <p className="text-indigo-950 text-2xl font-black tracking-[0.4em] uppercase animate-pulse mb-8">
        جاري تحميل المشاعر
      </p>

      {!clicked && (
        <button
          onClick={handleStart}
          className="px-8 py-3 bg-indigo-900 text-white rounded-full font-bold shadow-lg hover:bg-indigo-800 transition-all transform hover:scale-105"
        >
          اضغط للبدء
        </button>
      )}
    </div>
  );
};

export default Preloader;
