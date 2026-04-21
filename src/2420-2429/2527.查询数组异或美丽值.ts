function xorBeauty(nums: number[]): number {
  return nums.reduce((memo, num) => memo ^ num, 0);
}

export {};
