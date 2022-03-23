function canBeEqual(target: number[], arr: number[]): boolean {
    const map = new Map<number, number>();

    for (const item of target) {
        map.set(item, (map.get(item) ?? 0) + 1);
    }

    for (const item of arr) {
        const value = map.get(item);
        if (value === undefined) return false;

        if (value === 1) {
            map.delete(item);
        } else {
            map.set(item, value - 1);
        }
    }

    return map.size === 0;
};