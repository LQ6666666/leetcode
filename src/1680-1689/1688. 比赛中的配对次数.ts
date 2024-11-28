function numberOfMatches(n: number): number {
    let ans: number = 0;

    while (n > 1) {

        if (n % 2 === 0) {
            n = n >> 1;
            ans += n;
        } else {
            ans += (n - 1) >> 1;
            n = ((n - 1) >> 1) + 1;
        }
    }

    return ans;
};