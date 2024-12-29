import { Obstacle } from '../../types/game';
import { ObstacleType } from './obstacleTypes';

const drawCactus = (ctx: CanvasRenderingContext2D, obstacle: Obstacle) => {
  ctx.fillStyle = '#2D5A27';
  ctx.fillRect(
    obstacle.x,
    obstacle.y - obstacle.height,
    obstacle.width,
    obstacle.height
  );
  
  // Add spikes
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const x = obstacle.x + (obstacle.width * (i + 1)) / 6;
    const height = obstacle.height * 0.3;
    ctx.moveTo(x, obstacle.y - obstacle.height * 0.7);
    ctx.lineTo(x - 5, obstacle.y - obstacle.height * 0.7 - height);
    ctx.lineTo(x + 5, obstacle.y - obstacle.height * 0.7);
  }
  ctx.fillStyle = '#1A472A';
  ctx.fill();
};

const drawRock = (ctx: CanvasRenderingContext2D, obstacle: Obstacle) => {
  ctx.fillStyle = '#8B7355';
  ctx.beginPath();
  ctx.moveTo(obstacle.x, obstacle.y);
  ctx.lineTo(obstacle.x + obstacle.width / 2, obstacle.y - obstacle.height);
  ctx.lineTo(obstacle.x + obstacle.width, obstacle.y);
  ctx.closePath();
  ctx.fill();
  
  // Add texture
  ctx.strokeStyle = '#6B4423';
  ctx.lineWidth = 2;
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(obstacle.x + (obstacle.width * i / 3), obstacle.y - (obstacle.height * 0.3));
    ctx.lineTo(obstacle.x + (obstacle.width * (i + 1) / 3), obstacle.y - (obstacle.height * 0.6));
    ctx.stroke();
  }
};

const drawTent = (ctx: CanvasRenderingContext2D, obstacle: Obstacle) => {
  ctx.fillStyle = '#FF6B00';
  
  // Tent body
  ctx.beginPath();
  ctx.moveTo(obstacle.x, obstacle.y);
  ctx.lineTo(obstacle.x + obstacle.width / 2, obstacle.y - obstacle.height);
  ctx.lineTo(obstacle.x + obstacle.width, obstacle.y);
  ctx.closePath();
  ctx.fill();
  
  // Entrance
  ctx.fillStyle = '#000000';
  const doorWidth = obstacle.width * 0.3;
  const doorHeight = obstacle.height * 0.4;
  ctx.fillRect(
    obstacle.x + (obstacle.width - doorWidth) / 2,
    obstacle.y - doorHeight,
    doorWidth,
    doorHeight
  );
};

const drawArtCar = (ctx: CanvasRenderingContext2D, obstacle: Obstacle) => {
  ctx.fillStyle = '#E6B89C';
  
  // Car body
  ctx.fillRect(
    obstacle.x,
    obstacle.y - obstacle.height * 0.6,
    obstacle.width,
    obstacle.height * 0.6
  );
  
  // Top part
  ctx.beginPath();
  ctx.moveTo(obstacle.x + obstacle.width * 0.2, obstacle.y - obstacle.height * 0.6);
  ctx.lineTo(obstacle.x + obstacle.width * 0.5, obstacle.y - obstacle.height);
  ctx.lineTo(obstacle.x + obstacle.width * 0.8, obstacle.y - obstacle.height * 0.6);
  ctx.closePath();
  ctx.fill();
  
  // Wheels
  ctx.fillStyle = '#000000';
  const wheelSize = obstacle.height * 0.2;
  ctx.beginPath();
  ctx.arc(obstacle.x + wheelSize, obstacle.y, wheelSize, 0, Math.PI * 2);
  ctx.arc(obstacle.x + obstacle.width - wheelSize, obstacle.y, wheelSize, 0, Math.PI * 2);
  ctx.fill();
};

export const drawObstacle = (ctx: CanvasRenderingContext2D, obstacle: Obstacle) => {
  switch (obstacle.type as ObstacleType) {
    case 'cactus':
      drawCactus(ctx, obstacle);
      break;
    case 'rock':
      drawRock(ctx, obstacle);
      break;
    case 'tent':
      drawTent(ctx, obstacle);
      break;
    case 'artCar':
      drawArtCar(ctx, obstacle);
      break;
  }
};