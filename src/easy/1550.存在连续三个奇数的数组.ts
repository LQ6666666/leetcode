function threeConsecutiveOdds(arr: number[]): boolean {
  let count = 0;
  for (const num of arr) {
    if (num % 2 !== 0) {
      count++;
    } else {
      count = 0;
    }

    if (count === 3) {
      return true;
    }
  }

  return false;
}

export {};
