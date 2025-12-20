function minDeletionSize(strs: string[]): number {
  const m = strs.length;
  const n = strs[0].length;

  let ans = 0;
  for (let j = 0; j < n; j++) {
    let code = strs[0].charCodeAt(j);
    for (let i = 1; i < m; i++) {
      const c = strs[i].charCodeAt(j);
      if (c < code) {
        ans++;
        break;
      }
      code = c;
    }
  }

  return ans;
}

export {};
