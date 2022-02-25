function detectCapitalUse(word: string): boolean {
    const upperCaseReg: RegExp = /^[A-Z]+$/;
    const lowerCaseReg: RegExp = /^[a-z]+$/;

    // 全部是大写字母
    if (upperCaseReg.test(word)) {
        return true;
    }

    // 全部是小写字母
    if (lowerCaseReg.test(word)) {
        return true;
    }

    // 首字母是大写字母，其他都是小写字母
    if (/^[A-Z]$/.test(word[0])) {
        return lowerCaseReg.test(word.substr(1));
    } else {
        return false;
    }
};