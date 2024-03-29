function reverseString$(s: string[]): void {
  for (let i = 0; i < s.length >> 1; i++) {
    let temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }
}

function reverseString(s: string[]): void {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    const t = s[i];
    s[i] = s[j];
    s[j] = t;
  }
}

export {};
