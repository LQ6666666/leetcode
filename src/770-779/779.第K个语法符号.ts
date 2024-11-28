function kthGrammar(n: number, k: number): number {
  if (n == 1) return 0;

  let fa = kthGrammar(n - 1, (k + 1) >> 1);

  if (fa == 0) {
    return k % 2 == 1 ? 0 : 1;
  } else {
    return k % 2 == 1 ? 1 : 0;
  }
}

export { kthGrammar };
