import React, { useState, useEffect } from 'react';

export default function RouteLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) {
          clearInterval(interval);
          return 98;
        }
        // Increment smoothly: faster at first, then slows down
        const remaining = 100 - prev;
        const diff = Math.max(1, Math.floor(remaining * 0.15));
        return prev + diff;
      });
    }, 80);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      {/* Background glow effect */}
      <div className="absolute w-[400px] h-[400px] bg-[#9b4dff]/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      {/* Centered loader container */}
      <div className="flex flex-col items-center w-full max-w-xs px-8 z-10">
        
        {/* Progress text percentage display */}
        <div className="mb-4 text-center">
          <span className="font-['Space_Grotesk'] text-4xl font-extrabold tracking-tight text-white/90">
            {progress}%
          </span>
        </div>

        {/* Horizontal Progress Bar */}
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden relative shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]">
          <div 
            className="h-full bg-gradient-to-r from-[#5a74ff] via-[#9b4dff] to-[#4cc3ff] rounded-full transition-all duration-300 ease-out shadow-[0_0_12px_rgba(155,77,255,0.8)]" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Subtext */}
        <span className="font-['Space_Grotesk'] text-[10px] font-extrabold tracking-[0.4em] uppercase text-white/40 mt-4 animate-pulse">
          Loading Fidarix
        </span>
      </div>
    </div>
  );
}

