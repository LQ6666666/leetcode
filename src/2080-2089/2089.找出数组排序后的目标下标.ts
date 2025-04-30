function targetIndices(nums: number[], target: number): number[] {
  const n = nums.length;

  let lt = 0;
  let eq = 0;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (num < target) {
      lt++;
    } else if (num === target) {
      eq++;
    }
  }

  const ans: number[] = [];
  for (let i = 0; i < eq; i++) {
    ans.push(lt + i);
  }

  return ans;
}

export { targetIndices };
