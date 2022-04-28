function pacificAtlantic(heights: number[][]): number[][] {
    const m = heights.length, n = heights[0].length;
    const pacific = Array.from<boolean>({ length: m }).map(() => new Array<boolean>(n));
    const atlantic = Array.from<boolean>({ length: m }).map(() => new Array<boolean>(n));

    const dfs = (x: number, y: number, ocean: boolean[][]): void => {
        // 访问过的直接 return
        if (ocean[x][y]) return;

        // 镖旗成访问过
        ocean[x][y] = true;
        const current = heights[x][y];

        // 向上
        if (x - 1 >= 0) {
            if (current <= heights[x - 1][y]) {
                dfs(x - 1, y, ocean);
            }
        }

        // 向下
        if (x + 1 < m) {
            if (current <= heights[x + 1][y]) {
                dfs(x + 1, y, ocean);
            }
        }

        // 向左
        if (y - 1 >= 0) {
            if (current <= heights[x][y - 1]) {
                dfs(x, y - 1, ocean);
            }
        }

        // 向右
        if (y + 1 < n) {
            if (current <= heights[x][y + 1]) {
                dfs(x, y + 1, ocean);
            }
        }
    }

    // 以 这个数组四周 开始 bfs
    // 第一列
    for (let i = 0; i < m; i++) {
        dfs(i, 0, pacific);
    }

    // 第一行
    for (let i = 1; i < n; i++) {
        dfs(0, i, pacific);
    }

    // 最后一列
    for (let i = 0; i < m; i++) {
        dfs(i, n - 1, atlantic);
    }

    // 最后一行
    for (let i = 0; i < n - 1; i++) {
        dfs(m - 1, i, atlantic);
    }

    const ans: number[][] = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                ans.push([i, j]);
            }
        }
    }

    return ans;
};

export { };