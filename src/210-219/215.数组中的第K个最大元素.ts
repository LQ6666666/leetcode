function findKthLargest(nums: number[], k: number): number {
  const arr = quickSort(nums);
  return arr[arr.length - k];
}

function quickSort(nums: number[]): number[] {
  const n = nums.length;
  if (n === 0) return [];

  const middleNum = nums[Math.floor(n / 2)];

  const leftArr: number[] = [];
  const middleArr: number[] = [];
  const rightArr: number[] = [];

  for (const num of nums) {
    if (num === middleNum) {
      middleArr.push(num);
    } else if (num < middleNum) {
      leftArr.push(num);
    } else {
      rightArr.push(num);
    }
  }

  return quickSort(leftArr).concat(middleArr).concat(quickSort(rightArr));
}

export {};
