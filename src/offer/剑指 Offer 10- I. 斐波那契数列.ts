// function fib(n: number): number {
//     const MOD = 1000000007;
//     if (n < 2) {
//         return n;
//     }

//     let p = 0, q = 0, r = 1;

//     for (let i = 2; i <= n; ++i) {
//         p = q;
//         q = r;
//         r = (p + q) % MOD;
//     }

//     return r;
// };

function fib(n: number): number {
    if (n < 2) return n;

    const MOD = 1000000007;
    let n1 = 1, n2 = 0, ans = 0;

    for (let i = 2; i <= n; ++i) {
        ans = (n1 + n2) % MOD;

        n2 = n1;
        n1 = ans;
    }

    return ans;
};

export { };