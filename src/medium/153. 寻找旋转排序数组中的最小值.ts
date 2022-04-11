function findMin(nums: number[]): number {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const middle = left + ((right - left) >> 1);
        if (nums[middle] < nums[right]) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return nums[left];
};

export { };