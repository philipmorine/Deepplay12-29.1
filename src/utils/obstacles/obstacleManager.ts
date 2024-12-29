import { Obstacle, GameState } from '../../types/game';
import { ObstacleType, OBSTACLE_TEMPLATES } from './obstacleTypes';

const MIN_OBSTACLE_DISTANCE = 300;
const OBSTACLE_SPAWN_CHANCE = 0.02;

const OBSTACLE_TYPES: ObstacleType[] = ['cactus', 'rock', 'tent', 'artCar'];

const getRandomObstacleType = (): ObstacleType => {
  return OBSTACLE_TYPES[Math.floor(Math.random() * OBSTACLE_TYPES.length)];
};

export const createObstacle = (canvas: HTMLCanvasElement, gameSpeed: number): Obstacle => {
  const type = getRandomObstacleType();
  const template = OBSTACLE_TEMPLATES[type];
  
  return {
    x: canvas.width,
    y: canvas.height - 60,
    width: template.minWidth + Math.random() * (template.maxWidth - template.minWidth),
    height: template.minHeight + Math.random() * (template.maxHeight - template.minHeight),
    speed: gameSpeed,
    type
  };
};

export const updateObstacles = (gameState: GameState, canvas: HTMLCanvasElement) => {
  const currentTime = Date.now();
  
  if (currentTime - gameState.lastObstacleTime > MIN_OBSTACLE_DISTANCE / gameState.gameSpeed) {
    if (Math.random() < OBSTACLE_SPAWN_CHANCE) {
      gameState.obstacles.push(createObstacle(canvas, gameState.gameSpeed));
      gameState.lastObstacleTime = currentTime;
    }
  }

  gameState.obstacles.forEach(obstacle => {
    obstacle.x -= obstacle.speed;
  });

  gameState.obstacles = gameState.obstacles.filter(obstacle => obstacle.x > -obstacle.width);
};