function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
  const n = difficulty.length;
  const m = worker.length;

  const arr: [number, number][] = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = [difficulty[i], profit[i]];
  }

  arr.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < n; i++) {
    arr[i][1] = Math.max(arr[i][1], arr[i - 1][1]);
  }

  let ans = 0;
  for (let i = 0; i < m; i++) {
    const index = binarySearch(arr, worker[i]);
    if (index !== -1) {
      ans += arr[index][1];
    }
  }

  return ans;
}

function binarySearch(arr: [number, number][], target: number) {
  let left = 0;
  let right = arr.length - 1;

  let result = -1;
  while (left <= right) {
    const middleIndex = left + ((right - left) >> 1);
    const middle = arr[middleIndex][0];
    if (middle <= target) {
      result = middleIndex;
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }

  return result;
}

export { maxProfitAssignment };
