function limitOccurrences(nums: number[], k: number): number[] {
  const n = nums.length;

  let i = 0;
  let index = 0;
  while (i < n) {
    let j = i;
    while (nums[i] === nums[j]) {
      if (j - i < k) {
        nums[index++] = nums[i];
      }
      j++;
    }
    i = j;
  }
  nums.length = index;

  return nums;
}

export {};
