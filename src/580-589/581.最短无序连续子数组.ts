function findUnsortedSubarray(nums: number[]): number {
  const n = nums.length;
  let flag = false;
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      flag = true;
      break;
    }
  }

  if (!flag) {
    return 0;
  }

  const numsSorted = nums.toSorted((a, b) => a - b);
  let left = 0;
  while (nums[left] === numsSorted[left]) {
    left++;
  }

  let right = n - 1;
  while (nums[right] == numsSorted[right]) {
    right--;
  }

  return right - left + 1;
}

export {};
