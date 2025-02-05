function checkIfCanBreak(s1: string, s2: string): boolean {
  const arr1 = s1
    .split("")
    .map(c => c.charCodeAt(0))
    .sort((a, b) => a - b);
  const arr2 = s2
    .split("")
    .map(c => c.charCodeAt(0))
    .sort((a, b) => a - b);

  return helper(arr1, arr2) || helper(arr2, arr1);
}

function helper(arr1: number[], arr2: number[]): boolean {
  const n = arr1.length;

  for (let i = 0; i < n; i++) {
    if (arr1[i] < arr2[i]) {
      return false;
    }
  }

  return true;
}

export { checkIfCanBreak };
