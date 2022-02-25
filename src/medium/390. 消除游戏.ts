function lastRemaining(n: number): number {
    let first = 1;
    let step = 1;
    let remain = n;
    let isLeft = true;

    while (remain > 1) {
        if (isLeft || ((remain & 1) == 1)) {
            first += step;
        }

        isLeft = !isLeft;
        step <<= 1;
        remain >>= 1;
    }
    return first;
};


console.log(lastRemaining(9)); // 6
console.log(lastRemaining(1)); // 1
console.log(lastRemaining(6)); // 4
console.log(lastRemaining(10000000)); // 6150102
console.log(lastRemaining(100000000)); // 32896342