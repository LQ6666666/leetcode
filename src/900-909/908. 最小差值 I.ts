function smallestRangeI(nums: number[], k: number): number {
    // 找到最大值和最小值
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    for (const item of nums) {
        max = Math.max(max, item);
        min = Math.min(min, item);
    }

    return Math.max(0, max - min - 2 * k);
};


export { };