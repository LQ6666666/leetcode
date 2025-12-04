function countCollisions(directions: string): number {
  const n = directions.length;

  let ans = 0;
  let flag = false;
  for (let i = 0; i < n; i++) {
    const c = directions[i];
    if (c == "R" || c == "S") {
      flag = true;
    } else if (flag) {
      ans++;
    }
  }

  flag = false;
  for (let i = n - 1; i >= 0; i--) {
    let c = directions[i];
    if (c == "L" || c == "S") {
      flag = true;
    } else if (flag) {
      ans++;
    }
  }

  return ans;
}

export {};
