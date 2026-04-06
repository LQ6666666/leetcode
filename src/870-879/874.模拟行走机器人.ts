function robotSim(commands: number[], obstacles: number[][]): number {
  const n = commands.length;
  const d: [number, number][] = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0]
  ];
  const map = new Map<number, Set<number>>();
  for (const [x, y] of obstacles) {
    let set = map.get(x);
    if (!set) {
      map.set(x, (set = new Set()));
    }
    set.add(y);
  }

  let cur = 0;
  let ans = 0;
  let x = 0;
  let y = 0;

  for (let i = 0; i < n; i++) {
    const command = commands[i];
    if (command === -1) {
      cur = (cur - 1 + 4) % 4;
    } else if (command === -2) {
      cur = (cur + 1 + 4) % 4;
    } else {
      for (let j = 0; j < command; j++) {
        x += d[cur][0];
        y += d[cur][1];
        if (map.get(x)?.has(y)) {
          x -= d[cur][0];
          y -= d[cur][1];
          break;
        }
      }
      ans = Math.max(x * x + y * y, ans);
    }
  }

  return ans;
}

export { robotSim };
