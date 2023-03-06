function minimumDeletions(s: string): number {
  const n = s.length;
  let leftB = 0,
    rightA = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === "a") {
      rightA++;
    }
  }

  let ans = rightA;
  for (let i = 0; i < n; i++) {
    if (s[i] === "a") {
      rightA--;
    } else {
      leftB++;
    }
    ans = Math.min(ans, leftB + rightA);
  }

  return ans;
}

export { minimumDeletions };
