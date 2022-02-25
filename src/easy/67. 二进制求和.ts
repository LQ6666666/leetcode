function addBinary(a: string, b: string): string {
    const maxLen = Math.max(a.length, b.length);

    a = a.padStart(maxLen, "0");
    b = b.padStart(maxLen, "0");

    let ans = "";
    let carry = 0;

    for (let i = maxLen - 1; i >= 0; i--) {
        const res = +a[i] + +b[i] + carry;

        if (res === 3) {
            carry = 1;
            ans = "1" + ans;
        }

        if (res === 2) {
            carry = 1;
            ans = "0" + ans;
        }

        if (res === 1) {
            carry = 0;
            ans = "1" + ans;
        }

        if (res === 0) {
            carry = 0;
            ans = "0" + ans;
        }
    }

    if (carry > 0) {
        ans = carry + ans;
    }

    return ans;
};


console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011")); //  10101
