function canMakeArithmeticProgression(arr: number[]): boolean {
    arr.sort((a, b) => a - b);

    const diff = arr[1] - arr[0];

    for (let i = 1, len = arr.length - 1; i < len; i++) {
        if (arr[i] + diff !== arr[i + 1]) {
            return false;
        }
    }

    return true;
};