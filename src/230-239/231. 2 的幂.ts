function isPowerOfTwo(n: number): boolean {
    if (n === 0) return false;
    if (n === 1) return true;

    if (n % 2 === 0) {
        return isPowerOfTwo(Math.floor(n / 2));
    } else {
        return false;
    }
};