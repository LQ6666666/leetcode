function minimumAbsDifference(arr: number[]): number[][] {
    const n = arr.length;

    // 1. 排序
    arr.sort((a, b) => a - b);

    // 2. 计算最小差
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < n; i++) {
        min = Math.min(arr[i] - arr[i - 1], min);
    }

    const ans: number[][] = [];
    for (let i = 1; i < n; i++) {
        const value = arr[i] - arr[i - 1];
        if (value === min) {
            ans.push([arr[i - 1], arr[i]])
        }
    }

    return ans;
}