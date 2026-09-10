function minBishopMoves(source: number[], target: number[]): number {
  const [sx, sy] = source;
  const [tx, ty] = target;

  if ((sx + sy) % 2 !== (tx + ty) % 2) {
    return -1;
  }

  // 两点之间的直线，如果斜率是 -1 或者 1，那么两点可以直接到达，否则要走两步
  return sx + sy === tx + ty || sx - sy === tx - ty ? 1 : 2;
}

export {};
