export const drawSky = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.7);
  gradient.addColorStop(0, '#87CEEB');    // Light blue sky
  gradient.addColorStop(0.5, '#E6B89C');  // Sunset pink
  gradient.addColorStop(1, '#9B7653');    // Desert brown
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};