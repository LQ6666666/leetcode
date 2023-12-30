function dayOfTheWeek$(day: number, month: number, year: number): string {
  // 计算之前的年
  let initYear = 1971;

  let current: number = 0;

  while (initYear < year) {
    current += isLeapYear(initYear) ? 366 : 365;
    initYear++;
  }

  const largeMonth: number[] = [1, 3, 5, 7, 8, 10, 12];

  for (let i = 1; i < month; i++) {
    if (i === 2) {
      current += isLeapYear(initYear) ? 29 : 28;
      continue;
    }

    if (largeMonth.includes(i)) {
      current += 31;
    } else {
      current += 30;
    }
  }

  current += day;

  return ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"][
    current % 7
  ];
}

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function dayOfTheWeek(day: number, month: number, year: number): string {
  let totalDay = day;
  for (let i = 1971; i < year; i++) {
    totalDay += isLeapYear(i) ? 366 : 365;
  }

  const largeMonthSet = new Set([1, 3, 5, 7, 8, 10, 12]);
  for (let i = 1; i < month; i++) {
    if (i === 2) {
      totalDay += isLeapYear(year) ? 29 : 28;
    } else {
      totalDay += largeMonthSet.has(i) ? 31 : 30;
    }
  }

  return ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"][
    totalDay % 7
  ];
}

console.log(dayOfTheWeek(31, 8, 2019));
console.log(dayOfTheWeek(18, 7, 1999));
console.log(dayOfTheWeek(15, 8, 1993));

export { dayOfTheWeek };
