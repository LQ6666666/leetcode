function numFriendRequests(ages: number[]): number {
  const counts = new Array<number>(121).fill(0);
  for (const age of ages) {
    counts[age]++;
  }

  let ans = 0;
  let countWindow = 0;
  for (let ageX = 0, ageY = 0; ageX < counts.length; ageX++) {
    countWindow += counts[ageX];
    // ages[y] <= 0.5 * ages[x] + 7 等价于 ages[y] * 2 <= ages[x] + 14
    if (ageY * 2 <= ageX + 14) {
      countWindow -= counts[ageY];
      ageY++;
    }
    if (countWindow > 0) {
      ans += counts[ageX] * countWindow - counts[ageX];
    }
  }

  return ans;
}

export { numFriendRequests };
