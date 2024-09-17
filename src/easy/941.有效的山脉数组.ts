function validMountainArray(arr: number[]): boolean {
  const n = arr.length;
  if (n < 3) return false;

  let flag = 0;
  for (let i = 1; i < n; i++) {
    if (flag === 0) {
      if (arr[i] <= arr[i - 1]) {
        flag = 1;
      }
    } else {
      if (arr[i] >= arr[i - 1]) {
        return false;
      }
    }
  }

  return arr[0] < arr[1] && arr[n - 2] > arr[n - 1];
}

export { validMountainArray };
