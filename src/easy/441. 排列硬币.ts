function arrangeCoins(n: number): number {
    let count = 1;
    let total = 1;

    while (total <= n) {
        count++;
        total = total + count;
    }

    return count - 1;
};

console.log(arrangeCoins(5));   // 2
console.log(arrangeCoins(8));   // 3
console.log(arrangeCoins(10));   // 3

export {
    arrangeCoins
}