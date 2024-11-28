function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") return "0";
    const l1 = num1.length, l2 = num2.length;

    // 保证 num1 的长度最长
    if (l2 > l1) return multiply(num2, num1);

    if (l1 === 1 || l2 === 1) return oneToMany(num1, num2);

    let ans = "0";

    for (let i = l2 - 1, j = 0; i >= 0; i--, j++) {
        const valueStr = oneToMany(num1, num2.charAt(i));
        const zeroStr = "0".repeat(j);
        const ret = valueStr + zeroStr;

        ans = addStrings(ret, ans);
    }

    return ans;
};

function oneToMany(a: string, b: string): string {
    const len = a.length;
    if (len === 1 && b.length === 1) return oneToOne(a, b);

    if (len === 1) return oneToMany(b, a);


    let ans = "0";

    for (let i = len - 1, j = 0; i >= 0; i--, j++) {
        const valueStr = oneToOne(a.charAt(i), b);
        const zeroStr = "0".repeat(j);
        const ret = valueStr + zeroStr;

        ans = addStrings(ret, ans);
    }

    return ans;
}

function oneToOne(a: string, b: string): string {
    const num1 = +a;
    const num2 = +b;

    if (num2 > num1) return oneToOne(b, a);

    let ans = "0";
    for (let i = 0; i < num1; i++) {
        ans = addStrings(ans, b);
    }

    return ans;
}

function addStrings(num1: string, num2: string): string {
    const l1 = num1.length, l2 = num2.length;
    // 1. 保证 num1 的长度最长
    if (l2 > l1) return addStrings(num2, num1);

    // 2. 给 num2 补 0
    num2 = num2.padStart(l1, "0");

    let ans = "";
    let carry = 0;

    for (let i = l1 - 1; i >= 0; i--) {
        const v1 = +num1[i];
        const v2 = +num2[i];
        const value = carry + v1 + v2;
        carry = Math.floor(value / 10);
        ans = value % 10 + ans;
    }

    if (carry) {
        ans = carry + ans;
    }

    return ans;
}

console.log(multiply("2", "3"));    // 6
console.log(multiply("123", "456"));    // 56088
console.log(multiply("1234", "567"));    // 699678
console.log(multiply("9999", "1111567"));    // 699678

export { };