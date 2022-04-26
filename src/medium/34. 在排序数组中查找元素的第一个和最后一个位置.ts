function searchRange(nums: number[], target: number): number[] {
    let left = binarySearch(nums, target);
    let right = binarySearch(nums, target + 1, left) - 1;

    if (nums[left] !== target) {
        left = -1;
    }

    if (nums[right] !== target) {
        right = -1;
    }

    return [left, right];
};

function binarySearch(nums: number[], target: number, start = 0) {
    let left = start, right = nums.length - 1;

    while (left <= right) {
        const middle = left + ((right - left) >> 1);

        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return left;
}

export { };