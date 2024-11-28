function distributeCandies$(candyType: number[]): number {
  const length: number = new Set<number>(candyType).size;

  const half: number = candyType.length / 2;

  return length >= half ? half : length;
}

function distributeCandies(candyType: number[]): number {
  const { size } = new Set(candyType);
  return Math.min(size, candyType.length / 2);
}

export { distributeCandies };
