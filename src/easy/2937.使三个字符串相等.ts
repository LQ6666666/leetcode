function findMinimumOperations(s1: string, s2: string, s3: string): number {
  const n = Math.min(s1.length, s2.length, s3.length);
  let index = -1;
  for (let i = 0; i < n; i++) {
    if (s1[i] === s2[i] && s2[i] === s3[i]) {
      index = i;
    } else {
      break;
    }
  }

  if (index == -1) return -1;

  return s1.length + s2.length + s3.length - 3 * (index + 1);
}

export { findMinimumOperations };
