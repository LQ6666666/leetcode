function minMaxGame(nums: number[]): number {
    const n = nums.length;
    if (n === 1) return nums[0];

    const len = n >>> 1;
    const newNums = new Array(len);

    for (let i = 0; i < len; i++) {
        const index = i * 2;
        const num1 = nums[index], num2 = nums[index + 1];

        if (i % 2 === 0) {
            newNums[i] = Math.min(num1, num2);
        } else {
            newNums[i] = Math.max(num1, num2);
        }
    }

    return minMaxGame(newNums);
};


export { };