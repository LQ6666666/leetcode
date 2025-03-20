function firstPalindrome(words: string[]): string {
  let ans = "";
  for (const word of words) {
    let l = 0;
    let r = word.length - 1;

    while (l <= r) {
      if (word[l] !== word[r]) {
        break;
      }
      l++;
      r--;
    }

    if (l > r) {
      ans = word;
      break;
    }
  }

  return ans;
}

export { firstPalindrome };
