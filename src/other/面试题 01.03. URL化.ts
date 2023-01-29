function replaceSpaces(S: string, length: number): string {
  let ans = "";

  for (let i = 0; i < length; i++) {
    const ch = S[i];
    if (ch === " ") {
      ans += "%20";
    } else {
      ans += ch;
    }
  }

  return ans;
}

export { replaceSpaces };
