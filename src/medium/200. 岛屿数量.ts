function numIslands(grid: string[][]): number {
    function dfs(arr: string[][], row: number, col: number) {
        arr[row][col] = "0";
        if (arr[row + 1]?.[col] === "1") {
            dfs(arr, row + 1, col);
        }

        if (arr[row - 1]?.[col] === "1") {
            dfs(arr, row - 1, col);
        }

        if (arr[row]?.[col + 1] === "1") {
            dfs(arr, row, col + 1);
        }

        if (arr[row]?.[col - 1] === "1") {
            dfs(arr, row, col - 1);
        }
    }

    let ans = 0;
    for (let i = 0, rLen = grid.length; i < rLen; i++) {
        for (let j = 0, cLen = grid[0].length; j < cLen; j++) {
            if (grid[i][j] === "1") {
                ans++;
                dfs(grid, i, j);
            }
        }
    }

    return ans;
};