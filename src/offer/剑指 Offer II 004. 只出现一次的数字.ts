function singleNumber(nums: number[]): number {
    const map = new Map<number, number>();

    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1);
    }

    const iterator = map.entries();
    let current = iterator.next();
    while (!current.done) {
        const [key, value] = current.value;

        if (value === 1) {
            return key;
        }

        current = iterator.next();
    }

    return -1;
};
export { };