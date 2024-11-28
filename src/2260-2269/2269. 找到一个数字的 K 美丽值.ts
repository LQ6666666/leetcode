function divisorSubstrings(num: number, k: number): number {
    const s = num.toString();
    const n = s.length;
    let ans = 0;
    const len = n - k + 1;

    for (let i = 0; i < len; i++) {
        const value = +s.slice(i, i + k);
        if (value !== 0 && num % value === 0) {
            ans++;
        }
    }

    return ans;
};

export { };