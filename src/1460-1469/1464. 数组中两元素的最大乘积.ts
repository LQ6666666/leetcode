export { };

function maxProduct(nums: number[]): number {
    const n = nums.length;

    let first = nums[0], second = nums[1];
    if (second > first) {
        let temp = first;
        first = second;
        second = temp;
    }

    for (let i = 2; i < n; i++) {
        const num = nums[i];

        if (num > first) {
            second = first;
            first = num;
        } else if (num > second) {
            second = num;
        }
    }

    return (first - 1) * (second - 1);
};