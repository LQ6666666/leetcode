function findLUSlength(strs: string[]): number {
  const n = strs.length;
  let ans = -1;

  for (let i = 0; i < n; i++) {
    let check = true;
    for (let j = 0; j < n; j++) {
      if (i !== j && isSubSeq(strs[i], strs[j])) {
        check = false;
        break;
      }
    }
    if (check) {
      ans = Math.max(ans, strs[i].length);
    }
  }

  return ans;
}

/** s 是不是 t 的子序列 */
function isSubSeq(s: string, t: string): boolean {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === s.length;
}

export { findLUSlength };
