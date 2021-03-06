function findLucky(arr: number[]): number {
    const map = new Map<number, number>();

    // 1. 记录每个数字次数
    for (const num of arr) {
        map.set(num, (map.get(num) ?? 0) + 1);
    }

    let ans = -1;
    for (const num of arr) {
        const count = map.get(num)!;

        if (num === count) {
            ans = Math.max(num, ans);
        }
    }

    return ans;
};


export { };