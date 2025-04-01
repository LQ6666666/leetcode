function mostPoints(questions: number[][]): number {
  const n = questions.length;
  const memo = new Array<number>(n);

  return dfs(0);

  function dfs(i: number): number {
    if (i >= n) return 0;

    if (memo[i] !== undefined) return memo[i];

    const [points, brainpower] = questions[i];

    return (memo[i] = Math.max(points + dfs(i + brainpower + 1), dfs(i + 1)));
  }
}

export { mostPoints };
