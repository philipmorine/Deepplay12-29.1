import { Character, GameState } from '../types/game';
import { drawSky } from './background/skyRenderer';
import { drawMountains } from './background/mountainRenderer';
import { drawFence } from './background/fenceRenderer';
import { drawGround } from './background/groundRenderer';
import { drawCharacter } from './character/characterRenderer';
import { drawObstacle } from './obstacles/obstacleRenderer';
import { drawScore } from './score/scoreRenderer';

export const drawGame = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  character: Character,
  gameState: GameState
) => {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw background layers in order
  drawSky(ctx, canvas);
  drawMountains(ctx, canvas);
  drawFence(ctx, canvas);
  drawGround(ctx, canvas);
  
  // Draw game elements
  gameState.obstacles.forEach(obstacle => {
    drawObstacle(ctx, obstacle);
  });
  
  drawCharacter(ctx, character);
  drawScore(ctx, gameState.score);
};