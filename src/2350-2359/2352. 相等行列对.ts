function equalPairs(grid: number[][]): number {
    const map = new Map<string, number>();
    const n = grid.length;

    // 列序列化
    for (let i = 0; i < n; i++) {
        const col = new Array(n);

        for (let j = 0; j < n; j++) {
            col[i] = grid[j][i];
        }

        const key = col.toString();
        map.set(key, (map.get(key) ?? 0) + 1);
    }

    let ans = 0;
    for (const row of grid) {
        const key = row.toString();
        const value = map.get(key) ?? 0;
        ans += value;
    }

    return ans;
};


export { };