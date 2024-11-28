function exist(board: string[][], word: string): boolean {
    const m = board.length, n = board[0].length;
    const targetLength = word.length;

    const firstCh = word.charAt(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const item = board[i][j];

            if (item === firstCh) {
                if (dfs(i, j, 0)) {
                    return true;
                }
            }
        }
    }

    return false;

    function dfs(i: number, j: number, index: number): boolean {
        if (i >= m || j >= n || i < 0 || i < 0) return false;
        const current = board[i][j];
        if (current === "") return false;
        if (current !== word.charAt(index)) return false;

        index++;
        if (index === targetLength) return true;
        board[i][j] = "";

        const result = dfs(i + 1, j, index) || dfs(i - 1, j, index) || dfs(i, j + 1, index) || dfs(i, j - 1, index);
        board[i][j] = current;

        return result;
    }
};


export { };