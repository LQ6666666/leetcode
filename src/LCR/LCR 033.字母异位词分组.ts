function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const str of strs) {
    const key = getKey(str);
    let value = map.get(key);
    if (!value) {
      map.set(key, (value = []));
    }
    value.push(str);
  }

  const ans: string[][] = [];
  map.forEach(value => {
    ans.push(value);
  });
  return ans;
}

function getKey(str: string) {
  const n = str.length;
  const counts = new Array<number>(26).fill(0);
  for (let i = 0; i < n; i++) {
    counts[str.charCodeAt(i) - 97]++;
  }
  return counts.toString();
}

export {};
