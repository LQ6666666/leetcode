function dayOfYear(date: string): number {
    const [year, month, day] = date.split('-').map(Number);

    const isLeapYear: boolean = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    const largeMonth: number[] = [1, 3, 5, 7, 8, 10, 12]

    let current: number = 0;

    for (let i = 1; i < month; i++) {
        if (i === 2) {
            current += isLeapYear ? 29 : 28;
            continue;
        }

        if (largeMonth.includes(i)) {
            current += 31;
        } else {
            current += 30
        }
    }

    return current + day;
};


console.log(dayOfYear("2019-01-09"));
console.log(dayOfYear("2019-02-10"));
console.log(dayOfYear("2003-03-01"));
console.log(dayOfYear("2004-03-01"));

