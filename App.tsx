
import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Compatibility from './components/Compatibility';
import WhyLove from './components/WhyLove';
import Timeline from './components/Timeline';
import Forgiveness from './components/Forgiveness';
import BackgroundMusic from './components/BackgroundMusic';
import FloatingAtmosphere from './components/FloatingAtmosphere';
import SurpriseVideo from './components/SurpriseVideo';
import FixedMessageBar from './components/FixedMessageBar';

declare const gsap: any;
declare const ScrollTrigger: any;

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [musicStarted, setMusicStarted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Removed automatic timeout to ensure user interaction for audio autoplay
  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 3500);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    if (!loading) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray('.reveal').forEach((elem: HTMLElement) => {
        gsap.fromTo(elem,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 92%',
            }
          }
        );
      });
    }
  }, [loading]);

  return (
    <div className="relative min-h-screen selection:bg-indigo-900 selection:text-white">
      {loading && <Preloader onFinish={() => setMusicStarted(true)} />}

      {!loading && (
        <>
          <BackgroundMusic isPlaying={musicStarted} />
          <FloatingAtmosphere />

          {showVideo && <SurpriseVideo onClose={() => setShowVideo(false)} />}

          <Hero onTimerEnd={() => setShowVideo(true)} />
          <Compatibility />
          <WhyLove />
          <Timeline />
          <Forgiveness />

          <FixedMessageBar />

          <footer className="py-32 bg-white/40 text-center border-t border-pink-100/50">
            <div className="max-w-2xl mx-auto px-6">
              <p className="text-indigo-950 text-2xl md:text-3xl font-black mb-4 italic">
                "كل سنة وإنتي منورة دنيتي، ومع بعض دايماً في كل خطوة وجاي أحلى بكتير.. بحبك."
              </p>
              <p className="text-indigo-400 text-sm tracking-[0.3em] font-bold uppercase">
                بكل حب - فبراير 2026
              </p>
            </div>
          </footer>
        </>
      )}

      {/* Background Ambience - Luxe Theme */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#fdf2f8]">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-[radial-gradient(circle_at_10%_20%,_#fce4ec_0%,_transparent_40%),radial-gradient(circle_at_90%_80%,_#f3e5f5_0%,_transparent_40%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-5"></div>
      </div>
    </div>
  );
};

export default App;
