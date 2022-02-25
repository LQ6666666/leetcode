function countOperations(num1: number, num2: number): number {
    if (num1 === 0 || num2 === 0) {
        return 0;
    }

    function recursion(count: number, n: number, m: number): number {
        count++;

        if (n === m) {
            return count;
        }

        if (n > m) {
            return recursion(count, n - m, m);
        } else {
            return recursion(count, n, m - n);
        }
    }

    return recursion(0, num1, num2);
};