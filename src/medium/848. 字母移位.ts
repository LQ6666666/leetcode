function shiftingLetters(s: string, shifts: number[]): string {
    let ans: string = "";
    const len = s.length;

    function shifting(char: string, num: number): string {
        let code = char.charCodeAt(0) + num;

        code = code - 97;
        code = code % 26;

        return String.fromCharCode(code + 97);
    }

    // 计算每个字母移动的位数
    let x = 0;
    for (let i = len - 1; i >= 0; i--) {
        x += shifts[i];
        ans = shifting(s[i], x) + ans;
    }

    return ans;
};