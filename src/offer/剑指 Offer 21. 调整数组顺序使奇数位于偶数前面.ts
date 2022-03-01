function exchange(nums: number[]): number[] {
    function swap(i: number, j: number) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    let left = 0, right = nums.length - 1;

    while (left < right) {
        // 从前向后找偶数
        while (left < right && nums[left] % 2 !== 0) left++;
        // 从后向前找奇数
        while (left < right && nums[right] % 2 === 0) right--;

        if (left < right) {
            swap(left, right);
        }
    }

    return nums;
};