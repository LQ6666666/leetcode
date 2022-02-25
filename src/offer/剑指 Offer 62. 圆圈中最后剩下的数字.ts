function lastRemaining1(n: number, m: number): number {
    const arr: number[] = Array.from({ length: n }, (_, i) => i);

    let index: number = m - 1;

    while (arr.length !== 1) {
        while (index >= arr.length) {
            index = index - arr.length
        }

        arr.splice(index, 1);

        index = index + m - 1;
    }

    return arr[0];
};

function lastRemaining2(n: number, m: number): number {
    const set: Set<number> = new Set<number>(Array.from({ length: n }, (_, i) => i));

    let index: number = m - 1;
    while (set.size !== 1) {
        index = (index + m - 1) % set.size

        set.delete(index);
    }

    return Array.from(set.values())[0];
};

function lastRemaining(n: number, m: number): number {
    function _recursion(n: number, m: number): number {
        if (n == 1) {
            return 0;
        }

        const x = _recursion(n - 1, m);
        return (m + x) % n;
    }

    return _recursion(n, m);
};

// console.log(lastRemaining(5, 3));
console.time()
// console.log(lastRemaining(61470, 105136));
console.log(lastRemaining(82002, 120659));
console.timeEnd()


export { }