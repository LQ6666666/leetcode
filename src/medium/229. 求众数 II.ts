function majorityElement1(nums: number[]): number[] {
    let count: number = Math.floor(nums.length / 3);

    const map: { [key: number]: number } = {};

    for (const item of nums) {
        if (map[item]) {
            map[item]++;
        } else {
            map[item] = 1;
        }
    }

    const result: number[] = [];
    for (const [key, value] of Object.entries(map)) {
        if (value > count) {
            result.push(+key);
        }
    }

    return result;
};

export { };

function majorityElement(nums: number[]): number[] {
    const count: number = Math.floor(nums.length / 3);

    const map: Map<number, number> = new Map<number, number>();

    for (const item of nums) {
        if (map.has(item)) {
            map.set(item, map.get(item)! + 1);
        } else {
            map.set(item, 1);
        }
    }

    const result: number[] = [];

    map.forEach((value, key) => {
        if (value > count) {
            result.push(key);
        }
    });

    return result;
};



console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]));
