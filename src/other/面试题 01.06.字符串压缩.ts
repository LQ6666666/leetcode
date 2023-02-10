function compressString(S: string): string {
  const n = S.length;
  let newS = "";
  let i = 0;
  while (i < n) {
    const ch = S[i];
    let count = 1;
    while (S[++i] === ch) count++;
    newS += ch + count;
  }

  return n > newS.length ? newS : S;
}

export { compressString };
