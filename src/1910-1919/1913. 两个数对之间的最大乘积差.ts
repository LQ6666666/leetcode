function maxProductDifference(nums: number[]): number {
    const n = nums.length;

    let min1 = Math.min(nums[0], nums[1]);
    let min2 = Math.max(nums[0], nums[1]);

    let max1 = Math.max(nums[0], nums[1]);
    let max2 = Math.min(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        const num = nums[i];

        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }

        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }

    return (max1 * max2) - (min1 * min2);
};

export { };