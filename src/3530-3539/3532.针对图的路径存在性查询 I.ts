function pathExistenceQueries(
  n: number,
  nums: number[],
  maxDiff: number,
  queries: number[][]
): boolean[] {
  const len = nums.length;

  const rights: number[] = [];
  for (let i = 1; i < len; i++) {
    if (nums[i] - nums[i - 1] > maxDiff) {
      rights.push(i - 1);
    }
  }
  rights.push(n - 1);

  return queries.map(([a, b]) => lowerBound(rights, a) === lowerBound(rights, b));

  function lowerBound(arr: number[], target: number): number {
    let left = 0;
    let right = n - 1;
    while (left <= right) {
      const middle = left + Math.floor((right - left) / 2);
      if (arr[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    return left;
  }
}

export {};
