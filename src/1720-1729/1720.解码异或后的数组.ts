function decode(encoded: number[], first: number): number[] {
  const n = encoded.length;
  const ans = new Array<number>(n + 1);
  ans[0] = first;

  for (let i = 0; i < n; i++) {
    ans[i + 1] = ans[i] ^ encoded[i];
  }

  return ans;
}

export { decode };
