function countPrefixes(words: string[], s: string): number {
  let ans = 0;
  for (const word of words) {
    if (startsWith(s, word)) {
      ans++;
    }
  }
  return ans;
}

function startsWith(s: string, searchString: string): boolean {
  const n = searchString.length;
  if (n > s.length) return false;

  for (let i = 0; i < n; i++) {
    if (searchString[i] !== s[i]) {
      return false;
    }
  }
  return true;
}

export { countPrefixes };
