function canThreePartsEqualSum(arr: number[]): boolean {
    const total = arr.reduce((prev, cur) => prev + cur);
    if (total % 3 !== 0) return false;

    const target = total / 3;
    const n = arr.length;

    let count = 2, current = 0;
    for (let i = 0; i < n; i++) {
        current += arr[i];
        if (current === target) {
            count--;

            if (count === 0) {
                return i !== n - 1;
            }

            current = 0;
        }
    }

    return false;
};


export { };