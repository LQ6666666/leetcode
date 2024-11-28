function convertToTitle(columnNumber: number): string {
  let ans = "";
  let x = columnNumber;

  while (x > 0) {
    const num = (x - 1) % 26;
    ans = String.fromCodePoint(65 + num) + ans;

    x = Math.floor((x - 1) / 26);
  }

  return ans;
}

export { convertToTitle };
