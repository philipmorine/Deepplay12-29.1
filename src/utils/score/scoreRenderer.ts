export const drawScore = (ctx: CanvasRenderingContext2D, score: number) => {
  ctx.save();
  
  // Set up score display style
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 3;
  ctx.font = 'bold 32px "Andale Mono"';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Draw score text with outline in center of screen
  const text = `Score: ${score}`;
  const x = ctx.canvas.width / 2;
  const y = 50; // Position from top
  
  ctx.strokeText(text, x, y);
  ctx.fillText(text, x, y);
  
  ctx.restore();
};