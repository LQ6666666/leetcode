function addDigits(num: number): number {
    const str: string = num.toString();

    if (str.length === 1) {
        return num;
    }

    return addDigits(str.split("").reduce((prev, cur) => +prev + +cur, 0));
};