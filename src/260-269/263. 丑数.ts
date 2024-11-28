// 丑数 就是只包含质因数 2、3 和/或 5 的正整数。
function isUgly(n: number): boolean {
    if (n <= 0) {
        return false;
    }

    while (n % 2 === 0) n = n >> 1;
    while (n % 3 === 0) n = Math.floor(n / 3);
    while (n % 5 === 0) n = Math.floor(n / 5);

    return n === 1;
};