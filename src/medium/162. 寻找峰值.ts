function findPeakElement(nums: number[]): number {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const middle = left + Math.floor((right - left) >> 1);

        if (nums[middle] > nums[middle + 1]) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }

    return left;
};

export { };