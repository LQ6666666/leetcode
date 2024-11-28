function maxCount(m: number, n: number, ops: number[][]): number {
    let a = m, b = n;

    for (const [x, y] of ops) {
        a = Math.min(a, x);
        b = Math.min(b, y);
    }

    return a * b;
};

console.log(maxCount(3, 3, [[2, 2], [3, 3]]));
console.log(maxCount(4000, 4000, []));