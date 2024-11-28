function duplicateZeros(arr: number[]): void {
    // 辅助数组
    const ans: number[] = [];
    const n = arr.length;

    for (const item of arr) {
        if (item === 0) {
            ans.push(item);
        }

        ans.push(item);
    }

    for (let i = 0; i < n; i++) {
        arr[i] = ans[i];
    }
};

export { };