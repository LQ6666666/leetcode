function imageSmoother(img: number[][]): number[][] {
    const m = img.length, n = img[0].length;
    const ans = Array.from({ length: m }, () => new Array<number>(n));
    const positions = [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1], [-1, -1], [-1, 1], [1, -1], [1, 1]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 计算四周的平均值
            let count = 0;
            let sum = 0;

            for (const [x, y] of positions) {
                let nx = i + x, ny = j + y;
                if (nx < 0 || nx >= m || ny < 0 || ny >= n) {
                    continue
                }
                sum += img[nx][ny];
                count++;
            }

            ans[i][j] = Math.floor(sum / count);
        }
    }

    return ans;
};