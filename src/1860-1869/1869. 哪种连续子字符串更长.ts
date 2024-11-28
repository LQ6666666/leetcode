function checkZeroOnes(s: string): boolean {
    let maxOneLen = 0, oneLen = 0;
    let maxZeroLen = 0, zeroLen = 0;
    let prev: string = s[0];

    if (s[0] === "0") {
        maxZeroLen = 1;
        zeroLen = 1;
    } else {
        maxOneLen = 1;
        oneLen = 1;
    }

    for (let i = 1, len = s.length; i < len; i++) {
        if (s[i] === prev) {
            if (s[i] === "0") {
                zeroLen++;
            } else {
                oneLen++;
            }
        } else {
            prev = s[i];
            if (s[i] === "0") {
                zeroLen = 1;
                oneLen = 0;
            } else {
                zeroLen = 0;
                oneLen = 1;
            }
        }

        maxZeroLen = Math.max(maxZeroLen, zeroLen);
        maxOneLen = Math.max(maxOneLen, oneLen);
    }

    return maxOneLen > maxZeroLen;
};