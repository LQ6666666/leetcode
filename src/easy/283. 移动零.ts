function moveZeroes(nums: number[]): void {
    function swap(i: number, j: number) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    let n = nums.length, left = 0, right = 0;
    while (right < n) {
        if (nums[right] !== 0) {
            swap(left, right);
            left++;
        }
        right++;
    }
};

export { };