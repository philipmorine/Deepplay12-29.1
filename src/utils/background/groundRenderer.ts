export const drawGround = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  // Main ground
  const groundGradient = ctx.createLinearGradient(0, canvas.height - 100, 0, canvas.height);
  groundGradient.addColorStop(0, '#DAA06D');  // Lighter sand
  groundGradient.addColorStop(1, '#C8916D');  // Darker sand
  
  ctx.fillStyle = groundGradient;
  ctx.fillRect(0, canvas.height - 100, canvas.width, 100);
  
  // Draw fixed sand dunes
  drawSandDunes(ctx, canvas);
};

const drawSandDunes = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  ctx.fillStyle = '#B8865D';
  
  // Create fixed dune positions
  const dunes = [
    { x: 100, width: 120, height: 15 },
    { x: 350, width: 180, height: 12 },
    { x: 600, width: 150, height: 18 },
    { x: 850, width: 140, height: 14 },
    { x: 1100, width: 160, height: 16 }
  ];
  
  // Draw each dune
  dunes.forEach(dune => {
    const y = canvas.height - 20;
    
    ctx.beginPath();
    ctx.moveTo(dune.x, y);
    ctx.quadraticCurveTo(
      dune.x + dune.width / 2,
      y - dune.height,
      dune.x + dune.width,
      y
    );
    ctx.lineTo(dune.x + dune.width, canvas.height);
    ctx.lineTo(dune.x, canvas.height);
    ctx.closePath();
    ctx.fill();
  });
};