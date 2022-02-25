function addStrings(num1: string, num2: string): string {
    let ans = "";
    let carry = 0;
    let i = num1.length - 1, j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry !== 0) {
        const value = Number(num1[i] ?? 0) + Number(num2[j] ?? 0) + carry;
        ans = (value % 10) + ans;
        carry = Math.floor(value / 10);
        i--;
        j--;
    }

    return ans ? ans : "0";
};