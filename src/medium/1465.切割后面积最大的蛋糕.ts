const MOD = 1000000007;

function maxArea(h: number, w: number, horizontalCuts: number[], verticalCuts: number[]): bigint {
  const maxHeight = maxInterval([0, ...horizontalCuts, h]);
  const maxWidth = maxInterval([0, ...verticalCuts, w]);
  return (BigInt(maxHeight) * BigInt(maxWidth)) % BigInt(MOD);
}

function maxInterval(arr: number[]): number {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  let pre = arr[0];
  let ans = 0;

  for (let i = 1; i < n; i++) {
    const num = arr[i];
    ans = Math.max(num - pre, ans);
    pre = num;
  }
  return ans;
}

export {};
