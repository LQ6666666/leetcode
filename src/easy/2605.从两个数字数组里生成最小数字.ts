function minNumber(nums1: number[], nums2: number[]): number {
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

export { minNumber };
