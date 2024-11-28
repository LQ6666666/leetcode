function maxScore(cardPoints: number[], k: number): number {
  const n = cardPoints.length;
  // 计算前 k 个数的和，记作 s
  let s = 0;
  for (let i = 0; i < k; i++) {
    s += cardPoints[i];
  }
  // 初始化答案
  let ans = s;
  // 从 i = 1 开始枚举到 i = k
  for (let i = 1; i <= k; i++) {
    // 每次枚举，把 s 增加 cardPoints[n − i] − cardPoints[k − i]
    s += cardPoints[n - i] - cardPoints[k - i];
    // 然后更新 ans 的最大值
    ans = Math.max(ans, s);
  }

  // 返回 ans
  return ans;
}

export { maxScore };
