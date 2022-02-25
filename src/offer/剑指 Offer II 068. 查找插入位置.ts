function searchInsert(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const middle = left + Math.floor((right - left) >> 1);

        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        }
    }

    return left;
};