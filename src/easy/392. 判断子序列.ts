function isSubsequence(s: string, t: string): boolean {
    let index = -1;

    for (let i = 0, len = s.length; i < len; i++) {
        index = t.indexOf(s[i], index + 1);

        if (index === -1) {
            return false;
        }
    }

    return true;
};

// console.log(isSubsequence("abc", "ahbgdc"));
// console.log(isSubsequence("ab", "baab"));
console.log(isSubsequence("aaaaaa", "bbaaaa"));