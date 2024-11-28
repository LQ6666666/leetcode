export { };

function numSpecial(mat: number[][]): number {
    const n = mat.length, m = mat[0].length;

    const row = new Array<number>(n).fill(0);
    const col = new Array<number>(m).fill(0);

    // 记录行和列 1 的个数
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const item = mat[i][j];
            row[i] += item;
            col[j] += item;
        }
    }

    let  ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (mat[i][j] === 1 && row[i] === 1 && col[j] === 1) {
                ans++;
            }
        }
    }

    return ans;
};