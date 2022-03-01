function movingCount(m: number, n: number, k: number): number {
    // 用来记录有没有访问过的数组
    const array = Array.from({ length: m }, () => Array.from({ length: n }, () => false));

    function calc(a: number, b: number): boolean {
        const sum = Math.floor(a / 10) + a % 10 + Math.floor(b / 10) + b % 10;
        return sum > k;
    }

    function dfs(i: number, j: number): number {
        if (array[i]?.[j] === undefined || array[i][j] === true) return 0;
        if (calc(i, j) === true) return 0;

        array[i][j] = true;
        const res = dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);

        return res + 1;
    }

    return dfs(0, 0);
};