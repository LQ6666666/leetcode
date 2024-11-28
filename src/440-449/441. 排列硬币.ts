// function arrangeCoins(n: number): number {
//     let count = 1;
//     let total = 1;

//     while (total <= n) {
//         count++;
//         total = total + count;
//     }

//     return count - 1;
// };

// console.log(arrangeCoins(5));   // 2
// console.log(arrangeCoins(8));   // 3
// console.log(arrangeCoins(10));   // 3

function arrangeCoins(n: number): number {
    let left = 1, right = n;

    while (left < right) {
        const middle = left + ((right - left + 1) >> 1);
        if (middle * (middle + 1) <= 2 * n) {
            left = middle;
        } else {
            right = middle - 1;
        }
    }

    return left;
};


export { }; 