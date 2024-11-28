function countHomogenous(s: string): number {
  let ans = 0;
  let prev = s.at(0);
  let count = 0;

  for (const ch of s) {
    if (prev === ch) {
      count++;
    } else {
      ans += ((count + 1) * count) / 2;
      count = 1;
      prev = ch;
    }
  }

  ans += ((count + 1) * count) / 2;

  return ans % 1000000007;
}

export {};
