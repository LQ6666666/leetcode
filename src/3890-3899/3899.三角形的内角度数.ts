function internalAngles(sides: number[]): number[] {
  sides.sort((a, b) => a - b);
  const [a, b, c] = sides;
  if (a + b <= c) {
    return [];
  }

  const rad = 180 / Math.PI;
  const A = Math.acos((b * b + c * c - a * a) / (b * c * 2)) * rad;
  const B = Math.acos((a * a + c * c - b * b) / (a * c * 2)) * rad;
  return [A, B, 180 - A - B];
}

export {};
