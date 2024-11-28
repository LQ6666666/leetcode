function findComplement(num: number): number {
    return parseInt(String(num))
        .toString(2)
        .split('')
        .reduce<number>(
            (prev, cur, index, { length }) => prev + Math.abs(+cur - 1) * (1 << (length - 1 - index)),
            0);
};


console.log(findComplement(5));
console.log(findComplement(2));
