function checkIfExist(arr: number[]): boolean {
    const set = new Set();
    let zeroCount = 0;

    for (const item of arr) {
        if (item === 0) zeroCount++;

        set.add(item);
    }

    if (zeroCount > 1) return true;

    for (const item of arr) {
        if (item === 0) continue;

        if (set.has(item << 1)) {
            return true;
        }
    }

    return false;
};

export { };