
import React, { useState } from 'react';

declare const confetti: any;

const Forgiveness: React.FC = () => {
  const [waitMessage, setWaitMessage] = useState("محتاجة وقت أفكر");
  const [accepted, setAccepted] = useState(false);

  const handleLoveClick = () => {
    setAccepted(true);
    confetti({
      particleCount: 250,
      spread: 120,
      origin: { y: 0.7 },
      colors: ['#1e1b4b', '#be185d', '#c5a059', '#fce4ec']
    });
  };

  return (
    <section className="py-24 md:py-40 px-4 md:px-6 relative bg-indigo-50/50">
      <div className="max-w-4xl mx-auto text-center reveal">
        <div className="mb-12 md:mb-24">
          <h2 className="text-4xl md:text-8xl font-black text-indigo-950 mb-8 md:mb-12">أنتِ كُل شيء.</h2>
          <p className="text-2xl md:text-5xl font-bold leading-[1.4] md:leading-[1.6] text-indigo-900 px-2">
            "إنتي حرفياً أحلى حاجة في دنيتي.. وأنا هعيش عمري كله عشان بس تبقي مبسوطة."
          </p>
          <div className="mt-8 md:mt-16 p-8 md:p-14 glass-card rounded-[3rem] md:rounded-[5rem] border-indigo-200">
            <p className="text-xl md:text-4xl text-indigo-950 font-black leading-relaxed italic">
              "عارفة يا حبيبتي.. لو فكرت مليون مرة، هرجع وأختارك إنتي.. إنتي النص التاني اللي كملني بجد."
            </p>
          </div>
        </div>

        {!accepted ? (
          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 justify-center items-center">
            <button 
              onClick={handleLoveClick}
              className="w-full sm:w-auto px-12 md:px-24 py-6 md:py-10 bg-indigo-950 text-white text-xl md:text-3xl font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              بحبك يالولو
            </button>
            <button 
              onClick={() => setWaitMessage("هستناكي العمر كله")}
              className="w-full sm:w-auto px-8 md:px-20 py-6 md:py-10 border-2 md:border-4 border-indigo-200 text-indigo-900 text-lg md:text-2xl font-black rounded-full hover:bg-white transition-all"
            >
              {waitMessage}
            </button>
          </div>
        ) : (
          <div className="animate-celebrate py-10 space-y-6">
            <h3 className="text-5xl md:text-8xl font-black luxury-gradient leading-tight">
              أنا حرفياً بموت فيكي..
            </h3>
            <p className="text-2xl md:text-5xl text-indigo-900 font-bold leading-relaxed max-w-3xl mx-auto px-4">
              وعد مني، هفضل السند والأمان والضهر ليكي طول العمر. ربنا يخليكي ليا يا أجمل نعمة في حياتي، يا حياتي كلها. ❤️
            </p>
            <div className="pt-8">
              <span className="inline-block animate-bounce text-6xl">💍</span>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes celebrate {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-celebrate {
          animation: celebrate 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </section>
  );
};

export default Forgiveness;
