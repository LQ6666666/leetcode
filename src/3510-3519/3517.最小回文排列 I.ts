function smallestPalindrome(s: string): string {
  const n = s.length;
  const count = new Array<number>(26).fill(0);
  for (let i = 0; i < Math.floor(n / 2); i++) {
    count[s.charCodeAt(i) - 97]++;
  }
  const ans: string[] = [];
  for (let i = 0; i < 26; i++) {
    ans.push(String.fromCharCode(i + 97).repeat(count[i]));
  }
  const t = ans.toReversed();
  if (n % 2 > 0) {
    ans.push(s[Math.floor(n / 2)]);
  }
  ans.push(...t);
  return ans.join("");
}

export {};
