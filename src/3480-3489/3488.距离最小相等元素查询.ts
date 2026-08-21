function solveQueries(nums: number[], queries: number[]): number[] {
  const n = nums.length;
  const numsPos = new Map<number, number[]>();

  for (let i = 0; i < n; i++) {
    let pos = numsPos.get(nums[i]);
    if (!pos) {
      numsPos.set(nums[i], (pos = []));
    }
    pos.push(i);
  }

  numsPos.forEach(pos => {
    const x = pos[0];
    pos.unshift(pos[pos.length - 1] - n);
    pos.push(x + n);
  });

  const ans = new Array<number>(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const x = nums[queries[i]];
    const posList = numsPos.get(x)!;
    if (posList.length === 3) {
      ans[i] = -1;
      continue;
    }
    const pos = binarySearch(posList, queries[i]);
    ans[i] = Math.min(posList[pos + 1] - posList[pos], posList[pos] - posList[pos - 1]);
  }

  return ans;
}

function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
}

export {};
