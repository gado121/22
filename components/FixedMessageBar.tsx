
import React, { useState } from 'react';

const FixedMessageBar: React.FC = () => {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setMessage("");
    }
  };

  return (
    <div className="fixed-bottom-bar reveal">
      <div className="glass-card rounded-full p-2 flex items-center gap-3 border-2 border-pink-200/50">
        <input 
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={sent ? "رسالتك وصلت لقلبي" : "اكتبيلي كلمة هنا تفضل في قلبي..."}
          className="flex-1 bg-transparent px-6 py-3 text-lg outline-none text-indigo-950 font-bold placeholder:text-indigo-400/60"
        />
        <button 
          onClick={handleSend}
          className={`px-8 py-3 rounded-full font-black transition-all duration-500 ${sent ? 'bg-green-500 text-white' : 'bg-indigo-900 text-white hover:bg-indigo-800'}`}
        >
          {sent ? "تم" : "إرسال"}
        </button>
      </div>
    </div>
  );
};

export default FixedMessageBar;
