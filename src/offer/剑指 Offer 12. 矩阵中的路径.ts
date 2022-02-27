function exist(board: string[][], word: string): boolean {
    function dfs(i: number, j: number, index: number): boolean {
        if (board[i]?.[j] === undefined) return false;
        // 如果这个元素被访问过了或者不等于 word就直接返回 false
        if (board[i][j] !== word[index] || board[i][j] === "") return false;
        // 元素相等
        if (index++ === word.length - 1) return true;
        // 先把元素改成 ""，dfs 之后在改回去
        let temp = board[i][j];
        board[i][j] = "";
        const res: boolean = dfs(i + 1, j, index) || dfs(i - 1, j, index) || dfs(i, j + 1, index) || dfs(i, j - 1, index);
        board[i][j] = temp;

        return res;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
};