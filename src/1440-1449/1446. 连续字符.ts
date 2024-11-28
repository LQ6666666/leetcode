function maxPower(s: string): number {
    const len = s.length;
    if (len < 2) return len;

    let maxLen = 1;
    for (let i = 0; i < len;) {
        const letter = s[i];

        let index = i + 1;
        let temp = 1;
        while (s[index] === letter) {
            temp++;
            index++;
        };

        if (temp > maxLen) {
            maxLen = temp;
        }

        i = index;
    }

    return maxLen;
};