// 暴力 DFS
function minExtraChar$(s: string, dictionary: string[]): number {
  const set = new Set(dictionary);
  return dfs(s.length);

  function dfs(i: number): number {
    if (i <= 0) return 0;
    // 不选
    let res = dfs(i - 1) + 1;
    // 枚举选哪个
    for (let j = 0; j < i; j++) {
      if (set.has(s.slice(j, i))) {
        res = Math.min(res, dfs(j));
      }
    }
    return res;
  }
}

// 记忆化 DFS
function minExtraChar$$(s: string, dictionary: string[]): number {
  const set = new Set(dictionary);
  const n = s.length;
  const cache = new Array<number>(n).fill(0);
  return dfs(n);

  function dfs(i: number): number {
    if (i <= 0) return 0;
    if (cache[i]) return cache[i];

    // 不选
    let res = dfs(i - 1) + 1;
    // 枚举选哪个
    for (let j = 0; j < i; j++) {
      if (set.has(s.slice(j, i))) {
        res = Math.min(res, dfs(j));
      }
    }
    cache[i] = res;
    return res;
  }
}

// DP
function minExtraChar(s: string, dictionary: string[]): number {
  const set = new Set(dictionary);
  const n = s.length;
  const f = new Array<number>(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    // 不选
    f[i] = f[i - 1] + 1;
    // 选
    for (let j = 0; j < i; j++) {
      if (set.has(s.slice(j, i))) {
        f[i] = Math.min(f[i], f[j]);
      }
    }
  }

  return f[n];
}

export { minExtraChar };
