function alphabetBoardPath(target: string): string {
  // 记录每个点的位置
  const positions = new Map<string, number[]>([["z", [5, 0]]]);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      positions.set(String.fromCharCode(i * 5 + j + 97), [i, j]);
    }
  }

  let ans = "";
  // 当前的位置
  let current = [0, 0];
  for (const item of target) {
    const [row, col] = positions.get(item)!;
    // 上
    while (current[0] > row) {
      current[0]--;
      ans += "U";
    }
    // 左
    while (current[1] > col) {
      current[1]--;
      ans += "L";
    }
    // 右
    while (current[1] < col) {
      current[1]++;
      ans += "R";
    }
    // 下
    while (current[0] < row) {
      current[0]++;
      ans += "D";
    }
    ans += "!";
  }
  return ans;
}

export { alphabetBoardPath };
