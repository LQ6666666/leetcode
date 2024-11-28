function subArrayRanges(nums: number[]): number {
    let ret = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        let max = Number.MIN_SAFE_INTEGER, min = Number.MAX_SAFE_INTEGER;
        for (let j = i; j < n; j++) {
            max = Math.max(nums[j], max);
            min = Math.min(nums[j], min);

            ret = ret + (max - min);
        }
    }

    return ret;
};