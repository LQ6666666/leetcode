// function fib(n: number): number {
//     if (n === 0 || n === 1) {
//         return n;
//     }

//     return fib(n - 1) + fib(n - 2);
// };

function fib(n: number): number {
    if (n == 0) return 0;
    if (n <= 2) return 1;

    let first = 0;
    let second = 1;
    let i = 0;

    while (i++ < n - 1) {
        let sum = first + second;
        first = second;
        second = sum;
    }

    return second;
};