function peakIndexInMountainArray(arr: number[]): number {
  const n = arr.length;
  let left = 1;
  let right = n - 2;

  let ans = -1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (arr[mid] > arr[mid + 1]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}

export {};
