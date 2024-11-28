function findArray(pref: number[]): number[] {
  // a^b = b^a
  // a^b^c = a^c^b
  // a^b = c <==> a^c = b

  const n = pref.length;
  const ans = new Array<number>(n);
  ans[0] = pref[0];

  for (let i = 1; i < n; i++) {
    ans[i] = pref[i - 1] ^ pref[i];
  }

  return ans;
}

export { findArray };
