function sortArray(nums: number[]): number[] {
  return quickSort(nums);
  // return bubblingSort(nums);
};

/**
 * 快速排序
 * @param nums 需要排序的数组
 * @returns 排序后的数组
 */
function quickSort(nums: number[]): number[] {
  const n = nums.length;
  if (n === 0) return [];

  const middle = n >> 1;
  const midValue = nums[middle];

  const middleArr: number[] = [midValue];
  const leftArr: number[] = [];
  const rightArr: number[] = [];

  for (let i = 0; i < n; i++) {
    if (i === middle) continue;

    const item = nums[i];
    if (midValue < item) {
      rightArr.push(item);
    } else if (midValue > item) {
      leftArr.push(item);
    } else {
      middleArr.push(item);
    }
  }

  return quickSort(leftArr).concat(middleArr).concat(quickSort(rightArr));
}

/**
 * 冒泡排序
 * @param nums 需要排序的数组
 * @returns 排序后的数组
 */
function bubblingSort(nums: number[]): number[] {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] > nums[j]) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }

  return nums;
}

export { quickSort, bubblingSort };
