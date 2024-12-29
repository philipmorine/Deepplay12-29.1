export const drawFence = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  const fenceHeight = 120;
  const baseY = canvas.height - 140;
  const postSpacing = 60;
  const meshSize = 10; // Reduced from 20 to 10 for smaller boxes
  
  // Create glowing orange gradient for posts
  const postGradient = ctx.createLinearGradient(0, baseY, 0, baseY + fenceHeight);
  postGradient.addColorStop(0, '#FF6B00');
  postGradient.addColorStop(0.5, '#FF4500');
  postGradient.addColorStop(1, '#CC3300');

  // Create glowing effect for mesh
  const meshGradient = ctx.createLinearGradient(0, baseY, 0, baseY + fenceHeight);
  meshGradient.addColorStop(0, 'rgba(255, 107, 0, 0.6)');
  meshGradient.addColorStop(0.5, 'rgba(255, 69, 0, 0.4)');
  meshGradient.addColorStop(1, 'rgba(204, 51, 0, 0.6)');

  // Draw vertical posts
  const posts = Math.ceil(canvas.width / postSpacing) + 1;
  ctx.fillStyle = postGradient;
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 3;

  for (let i = 0; i < posts; i++) {
    const x = i * postSpacing;
    ctx.fillRect(x - 4, baseY, 8, fenceHeight);
    ctx.strokeRect(x - 4, baseY, 8, fenceHeight);
  }

  // Draw mesh pattern with thinner lines for smaller boxes
  ctx.strokeStyle = meshGradient;
  ctx.lineWidth = 1; // Reduced line width for cleaner appearance with smaller boxes

  // Horizontal lines
  const rows = Math.ceil(fenceHeight / meshSize);
  for (let i = 0; i <= rows; i++) {
    const y = baseY + (i * meshSize);
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Vertical lines for box pattern
  const columns = Math.ceil(canvas.width / meshSize);
  for (let i = 0; i <= columns; i++) {
    const x = i * meshSize;
    ctx.beginPath();
    ctx.moveTo(x, baseY);
    ctx.lineTo(x, baseY + fenceHeight);
    ctx.stroke();
  }

  // Add glow effect
  const glowGradient = ctx.createLinearGradient(0, baseY, 0, baseY + fenceHeight);
  glowGradient.addColorStop(0, 'rgba(255, 107, 0, 0.2)');
  glowGradient.addColorStop(0.5, 'rgba(255, 69, 0, 0.1)');
  glowGradient.addColorStop(1, 'rgba(204, 51, 0, 0.2)');

  ctx.fillStyle = glowGradient;
  ctx.fillRect(0, baseY, canvas.width, fenceHeight);
};