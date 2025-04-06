function pivotArray(nums: number[], pivot: number): number[] {
  const n = nums.length;

  let lt = 0;
  let eq = 0;
  let gt = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] === pivot) {
      eq++;
    } else if (nums[i] < pivot) {
      lt++;
    } else {
      gt++;
    }
  }

  let ltIndex = 0;
  let eqIndex = lt;
  let gtIndex = lt + eq;

  const ans = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    if (nums[i] === pivot) {
      ans[eqIndex++] = nums[i];
    } else if (nums[i] < pivot) {
      ans[ltIndex++] = nums[i];
    } else {
      ans[gtIndex++] = nums[i];
    }
  }

  return ans;
}

export { pivotArray };
