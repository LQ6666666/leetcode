function minTimeToType(word: string): number {
  let ans = 0;
  let prev = "a";
  for (const ch of word) {
    if (prev !== ch) {
      const diff = Math.abs(ch.charCodeAt(0) - prev.charCodeAt(0));
      ans += Math.min(diff, 26 - diff);
    }

    ans++;
    prev = ch;
  }

  return ans;
}

export {};
