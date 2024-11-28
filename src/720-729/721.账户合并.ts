function accountsMerge(accounts: string[][]): string[][] {
  const n = accounts.length;
  const emailToIdx = new Map<string, number[]>();

  for (let i = 0; i < n; i++) {
    const account = accounts[i];
    for (let j = 1; j < account.length; j++) {
      const email = account[j];
      let indexList = emailToIdx.get(email);
      if (!indexList) {
        emailToIdx.set(email, (indexList = []));
      }
      indexList.push(i);
    }
  }

  const vis = new Array<0 | 1>(n).fill(0);
  /** 用于收集 DFS 中访问到的邮箱地址 */
  const emailSet = new Set<string>();
  function dfs(i: number) {
    vis[i] = 1;
    const account = accounts[i];

    for (let k = 1; k < account.length; k++) {
      const email = account[k];
      if (emailSet.has(email)) {
        continue;
      }
      emailSet.add(email);
      const indexList = emailToIdx.get(email) ?? [];
      for (const j of indexList) {
        // 遍历所有包含该邮箱地址的账户下标 j
        if (!vis[j]) {
          // j 没有访问过
          dfs(j);
        }
      }
    }
  }

  const ans: string[][] = [];
  for (let i = 0; i < n; i++) {
    // i 没有访问过
    if (vis[i] === 0) {
      emailSet.clear();
      dfs(i);
      ans.push([accounts[i][0]].concat(Array.from(emailSet).sort()));
    }
  }

  return ans;
}

export { accountsMerge };
