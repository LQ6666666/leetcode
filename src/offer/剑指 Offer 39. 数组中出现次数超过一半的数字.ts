function majorityElement(nums: number[]): number {
    if (nums.length < 3) return nums[0];

    const len = nums.length >> 1;
    const map = new Map<number, number>();
    for (const num of nums) {
        if (map.has(num)) {
            const value = map.get(num)! + 1;

            if (value > len) {
                return num;
            }

            map.set(num, value);
        } else {
            map.set(num, 1);
        }
    }

    return nums[0];
};

export { };