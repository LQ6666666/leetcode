function getSmallestString(s: string): string {
  const n = s.length;
  const arr = s.split("");

  for (let i = 1; i < n; i++) {
    const a = +s[i - 1];
    const b = +s[i];
    if ((a % 2 === 0 ? 0 : 1) === (b % 2 === 0 ? 0 : 1)) {
      if (a > b) {
        const temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        break;
      }
    }
  }

  return arr.join("");
}

export { getSmallestString };
