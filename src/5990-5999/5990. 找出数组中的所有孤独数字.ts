function findLonely(nums: number[]): number[] {
    const map = new Map<number, number>();
    const ans: number[] = [];

    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num)! + 1)
        } else {
            map.set(num, 1);
        }
    }

    map.forEach((value, key) => {
        if (value > 1) {
            return;
        }

        if (map.has(key + 1) || map.has(key - 1)) {
            return;
        }

        ans.push(key);
    });

    return ans;
};