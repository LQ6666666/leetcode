function findRightInterval(intervals: number[][]): number[] {
    const n = intervals.length;
    const starts = new Array<number>(n);
    const startsMap = new Map<number, number>();

    // 1. 拷贝（记录位置即可）
    for (let i = 0; i < n; i++) {
        starts[i] = intervals[i][0];
        startsMap.set(starts[i], i);
    }

    // 2. 排序
    starts.sort((a, b) => a - b);

    // 3. 遍历 + 二分
    const ans: number[] = new Array<number>(n);

    for (let i = 0; i < n; i++) {
        const [, end] = intervals[i];
        const index = binarySearch(starts, end);
        ans[i] = (index == -1 ? -1 : startsMap.get(starts[index])) ?? -1;
    }

    return ans;
};


function binarySearch(arr: number[], target: number): number {
    if (target > arr[arr.length - 1]) return -1;

    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const middle = left + ((right - left) >> 1);

        if (arr[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return left;
}

export { };