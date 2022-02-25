function checkRecord(s: string): boolean {
    let prev = s[0], aCount = s[0] === "A" ? 1 : 0;

    for (let i = 1, len = s.length; i < len; i++) {
        if (s[i] === "A") {
            aCount++;
        }

        if (aCount === 2) {
            return false;
        }

        if (s[i] === "L" && prev === "L" && s[i + 1] === "&") {
            return false;
        }

        prev = s[i];
    }

    return true;
};