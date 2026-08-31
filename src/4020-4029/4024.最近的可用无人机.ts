function nearestDrone(drones: number[][], target: number[]): number {
  const [tx, ty] = target;
  const n = drones.length;

  let minDistance = Number.MAX_SAFE_INTEGER;
  let ans = -1;
  for (let i = 0; i < n; i++) {
    const [x, y, range] = drones[i];
    const d = Math.abs(x - tx) + Math.abs(y - ty);
    if (d <= range && d < minDistance) {
      ans = i;
      minDistance = d;
    }
  }
  return ans;
}

export {};
