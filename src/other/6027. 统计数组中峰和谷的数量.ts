function countHillValley(nums: number[]): number {
    nums = nums.reduce<number[]>((prev, cur) => {
        if (prev[prev.length - 1] !== cur) {
            prev.push(cur);
        }

        return prev;
    }, []);

    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            count++;
        } else if (nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) {
            count++;
        }
    }

    return count;
};