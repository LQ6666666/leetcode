function stringHash(s: string, k: number): string {
  const n = s.length;

  let ans = "";
  let sum = 0;
  for (let i = 0, j = 0; i < n; i++) {
    j++;
    sum += s[i].charCodeAt(0) - 97;

    if (j === k) {
      ans += String.fromCharCode((sum % 26) + 97);
      j = 0;
      sum = 0;
    }
  }

  return ans;
}

export { stringHash };
