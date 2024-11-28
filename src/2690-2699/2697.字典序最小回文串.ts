function makeSmallestPalindrome(s: string): string {
  let i = 0,
    j = s.length - 1;

  const arr = s.split("");

  while (i < j) {
    if (arr[i] !== arr[j]) {
      arr[i] = arr[j] = String.fromCharCode(Math.min(arr[i].charCodeAt(0), arr[j].charCodeAt(0)));
    }
    i++, j--;
  }

  return arr.join("");
}

export { makeSmallestPalindrome };
