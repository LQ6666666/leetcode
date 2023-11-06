function maxProduct$(words: string[]): number {
  let result: number = 0;

  for (let i = 0, len = words.length; i < len; i++) {
    const word: string = words[i];
    const wordSetLen = new Set<string>(word.split("")).size;

    for (let j = i + 1; j < len; j++) {
      // 判断 word 是否有 words[j] 的字母
      const str: string = words[j].concat(word);
      // 两边都先去重
      const length: number = new Set<string>(words[j].split("")).size;
      // 然后最后在去重
      const strStrLen: number = new Set<string>(str.split("")).size;

      if (strStrLen === wordSetLen + length) {
        const mul = words[j].length * word.length;

        if (result < mul) {
          result = mul;
        }
      }
    }
  }
  return result;
}

function maxProduct(words: string[]): number {
  const n = words.length;
  const masks = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const word = words[i];
    for (const ch of word) {
      masks[i] |= 1 << ch.charCodeAt(0);
    }
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // 两两比较
      if ((masks[i] & masks[j]) === 0) {
        ans = Math.max(ans, words[i].length * words[j].length);
      }
    }
  }

  return ans;
}

export { maxProduct };
