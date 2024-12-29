import { Character } from '../../../types/game';

export const drawUnicornMane = (ctx: CanvasRenderingContext2D, character: Character) => {
  const centerX = character.x + (character.width * 0.6);
  const maneY = character.y + character.height * 0.2;
  
  // Draw flowing mane
  const gradient = ctx.createLinearGradient(
    centerX - 20,
    maneY - 20,
    centerX + 20,
    maneY + 20
  );
  gradient.addColorStop(0, '#FF69B4');
  gradient.addColorStop(1, '#FFB6C1');
  
  ctx.fillStyle = gradient;
  
  // Create wavy mane effect
  ctx.beginPath();
  ctx.moveTo(centerX - 20, maneY);
  
  for (let i = 0; i < 5; i++) {
    const x = centerX - 20 + (i * 10);
    const y = maneY + (Math.sin(i) * 10);
    ctx.quadraticCurveTo(
      x + 5,
      y - 10,
      x + 10,
      y
    );
  }
  
  ctx.lineTo(centerX + 20, maneY + 30);
  ctx.lineTo(centerX - 20, maneY + 30);
  ctx.closePath();
  ctx.fill();
};