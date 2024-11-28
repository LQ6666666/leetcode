function grayCode(n: number): number[] {
    const ret: number[] = new Array<number>(n);

    for (let i = 0; i < 1 << n; i++) {
        ret[i] = (i >> 1) ^ i;
    }

    return ret;
};

console.log(grayCode(2));
console.log(grayCode(1));
