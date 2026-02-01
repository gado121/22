
import React from 'react';

const Compatibility: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-6xl font-black mb-4 luxury-gradient">إحنا لبعض.. وعارفة ليه؟</h2>
          <p className="mt-4 text-lg md:text-3xl text-indigo-900 font-black max-w-3xl mx-auto leading-relaxed italic px-2">
            "إحنا أكتر اتنين في الدنيا دي شبه بعض ولايقين لبعض بجد."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <GlassCard 
            icon={<HeartIcon />} 
            title="حاسس بكل اللي فيكي" 
            description="كل اللي إنتي حاسة بيه ومخوفك أنا مقدره وشايفه، وده طبيعي جداً.. أنا الأمان اللي هيفضل جنبك دايماً."
            bg="bg-pink-50"
          />
          <GlassCard 
            icon={<InfinityIcon />} 
            title="توأم روحي بجد" 
            description="إحنا مراية بعض.. تفاصيلنا، ضحكتنا، وحتى خوفنا. مفيش حد هيفهمك ويستحملك ويحبك قد ما أنا بعمل.. وهعمل المستحيل عشان نفضل سوا."
            bg="bg-violet-50"
          />
          <GlassCard 
            icon={<SunIcon />} 
            title="عايش عشانك" 
            description="هعيش عمري كله عشان بس أشوفك مبسوطة ومرتاحة.. مفيش حاجة تهمّني غير إنك تكوني مطمنة وجنبي."
            bg="bg-amber-50"
          />
        </div>
      </div>
    </section>
  );
};

const GlassCard: React.FC<{ icon: React.ReactNode; title: string; description: string; bg: string }> = ({ icon, title, description, bg }) => (
  <div className={`glass group p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-white hover:border-pink-300 transition-all duration-700 hover:-translate-y-2 reveal ${bg}`}>
    <div className="w-12 h-12 md:w-20 md:h-20 bg-white rounded-[1rem] md:rounded-[2rem] flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 transition-transform shadow-sm">
      {icon}
    </div>
    <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-indigo-950 group-hover:text-pink-600 transition-colors">{title}</h3>
    <p className="text-indigo-900/70 leading-relaxed text-base md:text-lg font-bold">
      {description}
    </p>
  </div>
);

const HeartIcon = () => (
  <svg className="w-6 h-6 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const InfinityIcon = () => (
  <svg className="w-6 h-6 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h8a4 4 0 010 8H8a4 4 0 010-8zm0 0l8 8" />
  </svg>
);

const SunIcon = () => (
  <svg className="w-6 h-6 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
  </svg>
);

export default Compatibility;
