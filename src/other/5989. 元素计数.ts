function countElements(nums: number[]): number {
    let min = nums[0], max = -Infinity;
    const map = new Map<number, number>();

    for (const num of nums) {
        if (num < min) {
            min = num;
        } else if (num > max) {
            max = num;
        }

        if (map.has(num)) {
            map.set(num, map.get(num)! + 1);
        } else {
            map.set(num, 1);
        }
    }

    map.delete(min);
    map.delete(max);

    let ans = 0;
    map.forEach(v => ans += v);

    return ans;
};