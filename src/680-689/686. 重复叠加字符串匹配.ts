function repeatedStringMatch(a: string, b: string): number {
    let count: number = 1;

    if (a.indexOf(b) > -1) {
        return count;
    }

    const len: number = a.length * 2 + b.length;

    let str: string;

    while ((str = a.repeat(count)) && str.length <= len) {
        if (str.indexOf(b) > -1) {
            return count;
        }

        count++;
    }

    return -1;
};


console.log(repeatedStringMatch("abcd", "cdabcdab"));   //3
console.log(repeatedStringMatch("a", "aa"));   //3
console.log(repeatedStringMatch("a", "a"));   //3
console.log(repeatedStringMatch("abc", "wxyz"));   //3