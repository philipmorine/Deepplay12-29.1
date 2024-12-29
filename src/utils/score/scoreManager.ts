import { Character, Obstacle, GameState } from '../../types/game';

const isJumpingOver = (character: Character, obstacle: Obstacle): boolean => {
  const characterBottom = character.y + character.height;
  const obstacleTop = obstacle.y - obstacle.height;
  
  // Check if character is above the obstacle while passing over it
  return character.isJumping && 
         characterBottom < obstacleTop &&
         character.x < obstacle.x + obstacle.width &&
         character.x + character.width > obstacle.x;
};

export const checkObstacleClear = (character: Character, obstacle: Obstacle): boolean => {
  // Only count obstacles that were jumped over
  return !obstacle.cleared && 
         character.x > obstacle.x + obstacle.width &&
         obstacle.wasJumpedOver;
};

export const updateScore = (gameState: GameState, character: Character) => {
  gameState.obstacles.forEach(obstacle => {
    // Track if character is jumping over the obstacle
    if (!obstacle.wasJumpedOver && isJumpingOver(character, obstacle)) {
      obstacle.wasJumpedOver = true;
    }
    
    // Update score only if obstacle was properly jumped over
    if (!obstacle.cleared && checkObstacleClear(character, obstacle)) {
      obstacle.cleared = true;
      gameState.score += 1;
    }
  });
};