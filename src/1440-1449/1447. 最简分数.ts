function simplifiedFractions(n: number): string[] {
    const ans: string[] = [];

    function gcd(a: number, b: number): number {
        if (b === 0) {
            return a;
        }

        return gcd(b, a % b);
    }

    for (let i = 2; i <= n; i++) {
        ans.push(`1/${i}`)
        for (let j = 1; j < i; j++) {
            if (gcd(j, i) === 1) {
                ans.push(`${j}/${i}`)
            }
        }
    }

    return ans;
};