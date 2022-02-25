function lengthOfLastWord(s: string): number {
    let len = s.length;
    let i = len - 1;

    while (i >= 0) {
        if (s[i] !== " ") {
            const index = s.lastIndexOf(" ", i);

            if (index === -1) {
                break;
            } else {
                return i - index;
            }
        }

        i--;
    }

    return i + 1;
};