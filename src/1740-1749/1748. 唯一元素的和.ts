function sumOfUnique(nums: number[]): number {
    let ans = 0;
    const map = new Map<number, number>();

    for (const num of nums) {
        if (map.has(num) === false) {
            map.set(num, 1);
            ans += num;
        } else if (map.get(num) === 1) {
            map.set(num, 2);
            ans -= num;
        }
    }

    return ans;
};