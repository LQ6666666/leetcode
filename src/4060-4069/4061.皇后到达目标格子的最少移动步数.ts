function minQueenMoves(source: number[], target: number[]): number {
  if (source[0] === target[0] && source[1] === target[1]) return 0;
  return Math.abs(source[0] - target[0]) === Math.abs(source[1] - target[1]) ||
    source[0] === target[0] ||
    source[1] === target[1]
    ? 1
    : 2;
}

export {};
