function hasAlternatingBits(n: number): boolean {
    let prev = -1;

    while (n > 0) {
        const cur = n % 2;
        if (cur === prev) {
            return false;
        }
        prev = cur;
        n = n >> 1;
    }

    return true;
};