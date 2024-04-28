function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
  const ans: number[][] = [];

  const m = firstList.length;
  const n = secondList.length;
  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    const left = Math.max(firstList[i][0], secondList[j][0]);
    const right = Math.min(firstList[i][1], secondList[j][1]);

    if (left <= right) {
      ans.push([left, right]);
    }

    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return ans;
}

export { intervalIntersection };
