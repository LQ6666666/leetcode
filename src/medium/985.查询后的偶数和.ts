function sumEvenAfterQueries(nums: number[], queries: number[][]): number[] {
  const n = nums.length;
  const ans = new Array<number>(nums.length);
  // 偶数和
  let sum = nums.reduce((prev, cur) => (cur % 2 === 0 ? prev + cur : prev), 0);

  for (let i = 0; i < n; i++) {
    const [val, index] = queries[i];
    // 判断影响的值是否为偶数 是则删除
    if (nums[index] % 2 === 0) {
      sum -= nums[index];
    }
    // 修改值
    nums[index] += val;
    // 判断修改后的值是否为偶数 是则添加
    if (nums[index] % 2 === 0) {
      sum += nums[index];
    }
    ans[i] = sum;
  }

  return ans;
}

export {};
