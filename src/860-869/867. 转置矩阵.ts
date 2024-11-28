function transpose(matrix: number[][]): number[][] {
    const rLen = matrix.length, cLen = matrix[0].length;
    const ans: number[][] = Array.from({ length: cLen }, () => new Array(rLen));

    for (let i = 0; i < rLen; i++) {
        for (let j = 0; j < cLen; j++) {
            ans[j][i] = matrix[i][j];
        }
    }

    return ans;
};