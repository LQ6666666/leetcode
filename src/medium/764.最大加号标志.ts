// 暴力
function orderOfLargestPlusSign(n: number, mines: number[][]): number {
  const grid = Array.from({ length: n }, () => Array.from({ length: n }, () => 1));
  for (const [x, y] of mines) {
    grid[x][y] = 0;
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        const size = helper(i, j);
        ans = Math.max(ans, size);
      }
    }
  }

  return ans;

  function helper(x: number, y: number): number {
    let ans = 1;
    const edge = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ];

    while (edge.every(([i, j]) => grid[x + i]?.[y + j])) {
      ans++;
      edge[0][1]++;
      edge[1][1]--;
      edge[2][0]++;
      edge[3][0]--;
    }

    return ans;
  }
}

console.log(orderOfLargestPlusSign(5, [[4, 2]]));
console.log(orderOfLargestPlusSign(1, [[0, 0]]));

export { orderOfLargestPlusSign };
