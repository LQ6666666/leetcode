// 滑动窗口
function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k < 2) return 0;

    const n = nums.length;
    let start = 0, end = 0;

    let res = 1;
    let count = 0;
    while (end < n) {
        res *= nums[end];

        while (res >= k) {
            res /= nums[start];
            start++;
        }

        count += end - start + 1;
        end++;
    }

    return count;
};

export { }