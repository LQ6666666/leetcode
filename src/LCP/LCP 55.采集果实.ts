function getMinimumTime(time: number[], fruits: number[][], limit: number): number {
  const n = fruits.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    const [type, num] = fruits[i];
    const count = Math.ceil(num / limit) * time[type];
    ans += count;
  }

  return ans;
}

export { getMinimumTime };
