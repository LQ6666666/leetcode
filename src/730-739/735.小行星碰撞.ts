function asteroidCollision(asteroids: number[]): number[] {
  const n = asteroids.length;
  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    const aster = asteroids[i];
    let alive = true;
    while (alive && aster < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
      alive = stack[stack.length - 1] < -aster;
      if (stack[stack.length - 1] <= -aster) {
        stack.pop();
      }
    }
    if (alive) {
      stack.push(aster);
    }
  }

  return stack.reverse();
}

export {};
