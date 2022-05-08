function missingNumber(nums: number[]): number {
    // 如果发生了错位，就知道在前还是在后面
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const middle = left + ((right - left) >> 1);

        if (middle === nums[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return left;
};

export { };