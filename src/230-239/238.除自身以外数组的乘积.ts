function productExceptSelf$(nums: number[]): number[] {
  const n = nums.length;

  const left = new Array<number>(n).fill(0);
  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  const right = new Array<number>(n).fill(0);
  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  const ans = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    ans[i] = left[i] * right[i];
  }

  return ans;
}

function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;

  const ans = new Array<number>(n);

  ans[0] = 1;
  for (let i = 1; i < n; i++) {
    ans[i] = nums[i - 1] * ans[i - 1];
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    ans[i] *= right;
    right *= nums[i];
  }

  return ans;
}

export { productExceptSelf };
