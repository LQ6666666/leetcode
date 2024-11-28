function rearrangeCharacters(s: string, target: string): number {
  const sMap = new Array<number>(26).fill(0);
  for (const ch of s) {
    sMap[ch.charCodeAt(0) - 97]++;
  }
  const targetMap = new Array<number>(26).fill(0);
  for (const ch of target) {
    targetMap[ch.charCodeAt(0) - 97]++;
  }

  let ans = Number.MAX_SAFE_INTEGER;

  for (const ch of target) {
    const index = ch.charCodeAt(0) - 97;
    ans = Math.min(ans, Math.floor(sMap[index] / targetMap[index]));
  }

  return ans;
}

export { rearrangeCharacters };
