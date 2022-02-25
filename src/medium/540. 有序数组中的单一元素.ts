function singleNonDuplicate(nums: number[]): number {
    let i = 0, j = 1;
    const len = nums.length;

    while (j < len) {
        if (nums[i] !== nums[j]) {
            return nums[i];
        }

        i += 2;
        j += 2;
    }

    return nums[0];
};