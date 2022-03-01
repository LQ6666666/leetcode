function myPow(x: number, n: number): number {
    if (n === 0) return 1;
    // 负数
    if (n < 0) return 1 / myPow(x, -n);
    // 奇数
    if (n & 1) return x * myPow(x, n - 1);
    // 偶数
    return myPow(x * x, n / 2);
};