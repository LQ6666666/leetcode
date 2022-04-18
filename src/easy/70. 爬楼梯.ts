function climbStairs(n: number): number {
    let first = 0, second = 1;

    for (let i = 1; i <= n; i++) {
        const sum = first + second;
        first = second;
        second = sum;
    }

    return second;
};

export { };