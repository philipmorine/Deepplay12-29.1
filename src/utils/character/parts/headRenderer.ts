import { Character } from '../../../types/game';

export const drawUnicornHead = (ctx: CanvasRenderingContext2D, character: Character) => {
  const centerX = character.x + (character.width * 0.7);
  const headY = character.y + character.height * 0.3;
  
  // Draw head
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.ellipse(
    centerX,
    headY,
    character.width * 0.2,
    character.height * 0.15,
    -0.3,
    0,
    Math.PI * 2
  );
  ctx.fill();
  
  // Draw horn
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(centerX + 5, headY - 10);
  ctx.lineTo(centerX + 15, headY - 35);
  ctx.stroke();
};