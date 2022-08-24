export { };

function isStraight(nums: number[]): boolean {
    nums.sort((a, b) => a - b);

    let zeroCount = 0, diff = 0;
    for (let i = 0; i < 4; i++) {
        const num = nums[i];
        if (num === 0) {
            zeroCount++;
        } else {
            if (num === nums[i + 1]) return false;

            if (num + 1 !== nums[i + 1]) {
                diff += nums[i + 1] - nums[i] - 1;
            }
        }
    }
    return zeroCount >= diff;
};