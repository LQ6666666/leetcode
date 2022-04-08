function kWeakestRows(mat: number[][], k: number): number[] {
    const m = mat.length;
    // 放每一行大小
    const ret: [number, number][] = new Array(m);

    for (let i = 0; i < m; i++) {
        // 计算每行数量
        const count = binarySearch(mat[i]) + 1;
        ret.push([i, count]);
    }
    // 按每行数量排序
    ret.sort(([, a], [, b]) => a - b);
    // 取出前 k 个
    let ans = new Array(k);
    for (let i = 0; i < k; i++) {
        ans[i] = ret[i][0];
    }

    return ans;
};

function binarySearch(arr: number[]) {
    let left = 0, right = arr.length - 1;
    let ans = -1;

    while (left <= right) {
        const middle = left + ((right - left) >> 1);
        if (arr[middle] > 0) {
            ans = middle;
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return ans;
}

export { };