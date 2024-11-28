function minMoves2(nums: number[]): number {
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const middle = nums[n >> 1];
    let ans = 0;

    for (const num of nums) {
        ans += Math.abs(num - middle);
    }

    return ans;
};


export { };