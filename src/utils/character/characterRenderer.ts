import { Character } from '../../types/game';

export const drawCharacter = (ctx: CanvasRenderingContext2D, character: Character) => {
  ctx.save();
  
  const centerX = character.x + character.width / 2;
  const centerY = character.y + character.height / 2;
  const scale = character.width / 50; // Scale factor based on character width
  
  // Set up style for burning man - changed to black
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 3 * scale;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  // Draw legs (inverted V)
  ctx.beginPath();
  ctx.moveTo(centerX - 15 * scale, character.y + character.height);
  ctx.lineTo(centerX, character.y + character.height - 35 * scale);
  ctx.lineTo(centerX + 15 * scale, character.y + character.height);
  ctx.stroke();
  
  // Draw torso
  ctx.beginPath();
  ctx.moveTo(centerX, character.y + character.height - 35 * scale);
  ctx.lineTo(centerX, character.y + 20 * scale);
  ctx.stroke();
  
  // Draw arms (upward V)
  ctx.beginPath();
  ctx.moveTo(centerX - 20 * scale, character.y + 40 * scale);
  ctx.lineTo(centerX, character.y + 20 * scale);
  ctx.lineTo(centerX + 20 * scale, character.y + 40 * scale);
  ctx.stroke();
  
  // Draw head (diamond shape)
  ctx.beginPath();
  ctx.moveTo(centerX, character.y);
  ctx.lineTo(centerX + 8 * scale, character.y + 10 * scale);
  ctx.lineTo(centerX, character.y + 20 * scale);
  ctx.lineTo(centerX - 8 * scale, character.y + 10 * scale);
  ctx.closePath();
  ctx.stroke();
  
  // Fill the shapes in black
  ctx.fillStyle = '#000000';
  ctx.fill();
  
  ctx.restore();
}