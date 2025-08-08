function maximumXOR(nums: number[]): number {
  return nums.reduce((memo, num) => memo | num, 0);
}
