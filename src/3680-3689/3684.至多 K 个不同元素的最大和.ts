function maxKDistinct(nums: number[], k: number): number[] {
  return Array.from(new Set(nums))
    .sort((a, b) => b - a)
    .slice(0, k);
}

export { maxKDistinct };
