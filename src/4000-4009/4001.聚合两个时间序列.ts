function aggregateTimeSeries(series1: number[][], series2: number[][]): number[][] {
  let i = 0;
  let j = 0;
  const ans: number[][] = [];
  while (i < series1.length || j < series2.length) {
    if (i === series1.length) {
      ans.push(series2[j++]);
    } else if (j === series2.length) {
      ans.push(series1[i++]);
    } else {
      if (series1[i][0] == series2[j][0]) {
        ans.push([series1[i][0], series1[i++][1] + series2[j++][1]]);
      } else if (series1[i][0] < series2[j][0]) {
        ans.push([series1[i][0], series1[i++][1] + series2[j][1]]);
      } else {
        ans.push([series2[j][0], series1[i][1] + series2[j++][1]]);
      }
    }
  }
  return ans;
}

export {};
