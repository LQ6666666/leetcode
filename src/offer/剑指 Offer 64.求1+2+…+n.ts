function sumNums(n: number): number {
  return n === 1 ? n : n + sumNums(n - 1);
};

function sumNums1(n: number): number {
  let ans = 0;
  while (n) {
    ans += n--;
  }
  return ans;
};

export { sumNums };
