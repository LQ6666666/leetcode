function minimumChairs(s: string): number {
  let ans = 0;
  let x = 0;
  for (const c of s) {
    if (c === "E") {
      x++;
    } else {
      x--;
    }

    ans = Math.max(ans, x);
  }
  return ans;
}

export { minimumChairs };
