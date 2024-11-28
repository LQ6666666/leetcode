function longestOnes(nums: number[], k: number): number {
    // 滑动窗口
    const n = nums.length;
    let left = 0, right = 0;
    let current = 0;
    let ans = Number.MIN_SAFE_INTEGER;

    while (right < n) {
        if (nums[right] === 0) {
            current++;
        }

        right++;

        while (current > k) {
            if (nums[left] === 0) {
                --current;
            }

            left++;
        }

        ans = Math.max(ans, right - left);
    }

    return ans;
};


export { };