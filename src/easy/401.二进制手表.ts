function readBinaryWatch(turnedOn: number): string[] {
  // 另一种枚举方法是枚举所有 2^10 = 1024 种灯的开闭组合
  // 即用一个二进制数表示灯的开闭，其高 4 位为小时，低 6 位为分钟
  // 若小时和分钟的值均在合法范围内，且二进制中 1 的个数为 turnedOn，则将其加入到答案中

  const ans: string[] = [];
  for (let i = 0; i < 1024; i++) {
    const h = i >> 6;
    const m = i & 0b0000111111;
    if (h < 12 && m < 60 && helper(i) === turnedOn) {
      ans.push(`${h}:${m < 10 ? "0" : ""}${m}`);
    }
  }
  return ans;
}

function helper(num: number): number {
  let count = 0;
  let x = num;
  while (x) {
    if (x & 1) {
      count++;
    }
    x >>= 1;
  }
  return count;
}

export { readBinaryWatch };
