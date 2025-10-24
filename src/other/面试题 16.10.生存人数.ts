function maxAliveYear(birth: number[], death: number[]): number {
  const n = birth.length;

  const diff = new Array<number>(101).fill(0);

  for (let i = 0; i < n; i++) {
    diff[birth[i] - 1900]++;
    diff[death[i] - 1900 + 1]--;
  }

  let ans = 0;
  let max = 0;
  let sum = 0;
  for (let i = 0; i < 101; i++) {
    sum += diff[i];

    if (sum > max) {
      ans = i;
      max = sum;
    }
  }

  return ans + 1900;
}

export { maxAliveYear };
