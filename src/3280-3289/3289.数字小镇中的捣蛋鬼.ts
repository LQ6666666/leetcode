function getSneakyNumbers(nums: number[]): number[] {
  const set = new Set<number>();
  const ans: number[] = [];

  for (const num of nums) {
    if (set.has(num)) {
      ans.push(num);

      if (ans.length === 2) {
        break;
      }
    } else {
      set.add(num);
    }
  }

  return ans;
}

export { getSneakyNumbers };
