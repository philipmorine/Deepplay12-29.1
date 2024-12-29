import { Character } from '../../../types/game';

export const drawUnicornLegs = (ctx: CanvasRenderingContext2D, character: Character) => {
  const centerX = character.x + (character.width / 2);
  const bodyY = character.y + character.height * 0.4;
  
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 4;
  
  // Draw legs
  const legPositions = [0.3, 0.5, 0.7, 0.9];
  legPositions.forEach(pos => {
    ctx.beginPath();
    ctx.moveTo(
      centerX - character.width * 0.4 + character.width * pos,
      bodyY
    );
    ctx.lineTo(
      centerX - character.width * 0.4 + character.width * pos,
      character.y + character.height
    );
    ctx.stroke();
  });
};