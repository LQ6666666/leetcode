function validPalindrome(s: string): boolean {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return helper(s, i + 1, j) || helper(s, i, j - 1);
    }
  }

  return true;
}

function helper(s: string, start: number, end: number): boolean {
  for (let i = start, j = end; i < end; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
}

export { validPalindrome };
