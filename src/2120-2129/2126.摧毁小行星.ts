function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
  const n = asteroids.length;
  // 1. 排序
  asteroids.sort((a, b) => a - b);

  // 2. 比较
  for (let i = 0; i < n; i++) {
    const asteroid = asteroids[i];
    if (mass >= asteroid) {
      // 3. 获得这颗小行星的质量
      mass += asteroid;
    } else {
      return false;
    }
  }

  return true;
}

export {};
