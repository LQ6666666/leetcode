function generate(numRows: number): number[][] {
    if (numRows === 1) return [[1]];
    const ret: number[][] = [[1]];

    for (let i = 2; i <= numRows; i++) {
        const temp: number[] = [];
        const preRow = ret[i - 2];

        for (let j = 0; j < i; j++) {
            const a = preRow[j - 1] ?? 0;
            const b = preRow[j] ?? 0;
            temp.push(a + b)
        }

        ret.push(temp);
    }

    return ret;
};