function greatestLetter1(s: string): string {
  const set = new Set();
  let ans = "";

  for (const ch of s) {
    set.add(ch);

    // 有小写字母，还有大写字母
    const upper = ch.toLocaleUpperCase();
    if (set.has(upper) && set.has(ch.toLocaleLowerCase())) {
      if (ans === "" || upper >= ans) {
        ans = upper;
      }
    }
  }

  return ans;
}

function greatestLetter(s: string): string {
  const visit = new Set<string>();

  let ans = "";

  for (const ch of s) {
    visit.add(ch);

    const upper = ch.toUpperCase();
    if (visit.has(upper) && visit.has(ch.toLowerCase())) {
      if (ans === "" || upper >= ans) {
        ans = upper;
      }
    }
  }

  return ans;
}

export { greatestLetter };
