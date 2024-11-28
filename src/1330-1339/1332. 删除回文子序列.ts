function removePalindromeSub(s: string): number {
    let sLen = s.length;
    let len = sLen >> 1;

    for (let i = 0; i < len; i++) {
        if (s[i] !== s[sLen - i - 1]) {
            return 2;
        }
    }

    return 1;
};


console.log("ababa");
console.log("abb");
console.log("baabb");

