function findLeastNumOfUniqueInts(arr: number[], k: number): number {
    const map = new Map<number, number>();
    for (const item of arr) {
        map.set(item, (map.get(item) ?? 0) + 1);
    }

    arr.sort((a, b) => map.get(a)! - map.get(b)!);

    const set = new Set<number>();
    for (const item of arr) {
        set.add(item);

        if (set.size === k) {
            break;
        }
    }

    let iterator = set.values();
    let item = iterator.next();
    while (!item.done && k > 0) {
        const count = map.get(item.value)!;

        if (count <= k) {
            k = k - count;
            map.delete(item.value)
        } else {
            break;
        }

        item = iterator.next();
    }

    return map.size;
};