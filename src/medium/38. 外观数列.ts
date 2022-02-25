function countAndSay(n: number): string {
    let str: string = "1";

    for (let i = 2; i <= n; ++i) {
        const sb: string[] = [];
        let start: number = 0;
        let pos: number = 0;

        while (pos < str.length) {
            while (pos < str.length && str[pos] === str[start]) {
                pos++;
            }

            sb.push('' + (pos - start) + str[start]);
            start = pos;
        }

        str = sb.join('');
    }

    return str;
};


console.log(countAndSay(5));

export {
    countAndSay
}

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 第一项是数字 1 
// 描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
// 描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
// 描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
// 描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"
