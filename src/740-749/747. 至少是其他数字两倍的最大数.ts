function dominantIndex(nums: number[]): number {
    if (nums.length === 1) {
        return 0
    }

    let max = -1;
    let secondMax = -1
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            secondMax = max;
            max = nums[i];
            ans = i;
        } else if (nums[i] > secondMax) {
            secondMax = nums[i]
        }
    }

    return max >= secondMax << 1 ? ans : -1;
};

console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
console.log(dominantIndex([1]));
console.log(dominantIndex([1, 0]));
