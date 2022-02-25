function minimumCost(cost: number[]): number {
    const cLen = cost.length;
    let ans = 0;

    if (cLen < 3) {
        for (const p of cost) {
            ans += p;
        }

        return ans;
    }

    cost.sort((a, b) => b - a);

    for (let i = 0; i < cLen; i += 3) {
        const a = cost[i] ?? 0;
        const b = cost[i + 1] ?? 0;
        ans = ans + a + b;
    }

    return ans;
};