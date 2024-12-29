export const createSkyGradient = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#000000'); // Deep space black
  gradient.addColorStop(0.4, '#1a0f2e'); // Deep purple
  gradient.addColorStop(0.7, '#2d1810'); // Dark desert red
  gradient.addColorStop(1, '#000000'); // Black horizon
  return gradient;
};