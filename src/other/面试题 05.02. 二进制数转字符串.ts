function printBin(num: number): string {
    if (num <= 0 || num >= 1) return "ERROR";

    let ans = "0.";
    while (ans.length < 33) {
        num = num * 2;

        if (num === 1) {
            return ans += 1;
        } else if (num > 1) {
            ans += 1;
            num--;
        } else {
            ans += 0;
        }
    }

    return "ERROR";
};