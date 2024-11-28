function addedInteger(nums1: number[], nums2: number[]): number {
  const a = sum(nums1);
  const b = sum(nums2);

  return (b - a) / nums1.length;
}

function sum(nums: number[]) {
  return nums.reduce((acc, num) => acc + num, 0);
}

export { addedInteger };
