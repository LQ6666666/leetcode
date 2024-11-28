function luckyNumbers(matrix: number[][]): number[] {
    const m = matrix.length, n = matrix[0].length;
    const minRow: number[] = (new Array(m)).fill(Number.MAX_SAFE_INTEGER);
    const maxCol: number[] = (new Array(n)).fill(Number.MIN_SAFE_INTEGER);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            minRow[i] = Math.min(matrix[i][j], minRow[i]);
            maxCol[j] = Math.max(matrix[i][j], maxCol[j]);
        }
    }

    const ans: number[] = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === minRow[i] && matrix[i][j] === maxCol[j]) {
                ans.push(minRow[i]);
            }
        }
    }

    return ans;
};