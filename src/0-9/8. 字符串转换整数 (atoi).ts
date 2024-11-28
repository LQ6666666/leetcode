function myAtoi(s: string): number {
    let str = s.trimStart()

    if (str.length === 0) {
        return 0;
    }

    const firstChar = str.charAt(0)

    // 判断第一位不是 数字 或者 + - 直接 return 0
    if (!/([0-9+-])/.test(firstChar)) {
        return 0;
    }

    let res: string = "+";
    if (firstChar === "-") {
        res = "-";
        str = str.slice(1, str.length)
    } else if (firstChar === "+") {
        str = str.slice(1, str.length)
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (!/[0-9]/.test(char)) {
            break
        }

        res += char;
    }

    if (res.length === 1) {
        return 0;
    }

    const ans = Number(res);

    let boundary = 1 << 31

    if (ans < 1 << 31) {
        return boundary;
    }

    boundary = ~boundary;
    if (ans > boundary) {
        return boundary;
    }

    return ans;
};

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));
