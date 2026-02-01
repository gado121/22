
import React from 'react';

const WhyLove: React.FC = () => {
  const reasons = [
    {
      num: "01",
      text: "عشان لو كام ساعة عدوا عليا من غير ما أسمع صوتك وأطمن عليكي.. بجد ببقى هتجنن ومببقاش على بعضي.",
      color: "bg-indigo-50"
    },
    {
      num: "02",
      text: "عشان لما بكون متضايق أو مخنوق، كلمتين بس منك بيهدوني وبيغيروا مودي 180 درجة.. إنتي الأمان بتاعي.",
      color: "bg-pink-50"
    },
    {
      num: "03",
      text: "عشان عمري ما شفت حد ضحكته أحلى منك، ولا هشوف.. ضحكتك دي هي اللي بتنورلي يومي فعلاً.",
      color: "bg-purple-50"
    },
    {
      num: "04",
      text: "عشان كل ما أفكر في المواصفات اللي بتمناها في اللي هكمل حياتي معاها، بتطلعي إنتي بكل صفاتك وحنيتك.",
      color: "bg-rose-50"
    },
    {
      num: "05",
      text: "وفي حاجات كتير تانية الوقت مش هيكفي أقولها.. بس الخلاصة إنك إنتي الدنيا والناس كلها في عيني.",
      color: "bg-violet-50"
    }
  ];

  return (
    <section className="py-32 px-6 relative bg-white/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 reveal">
          <h2 className="text-5xl md:text-8xl font-black mb-6 text-indigo-950">ليه بحبك؟</h2>
          <div className="w-24 h-1 bg-indigo-900 mx-auto rounded-full mb-10"></div>
          <p className="text-2xl md:text-4xl text-indigo-900/60 font-bold italic italic">"سألت نفسي السؤال ده كتير.. والإجابة كانت دايماً إنتي"</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`p-12 rounded-[4rem] border border-indigo-100 ${reason.color} transition-all duration-500 reveal group hover:shadow-xl`}
            >
              <div className="flex items-start gap-8">
                <span className="text-4xl font-black text-indigo-200 group-hover:text-indigo-400 transition-colors">{reason.num}</span>
                <p className="text-2xl md:text-3xl text-indigo-950 leading-relaxed font-bold">
                  {reason.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLove;
