import React from 'react';
import NylonFence from './NylonFence';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-orange-900/30" />
      
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-pulse">
          Deep Playa Simulator
        </h1>
      </div>

      <NylonFence />
    </div>
  );
};

export default Hero;