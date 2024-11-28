function mostFrequent(nums: number[], key: number): number {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key && nums[i + 1] !== undefined) {
            map.set(nums[i + 1], (map.get(nums[i + 1]) ?? 0) + 1);
        }
    }

    let ret = 0, max = Number.MIN_SAFE_INTEGER;
    map.forEach((value, key) => {
        if (value > max) {
            max = value;
            ret = key;
        }
    });

    return ret;
};