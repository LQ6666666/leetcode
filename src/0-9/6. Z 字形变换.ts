function convert(s: string, numRows: number): string {
    if (numRows == 1) return s;

    const rows = (new Array(numRows)).fill("");
    let i = 0;
    let goingDown = false;

    for (const char of s) {
        rows[i] += char;

        // 每次到 顶部 或者 底部 时反转
        if (i === 0 || i === numRows - 1) {
            goingDown = !goingDown;
        }

        // 根据标识绝定时向上还是向下
        i = i + (goingDown ? 1 : -1);
    }

    return rows.reduce((prev, cur) => prev + cur, "");
};



console.log(convert("PAYPALISHIRING", 3));
console.log(convert("AB", 1));

export { };