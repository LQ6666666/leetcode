function maximumDifference(nums: number[]): number {
    let ans = -1;
    let min = nums[0];

    for (const num of nums) {
        if (num > min) {
            ans = Math.max(num - min, ans);
        } else if (num < min) {
            min = num;
        }
    }

    return ans;
};