function checkStrings(s1: string, s2: string): boolean {
  const n = s1.length;
  const nums1 = Array.from<number, [number, number]>({ length: 26 }, () => [0, 0]);
  const nums2 = Array.from<number, [number, number]>({ length: 26 }, () => [0, 0]);

  for (let i = 0; i < n; i++) {
    const j = i % 2 === 0 ? 0 : 1;
    nums1[s1[i].charCodeAt(0) - 97][j]++;
    nums2[s2[i].charCodeAt(0) - 97][j]++;
  }

  for (let i = 0; i < 26; i++) {
    if (nums1[i][0] !== nums2[i][0] || nums1[i][1] !== nums2[i][1]) {
      return false;
    }
  }

  return true;
}

export {};
