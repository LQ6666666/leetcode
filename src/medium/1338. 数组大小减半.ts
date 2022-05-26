function minSetSize(arr: number[]): number {
    const n = arr.length;
    const target = n >> 1;
    const note: number[] = [];

    for (let i = 0; i < n; i++) {
        const count = note[arr[i]] ?? 0;
        note[arr[i]] = count + 1;
    }

    note.sort((a, b) => b - a);

    let len = 0;
    let i = 0;
    while (len < target) {
        len += note[i++];
    }

    return i;
};

export { };