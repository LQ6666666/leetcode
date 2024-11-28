function reverseVowels(s: string): string {
  const vowels = new Set("aeiouAEIOU");
  const arr = Array.from(s);
  const n = s.length;

  let i = 0,
    j = n - 1;
  while (i < j) {
    while (i < n && !vowels.has(arr[i])) {
      ++i;
    }

    while (j > 0 && !vowels.has(s[j])) {
      --j;
    }

    if (i < j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      ++i, --j;
    }
  }

  return arr.join("");
}

export { reverseVowels };
