function merge(intervals: number[][]): number[][] {
    // 1. 排序
    intervals.sort((a, b) => a[0] - b[0]);

    const ans: number[][] = [];
    ans.push([...intervals[0]]);

    for (let i = 1; i < intervals.length; i++) {
        const item = intervals[i];
        const last = ans[ans.length - 1];

        if (last[1] >= item[0]) {
            if (item[1] > last[1]) {
                last[1] = item[1];
            }
        } else {
            ans.push([...item]);
        }
    }

    return ans;
};
