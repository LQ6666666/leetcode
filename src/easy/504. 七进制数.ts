function convertToBase7(num: number): string {
    if (num === 0) return "0";

    let ans = "";
    const flag = num < 0;
    num = Math.abs(num);

    while (num !== 0) {
        ans = num % 7 + ans;
        num = Math.floor(num / 7);
    }

    if (flag) {
        ans = "-" + ans;
    }

    return ans;
};