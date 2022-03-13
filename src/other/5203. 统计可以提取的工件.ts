function digArtifacts(n: number, artifacts: number[][], dig: number[][]): number {
    const array = Array.from({ length: n }, () => (new Array(n)).fill(false));
    for (const [r, c] of dig) {
        array[r][c] = true;
    }

    let ans = 0;
    for (const [r1, c1, r2, c2] of artifacts) {
        let flag = true;
        for (let i = r1; i <= r2; i++) {
            for (let j = c1; j <= c2; j++) {
                if (array[i][j] === false) {
                    i = j = n;
                    flag = false;
                    break;
                }
            }
        }

        if (flag) {
            ans++;
        }
    }

    return ans;
};

export { };
// console.log(digArtifacts(6,
//     [[0, 2, 0, 5], [0, 1, 1, 1], [3, 0, 3, 3], [4, 4, 4, 4], [2, 1, 2, 4]],
//     [[0, 2], [0, 3], [0, 4], [2, 0], [2, 1], [2, 2], [2, 5], [3, 0], [3, 1], [3, 3], [3, 4], [4, 0], [4, 3], [4, 5], [5, 0], [5, 1], [5, 2], [5, 4], [5, 5]])
// )


console.log(digArtifacts(8,
    [[3, 2, 6, 2], [2, 7, 3, 7], [1, 2, 1, 5], [4, 4, 4, 7], [0, 0, 3, 0], [5, 6, 7, 6], [0, 1, 0, 3], [6, 0, 7, 1], [2, 1, 4, 1], [2, 4, 2, 4], [5, 5, 5, 5], [5, 3, 7, 3], [1, 1, 1, 1], [0, 7, 1, 7]],
    [[0, 0], [0, 1], [0, 3], [0, 4], [0, 5], [0, 6], [1, 4], [1, 6], [2, 2], [2, 4], [2, 5], [3, 0], [3, 1], [3, 2], [3, 5], [3, 6], [4, 0], [4, 1], [4, 2], [4, 6], [5, 1], [5, 2], [5, 4], [5, 7], [6, 0], [6, 3], [6, 4], [6, 6], [7, 5]]
))