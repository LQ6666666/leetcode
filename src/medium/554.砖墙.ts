function leastBricks(wall: number[][]): number {
  const map = new Map<number, number>();
  for (const widths of wall) {
    const n = widths.length;
    let sum = 0;
    // 最后一个不用加
    for (let i = 0; i < n - 1; i++) {
      sum += widths[i];
      map.set(sum, (map.get(sum) ?? 0) + 1);
    }
  }

  return wall.length - Math.max(0, ...map.values());
}

export { leastBricks };
