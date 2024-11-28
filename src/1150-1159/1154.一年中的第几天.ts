function dayOfYear$(date: string): number {
  const [year, month, day] = date.split("-").map(Number);

  const isLeapYear: boolean = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  const largeMonth: number[] = [1, 3, 5, 7, 8, 10, 12];

  let current: number = 0;

  for (let i = 1; i < month; i++) {
    if (i === 2) {
      current += isLeapYear ? 29 : 28;
      continue;
    }

    if (largeMonth.includes(i)) {
      current += 31;
    } else {
      current += 30;
    }
  }

  return current + day;
}

const isLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
const LargeMonthSet = new Set([1, 3, 5, 7, 8, 10, 12]);

function dayOfYear(date: string): number {
  const [year, month, day] = date.split("-").map(Number);
  let ans = day;

  for (let i = 1; i < month; i++) {
    if (i === 2) {
      ans += isLeapYear(year) ? 29 : 28;
    } else {
      ans += LargeMonthSet.has(i) ? 31 : 30;
    }
  }

  return ans;
}

export { dayOfYear };
