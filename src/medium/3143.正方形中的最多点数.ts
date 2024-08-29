function maxPointsInsideSquare(points: number[][], s: string): number {
  let left = 0;
  let right = 1_000_000_001;
  let ans = 0;
  const n = points.length;

  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    if (check(middle)) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return ans;

  function check(size: number): boolean {
    let vis = 0;

    for (let i = 0; i < n; i++) {
      const [x, y] = points[i];
      if (Math.abs(x) > size || Math.abs(y) > size) {
        continue;
      }

      const c = s.codePointAt(i)! - 97;
      if (((vis >> c) & 1) === 1) {
        return false;
      }

      vis |= 1 << c;
    }

    ans = bitCount(vis);
    return true;
  }
}

function bitCount(num: number) {
  let ans = 0;
  while (num) {
    if ((num & 1) === 1) {
      ans++;
    }
    num >>= 1;
  }
  return ans;
}

export {};
