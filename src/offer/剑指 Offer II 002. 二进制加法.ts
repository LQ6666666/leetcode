function addBinary(a: string, b: string): string {
    if (a === "0") return b;
    if (b === "0") return a;

    let ans = "";
    let carry = 0;
    let i = a.length - 1, j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const s1 = globalThis.parseInt(a[i--] ?? "0");
        const s2 = globalThis.parseInt(b[j--] ?? "0");
        carry = s1 + s2 + carry;
        ans = (carry % 2) + ans;
        carry = Math.floor(carry / 2);
    }

    return ans;
}

export { };