
import React, { useEffect, useState } from 'react';

const FloatingAtmosphere: React.FC = () => {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      size: 5 + Math.random() * 15,
      opacity: 0.1 + Math.random() * 0.3,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute bottom-[-10%] rounded-full bg-indigo-400"
          style={{
            left: `${el.left}%`,
            width: `${el.size}px`,
            height: `${el.size}px`,
            animation: `float-up-simple ${el.duration}s linear infinite`,
            animationDelay: `${el.delay}s`,
            opacity: el.opacity,
          }}
        />
      ))}
      <style>{`
        @keyframes float-up-simple {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-110vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default FloatingAtmosphere;
