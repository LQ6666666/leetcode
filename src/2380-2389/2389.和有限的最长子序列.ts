function answerQueries(nums: number[], queries: number[]): number[] {
  nums.sort((a, b) => a - b);
  const n = queries.length;
  const ans: number[] = new Array();

  const m = nums.length;
  for (let i = 1; i < m; i++) {
    nums[i] += nums[i - 1];
  }

  for (let i = 0; i < n; i++) {
    ans[i] = brainSearch(queries[i], nums);
  }

  return ans;
}

function brainSearch(target: number, arr: number[]) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    if (target >= arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
}

export {};
