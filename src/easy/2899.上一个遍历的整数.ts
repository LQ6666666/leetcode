function lastVisitedIntegers(nums: number[]): number[] {
  const seen: number[] = [];
  const ans: number[] = [];
  let k = 0;

  for (const num of nums) {
    if (num === -1) {
      k++;

      if (k <= seen.length) {
        ans.push(seen[k - 1]);
      } else {
        ans.push(-1);
      }
    } else {
      k = 0;
      seen.unshift(num);
    }
  }

  return ans;
}

export {};
