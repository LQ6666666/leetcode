export { };

function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
    const map = new Map<number, number>();

    for (const [value, weight] of items1) {
        map.set(value, weight);
    }

    for (const [value, weight] of items2) {
        const newWeight = (map.get(value) ?? 0) + weight;
        map.set(value, newWeight);
    }

    const keys = Array.from(map.keys()).sort((a, b) => a - b);
    const n = keys.length;
    const ret = new Array<number[]>(n);

    for (let i = 0; i < n; i++) {
        ret[i] = [keys[i], map.get(keys[i])!];
    }

    return ret;
};