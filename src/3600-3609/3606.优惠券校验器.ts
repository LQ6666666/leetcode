const businessLineMap = new Map([
  ["electronics", 0],
  ["grocery", 1],
  ["pharmacy", 2],
  ["restaurant", 3]
]);

function isValidCode(code: string): boolean {
  for (const c of code) {
    const x = c.charCodeAt(0);
    if (x === 95 || (x >= 97 && x <= 122) || (x >= 65 && x <= 90) || (x >= 48 && x <= 57)) {
      continue;
    }
    return false;
  }
  return code.length > 0;
}

function validateCoupons(code: string[], businessLine: string[], isActive: boolean[]): string[] {
  const n = code.length;
  const group: string[][] = Array.from({ length: 4 }, () => []);

  for (let i = 0; i < n; i++) {
    if (isValidCode(code[i]) && businessLineMap.has(businessLine[i]) && isActive[i]) {
      group[businessLineMap.get(businessLine[i])!].push(code[i]);
    }
  }

  for (const arr of group) {
    arr.sort((a, b) => (a < b ? -1 : 1));
  }

  return group.flat(1);
}

export {};
