function canPlaceFlowers(flowerbed: number[], x: number): boolean {
  const n = flowerbed.length;

  for (let i = 0; i < n && x > 0; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      flowerbed[i] = 1;
      x--;
    }
  }

  return x === 0;
}

export { canPlaceFlowers };
