function maximumCount(nums: number[]): number {
  // 二分搜索：最小正数
  const z = binarySearch(nums, 1);
  // 二分搜索：最大负数
  const f = binarySearch(nums, 0);

  return Math.max(nums.length - z, f);
}

function binarySearch(array: number[], target: number) {
  let left = 0,
    right = array.length - 1;

  while (left <= right) {
    const middle = left + ((right - left) >> 1);

    if (array[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
}

export { maximumCount };
