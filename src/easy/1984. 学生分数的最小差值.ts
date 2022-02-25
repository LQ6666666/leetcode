function minimumDifference(nums: number[], k: number): number {
    let ans = Number.MAX_SAFE_INTEGER;

    nums.sort((a, b) => a - b);

    for (let i = 0, j = k - 1, len = nums.length; i < len;) {
        ans = Math.min(ans, nums[j++] - nums[i++]);
    }

    return ans;
};