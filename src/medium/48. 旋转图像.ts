function rotate(matrix: number[][]): void {
    const n = matrix.length;
    const copy: typeof matrix = Array.from({ length: n }, () => new Array(n));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            copy[j][n - i - 1] = matrix[i][j];
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = copy[i][j];
        }
    }
};

export { };