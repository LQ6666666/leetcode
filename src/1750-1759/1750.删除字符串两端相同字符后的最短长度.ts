function minimumLength(s: string): number {
  let left = 0,
    right = s.length - 1;

  while (left < right && s[left] === s[right]) {
    const ch = s[left];
    while (s[left] === ch && left <= right) left++;
    while (s[right] === ch && left <= right) right--;
  }

  return right - left + 1;
}

export {};
