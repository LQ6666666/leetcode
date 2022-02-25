
function bulbSwitch(n: number): number {
    // 3 个 1, 5 个 2, 7 个 3 ...
    let ans = 0;

    for (let i = 1; i * i <= n; i++) {
        ans++;
    }

    return ans;
};



export {
    bulbSwitch
};