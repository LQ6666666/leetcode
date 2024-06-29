function removeTrailingZeros(num: string): string {
  let i = num.length - 1;
  while (num[i] === "0") {
    i--;
  }
  return num.slice(0, i + 1);
}

export { removeTrailingZeros };
