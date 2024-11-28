function runningSum(nums: number[]): number[] {
    const len = nums.length;
    const ans = new Array(len);
    let sum = 0;

    for (let i = 0; i < len; i++) {
        ans[i] = sum + nums[i];
        sum = ans[i];
    }

    return ans;
};