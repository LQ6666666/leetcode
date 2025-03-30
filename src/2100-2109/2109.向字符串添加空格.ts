function addSpaces(s: string, spaces: number[]): string {
  const n = s.length;
  let ans = "";
  let j = 0;

  for (let i = 0; i < n; i++) {
    if (i === spaces[j]) {
      ans += " ";
      j++;
    }

    ans += s[i];
  }

  return ans;
}

export { addSpaces };
