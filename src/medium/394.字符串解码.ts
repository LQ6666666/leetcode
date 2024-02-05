function decodeString(s: string): string {
  const n = s.length;
  if (n === 0) return s;

  let result = "";
  let i = 0;
  while (i < n) {
    if (/\d/.test(s[i])) {
      // 两位数字的处理
      const index = s.indexOf("[", i + 1);
      const repeatCount = +s.slice(i, index);
      const start = index + 1;
      let j = start;
      let count = 1;
      while (j < n) {
        if (s[j] === "[") {
          count++;
        } else if (s[j] === "]") {
          count--;
          if (count === 0) {
            const end = j;
            result += decodeString(s.slice(start, end)).repeat(repeatCount);
            i = j + 1;
            break;
          }
        }

        j++;
      }
    } else {
      result += s[i];
      i++;
    }
  }

  return result;
}

export { decodeString };
