function nextGreatestLetter(letters: string[], target: string): string {
  const n = letters.length;

  let left = 0;
  let right = n - 1;
  let ans = -1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (letters[middle] <= target) {
      left = middle + 1;
    } else {
      ans = middle;
      right = middle - 1;
    }
  }

  return ans === -1 ? letters[0] : letters[ans];
}

export {};
