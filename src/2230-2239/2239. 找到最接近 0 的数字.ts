function findClosestNumber(nums: number[]): number {
    const n = nums.length;
    let ans = nums[0];

    for (let i = 1; i < n; i++) {
        const item = Math.abs(nums[i]);
        const current = Math.abs(ans);

        if (current > item) {
            ans = nums[i];
        } else if (current === item) {
            ans = Math.max(nums[i], ans);
        }
    }

    return ans;
};

export { };