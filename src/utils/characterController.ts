import { Character } from '../types/game';

const GRAVITY = 0.8;
const JUMP_FORCE = -15;
const GROUND_FRICTION = 0.8;

export const updateCharacter = (character: Character, canvas: HTMLCanvasElement) => {
  // Apply gravity
  character.velocityY += GRAVITY;
  
  // Update position
  character.y += character.velocityY;
  
  // Ground collision
  const groundY = canvas.height - character.height - 20;
  if (character.y > groundY) {
    character.y = groundY;
    character.velocityY *= GROUND_FRICTION;
    character.isJumping = false;
  }
};