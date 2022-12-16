function minElements(nums: number[], limit: number, goal: number): number {
  const sum = nums.reduce((prev, cur) => prev + cur);
  const diff = Math.abs(sum - goal);

  return Math.abs(Math.floor((diff + limit - 1) / limit));
}

export {};
