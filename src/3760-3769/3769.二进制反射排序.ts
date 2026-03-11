function sortByReflection(nums: number[]): number[] {
  nums.sort((a, b) => {
    const x = reverse(a);
    const y = reverse(b);
    if (x === y) {
      return a - b;
    } else {
      return x - y;
    }
  });
  return nums;
}

function reverse(num: number): number {
  let ans = 0;
  while (num) {
    ans |= num & 1;
    num >>= 1;
    ans <<= 1;
  }
  return ans;
}

export {};
