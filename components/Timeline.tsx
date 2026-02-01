
import React, { useEffect, useRef } from 'react';

declare const gsap: any;
declare const ScrollTrigger: any;

const Timeline: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineRef.current) {
      gsap.to(lineRef.current, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '#timeline-container',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section id="timeline-container" className="py-24 relative overflow-hidden bg-white/40">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <h2 className="text-5xl md:text-7xl font-black mb-6 luxury-gradient">حكايتنا الحلوة</h2>
          <p className="text-xl md:text-2xl text-indigo-900/60 font-bold">كل لحظة معاكي كانت بداية جديدة لعمري بجد.</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-full bg-indigo-100 rounded-full"></div>
          <div ref={lineRef} className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-0 bg-indigo-900 rounded-full z-10 shadow-[0_0_15px_rgba(30,27,75,0.3)]"></div>

          <div className="space-y-48">
            <TimelineItem 
              side="right" 
              date="أول مرة شوفنا بعض" 
              title="يوم ما الدنيا ضحكتلي"
              description="اليوم ده مكنش عادي، كان بداية أحلى حاجة حصلت في حياتي كلها.. لقيتك لقيت روحي."
            />
            <TimelineItem 
              side="left" 
              date="أول ضحكة من قلبك" 
              title="ضحكتك هي اللي وقعتني في حبها"
              description="ضحكتك دي كانت العقد اللي وقعته مع السعادة.. قررت وقتها إني مش هخليكي تبطلي تضحكي أبداً."
            />
            <TimelineItem 
              side="right" 
              date="الجاي أحلى" 
              title="بيتنا اللي بنحلم بيه"
              description="بكرة سوا، في بيتنا الصغير اللي هيشيل كل تفاصيلنا.. كل ركن فيه هيحكي قصتنا وهنكون أسعد اتنين في الدنيا."
              highlight
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem: React.FC<{ side: 'left' | 'right'; date: string; title: string; description: string; highlight?: boolean }> = ({ side, date, title, description, highlight }) => (
  <div className={`flex items-center w-full reveal ${side === 'right' ? 'flex-row-reverse' : ''}`}>
    <div className="w-1/2"></div>
    <div className="relative z-20">
      <div className={`w-5 h-5 rounded-full border-[3px] border-indigo-900 bg-white shadow-[0_0_15px_rgba(30,27,75,0.2)] ${highlight ? 'scale-150 animate-pulse' : ''}`}></div>
    </div>
    <div className={`w-1/2 p-6 md:px-12 ${side === 'right' ? 'text-right pr-8 md:pr-12' : 'text-left pl-8 md:pl-12'}`}>
      <span className="text-indigo-900 text-sm md:text-base font-black tracking-widest bg-indigo-50 px-4 py-1 rounded-full">{date}</span>
      <h4 className="text-2xl md:text-4xl font-black mt-4 mb-4 text-indigo-950">{title}</h4>
      <p className="text-indigo-900/70 text-lg md:text-xl leading-relaxed font-bold">
        {description}
      </p>
    </div>
  </div>
);

export default Timeline;
