function strStr1(haystack: string, needle: string): number {
    if (needle === haystack) return 0;
    if (haystack === '') return -1;
    if (needle === '') return 0;

    const strArr = haystack.split('');
    const needleArr = needle.split('');
    const strLength = strArr.length;
    const needleArrLength = needleArr.length;

    if (needleArrLength > strLength) {
        return -1;
    }

    for (let i = 0; i < strLength; i++) {
        if (strArr[i] === needleArr[0]) {
            let str = strArr.slice(i, needleArrLength + i).join('')

            // for(let j = 0; j < needleArrLength; j++) {
            //     str += strArr[i + j];
            // }

            if (str === needle) {
                return i;
            }
        }
    }

    return -1
};

function strStr(haystack: string, needle: string): number {
    const n = haystack.length, m = needle.length;

    for (let i = 0; i + m <= n; i++) {
        let flag = true;

        for (let j = 0; j < m; j++) {
            if (haystack[i + j] !== needle[j]) {
                flag = false;
                break;
            }
        }

        if (flag) {
            return i;
        }
    }
    return -1;
};

console.time();
console.log(strStr("hello", "ll"));
console.timeEnd();

export {
    strStr1,
    strStr
}