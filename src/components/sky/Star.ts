interface Star {
  x: number;
  y: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
  phase: number;
}

export const createStar = (width: number, height: number): Star => ({
  x: Math.random() * width,
  y: Math.random() * height,
  size: Math.random() * 2 + 0.5,
  brightness: Math.random() * 0.5 + 0.5,
  twinkleSpeed: Math.random() * 0.02 + 0.01,
  phase: Math.random() * Math.PI * 2
});