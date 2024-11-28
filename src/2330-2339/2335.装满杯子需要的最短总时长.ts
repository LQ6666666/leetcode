function fillCups(amount: number[]): number {
  amount.sort((a, b) => a - b);

  let ans: number;
  if (amount[0] + amount[1] > amount[2]) {
    ans = (amount[0] + amount[1] + amount[2] + 1) >> 1;
  } else {
    ans = amount[2];
  }
  return ans;
}

export { fillCups };
