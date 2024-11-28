function secondHighest1(s: string): number {
  const set = new Set<number>();
  const re = /[0-9]/;

  for (const char of s) {
    if (!re.test(char)) continue;

    set.add(+char);
  }

  if (set.size === 1) return -1;

  let flag = false;
  for (let i = 9; i > -1; i--) {
    if (!set.has(i)) continue;

    if (flag) {
      return i;
    } else {
      flag = true;
    }
  }

  return -1;
}

function secondHighest(s: string): number {
  const nums: number[] = new Array(10).fill(0);
  const RE = /[0-9]/;
  for (const ch of s) {
    if (RE.test(ch)) {
      nums[+ch]++;
    }
  }

  let flag = false;
  for (let i = 9; i >= 0; i--) {
    const count = nums[i];

    if (count > 0 && flag) {
      return i;
    } else if (count > 0) {
      flag = true;
    }
  }

  return -1;
}

export { secondHighest };
