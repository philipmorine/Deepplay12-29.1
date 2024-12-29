// Store fixed peak heights to maintain consistency between renders
const mountainPeaks = {
  far: [] as number[],
  near: [] as number[]
};

export const initializeMountains = (canvas: HTMLCanvasElement) => {
  // Initialize far mountains
  mountainPeaks.far = Array(5).fill(0).map(() => 
    canvas.height * 0.65 - (Math.random() * 120)
  );
  
  // Initialize near mountains
  mountainPeaks.near = Array(3).fill(0).map(() => 
    canvas.height * 0.7 - (Math.random() * 150)
  );
};

export const drawMountains = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  // Initialize peaks if not already done
  if (mountainPeaks.far.length === 0) {
    initializeMountains(canvas);
  }

  // Far mountains
  drawMountainRange(ctx, canvas, {
    baseHeight: canvas.height * 0.65,
    color: '#8B7355',
    peaks: mountainPeaks.far
  });

  // Near mountains
  drawMountainRange(ctx, canvas, {
    baseHeight: canvas.height * 0.7,
    color: '#6B4423',
    peaks: mountainPeaks.near
  });
};

interface MountainParams {
  baseHeight: number;
  color: string;
  peaks: number[];
}

const drawMountainRange = (
  ctx: CanvasRenderingContext2D, 
  canvas: HTMLCanvasElement,
  params: MountainParams
) => {
  const { color, peaks } = params;
  
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);

  const segmentWidth = canvas.width / (peaks.length - 1);
  
  peaks.forEach((peakHeight, i) => {
    const x = i * segmentWidth;
    
    if (i === 0) {
      ctx.lineTo(x, peakHeight);
    } else {
      // Create a valley between peaks
      const valleyX = x - segmentWidth / 2;
      const valleyHeight = peakHeight + 40; // Fixed valley depth
      ctx.lineTo(valleyX, valleyHeight);
      ctx.lineTo(x, peakHeight);
    }
  });

  ctx.lineTo(canvas.width, canvas.height);
  ctx.closePath();
  ctx.fill();
};