function projectionArea(grid: number[][]): number {
    const n = grid.length;
    let ans1 = 0, ans2 = 0, ans3 = 0;
    for (let i = 0; i < n; i++) {
        let a = 0, b = 0;
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) ans1++;

            a = Math.max(a, grid[i][j]);
            b = Math.max(b, grid[j][i]);
        }

        ans2 += a;
        ans3 += b;
    }
    return ans1 + ans2 + ans3;
};

export { };