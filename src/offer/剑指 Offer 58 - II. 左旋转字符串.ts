function reverseLeftWords(s: string, n: number): string {
    let left = "", right = "";

    let i = 0;
    for (; i < n; i++) {
        left += s[i];
    }

    for (; i < s.length; i++) {
        right += s[i];
    }

    return right + left;
};