const Offset = 1950;

function maximumPopulation(logs: number[][]): number {
  const diff = new Array<number>(101).fill(0);

  for (const [birth, death] of logs) {
    diff[birth - Offset]++;
    diff[death - Offset]--;
  }

  let max = 0;
  let ans = 0;
  let sum = 0;
  for (let i = 0; i < 101; i++) {
    sum += diff[i];
    if (sum > max) {
      max = sum;
      ans = i;
    }
  }

  return ans + Offset;
}

export { maximumPopulation };
