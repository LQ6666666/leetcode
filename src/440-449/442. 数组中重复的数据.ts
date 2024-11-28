function findDuplicates(nums: number[]): number[] {
    const n = nums.length;
    const ans: number[] = [];

    for (let i = 0; i < n; i++) {
        const num = Math.abs(nums[i]);

        if (nums[num - 1] > 0) {
            nums[num - 1] *= -1;
        } else {
            ans.push(num);
        }
    }

    return ans;
};

export { };