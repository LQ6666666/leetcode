function daysBetweenDates(date1: string, date2: string): number {
  return Math.abs(dateToInt(date1) - dateToInt(date2));
}

const monthLength: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function leapYear(year: number): boolean {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

function dateToInt(date: string): number {
  const [year, mouth, day] = date.split("-").map(Number);

  let res = day;
  for (let i = 1971; i < year; i++) {
    res += leapYear(i) ? 366 : 365;
  }

  for (let i = 0; i < mouth - 1; i++) {
    res += monthLength[i];
  }

  if (leapYear(year) && mouth > 2) {
    res++;
  }

  return res;
}

export { daysBetweenDates };
