function countKDifference(nums: number[], k: number): number {
    let ans: number = 0;
    const map = new Map<number, number>();

    for (let i = 0, len = nums.length; i < len; i++) {
        const num: number = nums[i];

        ans = ans + (map.get(num - k) ?? 0) + (map.get(num + k) ?? 0)

        map.set(num, (map.get(num) ?? 0) + 1);
    }

    return ans;
};