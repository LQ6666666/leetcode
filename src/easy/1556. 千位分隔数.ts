function thousandSeparator(n: number): string {
    const sArr = n.toString().split("");

    for (let i = sArr.length - 3; i > 0; i = i - 3) {
        sArr.splice(i, 0, ".");
    }

    return sArr.join("");
};