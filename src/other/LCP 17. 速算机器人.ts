function calculate(s: string): number {
    let x = 1, y = 0;

    for (const directive of s) {
        if (directive === "A") {
            x = 2 * x + y;
        } else {
            y = 2 * y + x;
        }
    }

    return x + y;
};