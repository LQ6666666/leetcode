// map + 排序
function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    // 1. 记录每个元素的个数
    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1);
    }

    // 2. 给每个元素排序
    const keys = Array.from(map.keys());
    keys.sort((a, b) => map.get(b)! - map.get(a)!);

    return keys.slice(0, k);
};

export { };