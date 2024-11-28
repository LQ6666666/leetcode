function findMiddleIndex(nums: number[]): number {
    const n = nums.length;
    const total = nums.reduce((prev, cur) => prev + cur);

    let sum = 0;
    for (let i = 0; i < n; i++) {
        const item = nums[i];

        if (((sum * 2) + item) === total) {
            return i;
        }

        sum += item;
    }

    return -1;
};

export { };