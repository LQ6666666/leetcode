function canReorderDoubled(arr: number[]): boolean {
    const map = new Map();
    for (const item of arr) {
        map.set(item, (map.get(item) ?? 0) + 1);
    }

    if ((map.get(0) ?? 0) % 2 !== 0) {
        return false;
    }

    const values: number[] = [];
    const iterator = map.keys();
    let current = iterator.next();
    while (!current.done) {
        values.push(current.value);

        current = iterator.next();
    }

    values.sort((a, b) => Math.abs(a) - Math.abs(b));

    for (const value of values) {
        if ((map.get(value * 2) ?? 0) < map.get(value)) {
            return false;
        }

        map.set(2 * value, (map.get(2 * value) || 0) - map.get(value));
    }

    return true;
};