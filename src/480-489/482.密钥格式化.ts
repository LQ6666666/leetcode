function licenseKeyFormatting(s: string, k: number): string {
  const n = s.length;

  let res: string[] = [];
  for (let i = n - 1, cnt = 0; i >= 0; i--) {
    if (s.charAt(i) === "-") continue;
    if (cnt === k) {
      cnt = 0;
      res.push("-");
    }
    res.push(s.charAt(i));
    cnt++;
  }

  return res.reverse().join("").toUpperCase();
}

export { licenseKeyFormatting };
