function getSum(a: number, b: number): number {
    // 没有进位 a ^ b
    // 进位 (a & b) << 1
    while (b !== 0) {
        const carry: number = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a
};

console.log(getSum(5, 3));
