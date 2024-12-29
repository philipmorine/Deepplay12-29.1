import React from 'react';
import Game from '../components/game/Game';
import Header from '../components/Header';

const GamePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20">
        <div className="max-w-2xl mx-auto px-4 mb-8">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-orange-500/20">
            <h2 className="text-xl font-bold mb-2">How to Play</h2>
            <p className="text-gray-300">
              To play the game click the burning man dude, each time you clear an obstacle your score goes UP.
            </p>
          </div>
        </div>
        <Game />
      </div>
    </div>
  );
};

export default GamePage;