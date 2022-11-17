function maximumUnits(boxTypes: number[][], truckSize: number): number {
  let ans = 0;
  // 按箱子大小排序
  boxTypes.sort(([, a], [, b]) => b - a);
  let size = 0;
  let i = 0,
    j = 0;
  while (i < boxTypes.length && size !== truckSize) {
    size++;
    ans += boxTypes[i][1];
    j++;
    if (j === boxTypes[i][0]) {
      i++;
      j = 0;
    }
  }

  return ans;
}

export { maximumUnits };
