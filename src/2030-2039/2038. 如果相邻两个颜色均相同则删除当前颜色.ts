function winnerOfGame(colors: string): boolean {
    let a = 0, b = 0;
    let i = 0, n = colors.length;
    for (; i < n; i++) {
        const current = colors[i], prev = colors[i - 1], next = colors[i + 1];
        if ([current, prev, next].every(c => c === "A")) {
            a++;
        } else if ([current, prev, next].every(c => c === "B")) {
            b++;
        }
    }

    return a > b;
};