import React, { useEffect, useRef } from 'react';
import { useGameLoop } from '../../hooks/useGameLoop';
import { useCharacterControls } from '../../hooks/useCharacterControls';
import { Character, GameState } from '../../types/game';
import { initializeMountains } from '../../utils/background/mountainRenderer';

const Game: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const characterRef = useRef<Character>({
    x: 0,
    y: 0,
    width: 50,
    height: 80,
    velocityY: 0,
    isJumping: false,
  });
  
  const gameStateRef = useRef<GameState>({
    obstacles: [],
    lastObstacleTime: 0,
    gameSpeed: 5,
    score: 0
  });

  const { start, stop } = useGameLoop(canvasRef, characterRef, gameStateRef);
  const { handleClick } = useCharacterControls(characterRef);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - 160; // Account for header and instructions
      
      initializeMountains(canvas);
      
      const character = characterRef.current;
      character.x = canvas.width / 2 - character.width / 2;
      character.y = canvas.height - character.height - 20;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    start();
    return () => {
      stop();
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [start, stop]);

  const handleTouch = (e: React.TouchEvent) => {
    // Prevent default only for the game interaction
    if (e.cancelable) {
      e.preventDefault();
    }
    handleClick();
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto px-4 mb-8">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-orange-500/20">
          <h2 className="text-xl font-bold mb-2">How to Play</h2>
          <p className="text-gray-300">
            Click the man, clear obstacles, score goes up.

          </p>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        onClick={handleClick}
        onTouchStart={handleTouch}
        className="w-full"
        style={{ touchAction: 'pan-x pan-y' }}
      />
    </div>
  );
};

export default Game;