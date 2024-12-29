export interface Character {
  x: number;
  y: number;
  width: number;
  height: number;
  velocityY: number;
  isJumping: boolean;
}

export interface Obstacle {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  type: string;
  cleared?: boolean;
  wasJumpedOver?: boolean;
}

export interface GameState {
  obstacles: Obstacle[];
  lastObstacleTime: number;
  gameSpeed: number;
  score: number;
}