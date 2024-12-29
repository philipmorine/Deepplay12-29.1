import { Character } from '../../../types/game';

export const drawUnicornBody = (ctx: CanvasRenderingContext2D, character: Character) => {
  const centerX = character.x + (character.width / 2);
  const bodyY = character.y + character.height * 0.4;
  
  // Draw main body
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.ellipse(
    centerX,
    bodyY,
    character.width * 0.4,
    character.height * 0.25,
    0,
    0,
    Math.PI * 2
  );
  ctx.fill();
};