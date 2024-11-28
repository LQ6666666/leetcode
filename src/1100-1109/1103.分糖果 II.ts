function distributeCandies(candies: number, num_people: number): number[] {
  const ans = new Array<number>(num_people).fill(0);
  for (let i = 1; candies > 0; i++) {
    ans[(i - 1) % num_people] += Math.min(i, candies);
    candies -= i;
  }
  return ans;
}

export { distributeCandies };
