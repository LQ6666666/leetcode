function thousandSeparator1(n: number): string {
    const sArr = n.toString().split("");

    for (let i = sArr.length - 3; i > 0; i = i - 3) {
        sArr.splice(i, 0, ".");
    }

    return sArr.join("");
};

function thousandSeparator(n: number): string {
    if (n === 0) return "0";
    let ans = "";

    while (n !== 0) {
        const remainder = n % 1000;
        const result = Math.floor(n / 1000);

        if (result > 0) {
            const s = remainder.toString().padStart(3, "0");
            ans = "." + s + ans;
        } else {
            ans = n + ans;
        }

        n = result;
    }

    return ans
};

export { };