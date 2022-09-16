function findAnagrams(s: string, p: string): number[] {
  const n = s.length;
  const len = p.length;

  const cacheFormat = cacheStringFunction(format);
  const target = cacheFormat(p);

  let ans: number[] = [];

  for (let i = 0; i <= n - len; i++) {
    const word = s.slice(i, i + len);
    const value = cacheFormat(word);
    if (value === target) {
      ans.push(i);
    }
  }

  return ans;
};

function format(word: string): string {
  const arr = new Array<number>(26).fill(0);
  for (const letter of word) {
    arr[letter.charCodeAt(0) - 97]++;
  }
  return arr.toString();
}

const cacheStringFunction = <T extends (str: string) => string>(fn: T): T => {
  const cache: Record<string, string> = Object.create(null);
  return ((str: string) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  }) as any;
}

console.log(findAnagrams("cbaebabacd", "abc"));

export {}
