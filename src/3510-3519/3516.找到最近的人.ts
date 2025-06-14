function findClosest(x: number, y: number, z: number): number {
  const a = Math.abs(z - x);
  const b = Math.abs(z - y);
  if (a === b) {
    return 0;
  } else if (a > b) {
    return 2;
  } else {
    return 1;
  }
}

export { findClosest };
