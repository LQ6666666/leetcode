function minAnagramLength(s: string): number {
  const n = s.length;

  // s.length 的因数
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      if (helper(s, i)) {
        return i;
      }
    }
  }

  return n;
}

function helper(s: string, m: number): boolean {
  const n = s.length;
  let prevCount = new Array<number>(26);

  for (let i = 0; i < n; i += m) {
    const count = new Array<number>(26).fill(0);
    for (let j = 0; j < m; j++) {
      count[s.charCodeAt(i + j) - 97]++;
    }
    if (i > 0 && !diff(prevCount, count)) {
      return false;
    }
    prevCount = count;
  }

  return true;
}

function diff(nums1: number[], nums2: number[]): boolean {
  const n = nums1.length;
  for (let i = 0; i < n; i++) {
    if (nums1[i] !== nums2[i]) {
      return false;
    }
  }
  return true;
}

export { minAnagramLength };
