function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const middle: number = left + Math.floor((right - left) >> 1);

        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            let l = middle - 1, r = middle + 1;
            // 向左边找
            while (nums[l] === target) l--;
            // 向右边找
            while (nums[r] === target) r++;

            return r - l - 1;
        }
    }

    return 0;
};

export { };