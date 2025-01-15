function resultArray(nums: number[]): number[] {
  const n = nums.length;
  const arr1: number[] = [nums[0]];
  const arr2: number[] = [nums[1]];

  for (let i = 2; i < n; i++) {
    const num = nums[i];
    if (arr1.at(-1)! > arr2.at(-1)!) {
      arr1.push(num);
    } else {
      arr2.push(num);
    }
  }

  return arr1.concat(arr2);
}

export { resultArray };
