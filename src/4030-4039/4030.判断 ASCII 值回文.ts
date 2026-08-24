function isPalindromic(s: string): boolean {
  const n = s.length;
  let t = "";
  for (let i = 0; i < n; i++) {
    const code = s.charCodeAt(i);
    let x = code;
    let c = "";
    while (x) {
      c = (x % 2) + c;
      x = Math.floor(x / 2);
    }
    t += c.padStart(8, "0");
  }

  let i = 0;
  let j = t.length - 1;
  while (i < j) {
    if (t[i] !== t[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

export {};
