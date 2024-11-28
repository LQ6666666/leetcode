// 滑动窗口
function minSubArrayLen(target: number, nums: number[]): number {
    const n = nums.length;
    if (n === 0) return 0;

    let ans = Number.MAX_SAFE_INTEGER;
    let start = 0, end = 0, sum = 0;

    while (end < n) {
        sum += nums[start];

        while (sum >= target) {
            ans = Math.min(end - start + 1, ans);

            sum -= nums[start];
            start++;
        }

        end++;
    }

    return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
};

export { };