function separateDigits(nums: number[]): number[] {
  const ans: number[] = [];

  for (let num of nums) {
    let arr: number[] = [];
    while (num > 0) {
      arr.push(num % 10);
      num = Math.floor(num / 10);
    }
    for (let i = arr.length - 1; i >= 0; i--) {
      ans.push(arr[i]);
    }
  }

  return ans;
}

export { separateDigits };
