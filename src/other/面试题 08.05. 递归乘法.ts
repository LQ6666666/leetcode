function multiply(A: number, B: number): number {
    if (A === 0 || B === 0) return 0;

    if (A > B) {
        return A + multiply(A, B - 1);
    } else {
        return B + multiply(A - 1, B);
    }
};