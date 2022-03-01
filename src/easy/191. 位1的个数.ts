function hammingWeight(n: number): number {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
        ans += ((n >> i) & 1);
    }
    return ans;
};