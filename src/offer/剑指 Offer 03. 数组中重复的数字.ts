function findRepeatNumber(nums: number[]): number {
    const set = new Set<number>();

    for (const num of nums) {
        if (set.has(num)) {
            return num;
        } else {
            set.add(num);
        }
    };


    return nums[0];
};