function addToArrayForm(num: number[], k: number): number[] {
  // k 变成数组
  const arr: number[] = [];
  while (k > 0) {
    arr.unshift(k % 10);
    k = Math.floor(k / 10);
  }

  let i = num.length - 1;
  let j = arr.length - 1;
  let carry = 0;

  const ans: number[] = [];
  while (i >= 0 || j >= 0 || carry !== 0) {
    const sum = (num[i--] ?? 0) + (arr[j--] ?? 0) + carry;
    ans.unshift(sum % 10);
    carry = Math.floor(sum / 10);
  }

  return ans;
}

export { addToArrayForm };
