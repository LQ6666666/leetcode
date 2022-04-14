function maximumWealth(accounts: number[][]): number {
    let ans = 0;
    for (const account of accounts) {
        const sum = account.reduce((total, cur) => total + cur, 0);
        ans = Math.max(sum, ans);
    }

    return ans
};