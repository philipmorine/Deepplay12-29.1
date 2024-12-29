import React from 'react';

const NylonFence: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-orange-500/20 to-transparent">
      <div className="absolute bottom-0 left-0 right-0 h-32">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 w-1 bg-orange-400/30 transform"
            style={{
              left: `${i * 5}%`,
              height: `${Math.sin(i * 0.5) * 20 + 100}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NylonFence;