export { };

function findLongestChain(pairs: number[][]): number {
    pairs.sort(([, a], [, b]) => a - b);

    const n = pairs.length;
    let count = 1, prev = pairs[0][1];

    for (let i = 0; i < n; i++) {
        if (pairs[i][0] > prev) {
            count++;
            prev = pairs[i][1];
        }
    }

    return count;
};