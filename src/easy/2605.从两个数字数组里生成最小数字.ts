function minNumber$(nums1: number[], nums2: number[]): number {
  const mapA = new Array<boolean>(10).fill(false);
  const mapB = new Array<boolean>(10).fill(false);
  for (const num of nums1) {
    mapA[num] = true;
  }
  for (const num of nums2) {
    mapB[num] = true;
  }

  let minA = 10;
  let minB = 10;
  for (let i = 1; i < 10; i++) {
    if (mapA[i] && mapB[i]) {
      return i;
    }

    if (mapA[i]) {
      minA = Math.min(minA, i);
    }

    if (mapB[i]) {
      minB = Math.min(minB, i);
    }
  }

  return minA < minB ? minA * 10 + minB : minB * 10 + minA;
}

function minNumber(nums1: number[], nums2: number[]): number {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  let min1 = Infinity;
  let min2 = Infinity;
  for (let i = 1; i < 10; i++) {
    if (set1.has(i) && set2.has(i)) {
      return i;
    }

    if (min1 === Infinity && set1.has(i)) {
      min1 = i;
    }

    if (min2 === Infinity && set2.has(i)) {
      min2 = i;
    }
  }

  const a = Math.min(min1, min2);
  const b = Math.max(min1, min2);
  return a * 10 + b;
}

export { minNumber };
