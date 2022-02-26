function numWays(n: number): number {
    if (n == 0) return 1;
    if (n == 1 || n == 2) return n;

    let first = 1, second = 2, result = 0;
    for (let i = 3; i <= n; i++) {
        result = (first + second) % 1000000007;
        first = second;
        second = result;
    }

    return result;
};