export type ObstacleType = 'cactus' | 'rock' | 'tent' | 'artCar';

interface ObstacleTemplate {
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
  color: string;
}

export const OBSTACLE_TEMPLATES: Record<ObstacleType, ObstacleTemplate> = {
  cactus: {
    minWidth: 30,
    maxWidth: 50,
    minHeight: 60,
    maxHeight: 100,
    color: '#2D5A27'
  },
  rock: {
    minWidth: 40,
    maxWidth: 70,
    minHeight: 30,
    maxHeight: 50,
    color: '#8B7355'
  },
  tent: {
    minWidth: 80,
    maxWidth: 120,
    minHeight: 70,
    maxHeight: 90,
    color: '#FF6B00'
  },
  artCar: {
    minWidth: 100,
    maxWidth: 150,
    minHeight: 50,
    maxHeight: 80,
    color: '#E6B89C'
  }
};