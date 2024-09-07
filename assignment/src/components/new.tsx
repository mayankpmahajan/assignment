import React from 'react';

const GlassEffectGradient = () => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="absolute inset-0 bg-white opacity-20"></div>
      <div className="relative z-10 w-96 h-64 rounded-lg overflow-hidden">
        <div className="absolute inset-0 glass-gradient"></div>
        <div className="relative z-20 p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Glass Effect</h2>
          <p>This is a glass effect with a gradient fade.</p>
        </div>
      </div>
      <style jsx>{`
        .glass-gradient {
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0.2) 25%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          backdrop-filter: blur(10px);
        }
      `}</style>
    </div>
  );
};

export default GlassEffectGradient;