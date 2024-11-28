function longestString(x: number, y: number, z: number): number {
  return (Math.min(x, y) * 2 + (x === y ? 0 : 1) + z) * 2;
}

export { longestString };
