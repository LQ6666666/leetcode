function countNegatives(grid: number[][]): number {
    const m = grid.length, n = grid[0].length;
    let ans = 0;

    for (let i = 0; i < m; i++) {
        const row = grid[i];

        // 如果这一行第一个都小于 0
        if (row[0] < 0) {
            return ans + (m - i) * n;
        }

        // 开始二分查找 < 0 的第一个数
        const index = binarySearch(row);
        if (index === -1) {
            continue;
        }

        ans += n - index;
    }

    return ans;
};

function binarySearch(arr: number[]): number {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const middle = left + ((right - left) >> 1);
        if (arr[middle] >= 0) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return arr[left] > 0 ? -1 : left;
}

export { };