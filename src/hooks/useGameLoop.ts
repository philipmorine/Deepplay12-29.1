import { RefObject, useCallback } from 'react';
import { Character, GameState } from '../types/game';
import { updateCharacter } from '../utils/characterController';
import { updateObstacles } from '../utils/obstacles/obstacleManager';
import { updateScore } from '../utils/score/scoreManager';
import { drawGame } from '../utils/gameRenderer';

export const useGameLoop = (
  canvasRef: RefObject<HTMLCanvasElement>,
  characterRef: RefObject<Character>,
  gameStateRef: RefObject<GameState>
) => {
  let animationFrameId: number;

  const loop = useCallback(() => {
    const canvas = canvasRef.current;
    const character = characterRef.current;
    const gameState = gameStateRef.current;
    
    if (!canvas || !character || !gameState) {
      console.warn('Missing required refs');
      return;
    }
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('No canvas context');
      return;
    }

    // Update game state
    updateCharacter(character, canvas);
    updateObstacles(gameState, canvas);
    updateScore(gameState, character);

    // Render game
    drawGame(ctx, canvas, character, gameState);

    animationFrameId = requestAnimationFrame(loop);
  }, [canvasRef, characterRef, gameStateRef]);

  const start = useCallback(() => {
    if (animationFrameId) return;
    animationFrameId = requestAnimationFrame(loop);
  }, [loop]);

  const stop = useCallback(() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = 0;
    }
  }, []);

  return { start, stop };
};