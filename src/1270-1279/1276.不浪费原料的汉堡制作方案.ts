function numOfBurgers(tomatoSlices: number, cheeseSlices: number): number[] {
  // 4x + 2y = tomatoSlices
  // x + y = cheeseSlices;
  // 化简
  // 2x + y = tomatoSlices / 2
  // y = cheeseSlices - x
  // 得出
  // 2x + (cheeseSlices - x) = tomatoSlices / 2
  // 2x - x = (tomatoSlices / 2) - cheeseSlices
  // x  = (tomatoSlices / 2) - cheeseSlices;
  // y = cheeseSlices -x;

  const ans: number[] = [];
  if (tomatoSlices % 2 !== 0) return ans;

  const x = tomatoSlices / 2 - cheeseSlices;
  if (x < 0) return ans;

  const y = cheeseSlices - x;
  if (y < 0) return ans;

  ans.push(x);
  ans.push(y);
  return ans;
}

export {};
