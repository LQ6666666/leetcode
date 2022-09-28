function CheckPermutation(s1: string, s2: string): boolean {
  const n = s1.length;
  if (s1.length !== s2.length) return false;

  const s1Arr = new Array(26).fill(0);
  const s2Arr = new Array(26).fill(0);

  for (let i = 0; i < n; i++) {
    s1Arr[s1[i].charCodeAt(0) - 97]++;
    s2Arr[s2[i].charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    if (s1Arr[i] !== s2Arr[i]) {
      return false;
    }
  }

  return true;
};


export { CheckPermutation };
