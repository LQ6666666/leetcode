function addStrings$(num1: string, num2: string): string {
  let ans = "";
  let carry = 0;
  let i = num1.length - 1,
    j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry !== 0) {
    const value = Number(num1[i] ?? 0) + Number(num2[j] ?? 0) + carry;
    ans = (value % 10) + ans;
    carry = Math.floor(value / 10);
    i--;
    j--;
  }

  return ans ? ans : "0";
}

function addStrings$$(num1: string, num2: string): string {
  const l1 = num1.length,
    l2 = num2.length;
  // 1. 保证 num1 的长度最长
  if (l2 > l1) return addStrings(num2, num1);

  // 2. 给 num2 补 0
  num2 = num2.padStart(l1, "0");

  let ans = "";
  let carry = 0;

  for (let i = l1 - 1; i >= 0; i--) {
    const v1 = +num1[i];
    const v2 = +num2[i];
    const value = carry + v1 + v2;
    carry = Math.floor(value / 10);
    ans = (value % 10) + ans;
  }

  if (carry) {
    ans = carry + ans;
  }

  return ans;
}

function addStrings(num1: string, num2: string): string {
  const n = num1.length;
  const m = num2.length;

  let ans = "";
  let carry = 0;
  let i = n - 1,
    j = m - 1;
  while (i >= 0 || j >= 0 || carry !== 0) {
    const a = +(num1[i--] ?? 0);
    const b = +(num2[j--] ?? 0);

    const sum = a + b + carry;
    carry = Math.floor(sum / 10);
    ans = (sum % 10) + ans;
  }

  return ans;
}

export {};
