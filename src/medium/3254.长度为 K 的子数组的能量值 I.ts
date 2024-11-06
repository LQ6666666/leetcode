// function resultsArray(nums: number[], k: number): number[] {
//   const n = nums.length;
//   const ans = new Array<number>(n - k + 1).fill(-1);

//   for (let i = 0; i < n - k + 1; i++) {
//     let j = i + 1;
//     while (j - i < k && nums[j] - 1 === nums[j - 1]) {
//       j++;
//     }

//     if (j - i === k) {
//       ans[i] = nums[j - 1];
//     }
//   }

//   return ans;
// }

function resultsArray(nums: number[], k: number): number[] {
  const n = nums.length;
  const ans = new Array<number>(n - k + 1).fill(-1);
  let i = 0;
  let j = 1;

  if (k === 1) {
    ans[0] = nums[0];
  }

  while (j < n) {
    if (nums[j - 1] + 1 !== nums[j]) {
      i = j;
    }
    if (j - i + 1 >= k) {
      ans[j - k + 1] = nums[j];
    }
    j++;
  }

  return ans;
}

export { resultsArray };
