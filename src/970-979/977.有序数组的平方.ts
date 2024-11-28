function sortedSquares(nums: number[]): number[] {
  return nums.map(num => num ** 2).sort((a, b) => a - b);
}

export {};
