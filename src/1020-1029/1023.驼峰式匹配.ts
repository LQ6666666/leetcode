function camelMatch(queries: string[], pattern: string): boolean[] {
  const n = queries.length;
  const m = pattern.length;
  const ans = new Array<boolean>(n);

  for (let i = 0; i < queries.length; i++) {
    // 判断是否匹配
    ans[i] = helper(queries[i]);
  }

  return ans;

  function helper(querie: string): boolean {
    let i = 0,
      j = 0;

    while (i < querie.length) {
      const a = querie[i];

      if (j < m) {
        const b = pattern[j];

        if (a === b) {
          i++, j++;
        } else {
          // 大写直接 false
          if (a.charCodeAt(0) < 97) {
            return false;
          }

          i++;
        }
      } else {
        if (a.charCodeAt(0) < 97) {
          return false;
        }
        i++;
      }
    }

    return j === m;
  }
}

export {};
