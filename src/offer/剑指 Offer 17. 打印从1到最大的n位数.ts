function printNumbers(n: number): number[] {
    const length = Number("1".padEnd(n + 1, "0")) - 1;

    const ans = new Array<number>(length);

    for (let i = 0; i < length; i++) {
        ans[i] = i + 1;
    }

    return ans;
};