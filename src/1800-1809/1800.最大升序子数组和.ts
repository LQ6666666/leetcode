function maxAscendingSum(nums: number[]): number {
    const n = nums.length;
    let ans = nums[0], temp = nums[0];
    for (let i = 1; i < n; i++) {
        const num = nums[i];

        if (num > nums[i - 1]) {
            temp += num;
        } else {
            temp = num;
        }

        ans = Math.max(ans, temp);
    }

    return ans;
};

export { };
