function canPlaceFlowers$(flowerbed: number[], x: number): boolean {
  const n = flowerbed.length;

  for (let i = 0; i < n && x > 0; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      flowerbed[i] = 1;
      x--;
    }
  }

  return x === 0;
}

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const len = flowerbed.length;
  let count = 0;

  for (let i = 0; i < len && count < n; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      flowerbed[i] = 1;
      count++;
    }
  }

  return count === n;
}

export { canPlaceFlowers };
