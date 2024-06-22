function findShortestSubArray(nums: number[]): number {
  const n = nums.length;
  const indexMap = new Map<number, number[]>();

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    let value = indexMap.get(num);
    if (!value) {
      indexMap.set(num, (value = []));
    }
    value.push(i);
  }

  let ans = 0;
  let maxNum = 0;
  const keys = Array.from(indexMap.keys());
  for (const num of keys) {
    const indexs = indexMap.get(num)!;
    const count = indexs.length;
    const left = indexs[0];
    const right = indexs[count - 1];

    if (maxNum < count) {
      maxNum = count;
      ans = right - left + 1;
    } else if (maxNum === count) {
      ans = Math.min(ans, right - left + 1);
    }
  }

  return ans;
}

export {};
