function restoreString(s: string, indices: number[]): string {
    const len = s.length;
    const newStr = new Array(len);

    for (let i = 0; i < len; i++) {
        newStr[indices[i]] = s[i];
    }

    return newStr.join('');
};