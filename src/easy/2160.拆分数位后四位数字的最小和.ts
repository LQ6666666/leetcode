function minimumSum(num: number): number {
  const arr: number[] = [];
  let x = num;
  while (x > 0) {
    arr.push(x % 10);
    x = Math.floor(x / 10);
  }
  arr.sort((a, b) => a - b);

  let a = "";
  let b = "";

  let i = 0;
  while (i < arr.length) {
    a += arr[i] ?? "";
    b += arr[i + 1] ?? "";
    i += 2;
  }

  return +a + +b;
}

export { minimumSum };
