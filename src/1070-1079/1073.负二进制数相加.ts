function addNegabinary(arr1: number[], arr2: number[]): number[] {
  const num1 = getDecimal(arr1);
  const num2 = getDecimal(arr2);
  return getBinary(num1 + num2);
}

function getDecimal(arr: number[]) {
  const n = arr.length;
  let res = 0n;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      res += BigInt((-2) ** (n - i - 1));
    }
  }
  return res;
}

function getBinary(num: bigint): number[] {
  const result: number[] = [];
  if (num === 0n) return [0];

  while (num) {
    const reminder = Math.abs(Number(num % -2n));
    result.push(reminder);
    num = (num - BigInt(reminder)) / -2n;
  }

  return result.reverse();
}

export { addNegabinary };
