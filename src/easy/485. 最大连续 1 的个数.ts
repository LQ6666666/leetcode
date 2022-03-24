function findMaxConsecutiveOnes(nums: number[]): number {
    let ans = 0, count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            count = 0;
        }

        ans = Math.max(count, ans);
    }

    return ans;
};