function minimumOperations(nums: number[]): number {
    let arr: number[] = [];
    let min = Number.MAX_SAFE_INTEGER;

    for (const num of nums) {
        if (num === 0) {
            continue;
        }

        arr.push(num);
        min = Math.min(min, num);
    }

    const n = arr.length;
    if (n === 0) return 0;

    for (let i = 0; i < n; i++) {
        arr[i] -= min;
    }

    return minimumOperations(arr) + 1;
};

export { };