
import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';

interface HeroProps {
  onTimerEnd: () => void;
}

const Hero: React.FC<HeroProps> = ({ onTimerEnd }) => {
  const targetDate = new Date('2026-02-03T00:00:00+02:00').getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff <= 0) {
        if (!isFinished) { 
          setIsFinished(true); 
          onTimerEnd(); // يفتح الفيديو تلقائياً فور انتهاء الوقت
        }
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate, isFinished, onTimerEnd]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-6 py-20">
      <div className="z-10 text-center max-w-4xl w-full space-y-6 md:space-y-12">
        <div className="reveal h-1 w-16 md:w-24 bg-indigo-900/20 mx-auto rounded-full"></div>
        
        <h1 className="text-3xl md:text-7xl lg:text-8xl font-black leading-tight reveal px-2">
          <span className="block mb-2 text-indigo-950">فكرت ولاقيت ان..</span>
          <span className="luxury-gradient italic">انتي اختياري الاول والاخير.</span>
        </h1>

        <div className="max-w-2xl mx-auto reveal px-2">
          <p className="text-xl md:text-4xl text-indigo-900/70 font-bold leading-relaxed">
             انتي هدية ربنا ليا يا امولتي ❤️
          </p>
        </div>

        {!isFinished ? (
          <div className="mt-8 reveal flex flex-col items-center gap-6">
            <p className="text-lg md:text-2xl font-black text-indigo-400 animate-pulse tracking-widest px-4">
              استني في مفاجأة مستنياكي أول ما الوقت يخلص
            </p>
            <div className="glass-card p-6 md:p-10 rounded-[2.5rem] md:rounded-[4rem] inline-flex flex-wrap gap-4 md:gap-8 justify-center items-center shadow-xl">
              <TimeUnit value={timeLeft.days} label="يوم" />
              <div className="h-10 md:h-16 w-[1px] bg-indigo-100 hidden sm:block"></div>
              <TimeUnit value={timeLeft.hours} label="ساعة" />
              <div className="h-10 md:h-16 w-[1px] bg-indigo-100 hidden sm:block"></div>
              <TimeUnit value={timeLeft.minutes} label="دقيقة" />
              <div className="h-10 md:h-16 w-[1px] bg-indigo-100 hidden sm:block"></div>
              <TimeUnit value={timeLeft.seconds} label="ثانية" />
            </div>
          </div>
        ) : (
          <div className="reveal flex flex-col items-center gap-6 mt-8">
            <p className="text-2xl md:text-4xl font-black text-indigo-950">المفاجأة بدأت!</p>
            <button 
              onClick={onTimerEnd}
              className="px-10 md:px-20 py-5 md:py-8 bg-indigo-950 text-white text-lg md:text-2xl font-black rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              افتحي الفيديو من هنا
            </button>
          </div>
        )}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <svg className="w-6 h-6 text-indigo-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center min-w-[50px] md:min-w-[80px]">
    <span className="text-2xl md:text-6xl font-black text-indigo-950 tabular-nums">
      {value.toString().padStart(2, '0')}
    </span>
    <span className="text-indigo-400 text-[10px] md:text-sm mt-1 font-bold uppercase tracking-tighter md:tracking-widest">{label}</span>
  </div>
);

export default Hero;
