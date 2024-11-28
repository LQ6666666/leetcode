function minMoves(nums: number[]): number {
    let min: number = nums[0];
    let sum: number = 0;

    for (const num of nums) {
        sum += num;
        if (num < min) {
            min = num;
        }
    }

    // 最大数 * 数组长度 - 数组和
    return sum - min * nums.length;
};


console.log(minMoves([1, 2, 3]));
console.log(minMoves([1,1,1000000000]));
