function occurrencesOfElement(nums: number[], queries: number[], x: number): number[] {
  const n = nums.length;

  const indexList: number[] = [];
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (num === x) {
      indexList.push(i);
    }
  }

  const ans = new Array<number>(queries.length).fill(-1);
  for (let i = 0; i < queries.length; i++) {
    const index = queries[i] - 1;
    if (index < indexList.length) {
      ans[i] = indexList[index];
    }
  }

  return ans;
}

export { occurrencesOfElement };
