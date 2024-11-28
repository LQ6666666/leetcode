function arrayChange(nums: number[], operations: number[][]): number[] {
    const n = operations.length, m = nums.length;
    // 1. 对 nums 的 下标做映射
    const map = new Map<number, number>();
    for (let i = 0; i < m; i++) {
        map.set(nums[i], i);
    }

    for (let i = 0; i < n; i++) {
        // 根据 key 找到 下标，然后赋值
        const [key, value] = operations[i];
        const index = map.get(key);
        if (index === undefined) continue;
        nums[index] = value;
        // 更新数组下标
        map.set(nums[index], index);
    }

    return nums;
};

export { };