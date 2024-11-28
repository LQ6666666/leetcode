function magicalString(n: number): number {
  const s = new Array<number>(n + 2);
  s[0] = 1;
  s[1] = 2;
  s[2] = 2;

  let i = 2;
  let index = 3;
  let c = 2;
  while (i < n) {
    // 1 ^ 3 = 2
    // 2 ^ 3 = 1
    c ^= 3;

    s[index++] = c;

    if (s[i] === 2) {
      s[index++] = c;
    }
    i++;
  }

  let ans = 1;
  for (let i = 3; i < n; i++) {
    if (s[i] === 1) {
      ans++;
    }
  }

  return ans;
}
export { magicalString };
