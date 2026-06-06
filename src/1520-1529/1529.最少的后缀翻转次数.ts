function minFlips(target: string): number {
  const n = target.length;
  let prev = "0";
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const c = target[i];
    if (c !== prev) {
      ans++;
    }
    prev = c;
  }
  return ans;
}

export {};
