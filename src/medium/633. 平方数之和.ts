function judgeSquareSum(c: number): boolean {
    let left = 0, right = Math.floor(Math.sqrt(c));

    while (left <= right) {
        const sum = left * left + right * right;
        if (sum === c) {
            return true;
        } else if (sum > c) {
            right--;
        } else {
            left++;
        }
    }

    return false;
};