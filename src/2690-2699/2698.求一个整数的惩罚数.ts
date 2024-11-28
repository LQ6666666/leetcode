function punishmentNumber(n: number): number {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    const t = i * i;
    if (check(t.toString(), 0, 0, i)) {
      ans += t;
    }
  }
  return ans;
}

function check(s: string, pos: number, tot: number, target: number): boolean {
  const n = s.length;
  if (pos === n) {
    return tot === target;
  }

  let sum = 0;
  for (let i = pos; i < n; i++) {
    sum = sum * 10 + +s[i];
    if (tot + sum > target) {
      break;
    }

    if (check(s, i + 1, tot + sum, target)) {
      return true;
    }
  }

  return false;
}

export { punishmentNumber };
