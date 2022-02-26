function findNumberIn2DArray(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    if (m === 0) return false;
    const n = matrix[0].length;
    if (n === 0) return false;

    let row = 0, col = n - 1;

    while (row < m && col >= 0) {
        const current = matrix[row][col];
        if (current === target) {
            return true;
        } else if (current > target) {
            // 每行的最后一个是这行最大的
            col--;
        } else {
            row++;
        }
    }

    return false;
};