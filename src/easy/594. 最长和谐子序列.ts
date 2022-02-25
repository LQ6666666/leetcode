function findLHS(nums: number[]): number {
    const map: Map<number, number> = new Map<number, number>();

    nums.forEach(num => {
        if (map.has(num)) {
            map.set(num, map.get(num)! + 1);
        } else {
            map.set(num, 1);
        }
    });

    let result = 0;
    // 找到相差为 1 的 key
    const keys = Array.from<number>(map.keys()).sort((a, b) => a - b);

    for (let i = 0; i < keys.length - 1; i++) {

        if (keys[i + 1] - keys[i] !== 1) {
            continue;
        }

        const size = map.get(keys[i])! + map.get(keys[i + 1])!;

        if (size > result) {
            result = size
        }
    }

    return result;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([1, 2, 3, 4]));
console.log(findLHS([1, 1, 1, 1]));
