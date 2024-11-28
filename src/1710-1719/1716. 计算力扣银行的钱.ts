function totalMoney(n: number): number {
    let ans = 0;
    let week = 0;

    for (let i = 0; i < n; i++) {
        if (i % 7 === 0) {
            week++;
        }

        ans += (i % 7) + week;
    }

    return ans;
};


console.log(totalMoney(4)); //10
console.log(totalMoney(10)); // 37
console.log(totalMoney(20)); // 96