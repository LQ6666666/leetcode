function minElement(nums: number[]): number {
  let ans = Number.MAX_SAFE_INTEGER;

  for (const num of nums) {
    let x = num;
    let s = 0;
    while (x > 0) {
      s += x % 10;
      x = Math.floor(x / 10);
    }

    ans = Math.min(s, ans);
  }

  return ans;
}


export { minElement };
