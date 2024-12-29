interface Point {
  x: number;
  y: number;
}

export const constellations: Point[][] = [
  // Orion-inspired
  [[100, 100], [120, 130], [140, 160], [160, 200]],
  // Big Dipper-inspired
  [[300, 150], [350, 160], [400, 170], [450, 180], [500, 200]],
  // Custom desert constellations
  [[700, 300], [750, 320], [800, 280]],
  [[200, 400], [250, 380], [300, 420]]
].map(points => points.map(([x, y]) => ({ x, y })));