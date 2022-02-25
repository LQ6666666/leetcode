// 137
function longestPalindrome1(s: string): string {
    // 判断是不是回文字符串
    const isPalindrome = (str: string): boolean => {
        const strLen = str.length

        if (strLen === 1) {
            return true;
        }

        for (let i = 0, len = strLen >> 1; i < len; i++) {
            if (str[i] === str[strLen - i - 1]) {
                continue;
            }

            return false;
        }

        return true
    }

    if (isPalindrome(s)) {
        return s;
    }

    const sLength = s.length;
    const set: Set<string> = new Set<string>();

    // 计算所有组合
    for (let i = 0; i < sLength; i++) {
        for (let j = i; j < sLength; j++) {
            set.add(s.slice(i, j + 1))
        }
    }

    let ans = s.charAt(0);

    set.forEach((value) => {
        if (isPalindrome(value) && value.length > ans.length) {
            ans = value
        }
    });

    return ans;
};

// 12
function longestPalindrome(s: string): string {
    // 判断是不是回文字符串
    const isPalindrome = (str: string): boolean => {
        const strLen = str.length

        if (strLen === 1) {
            return true;
        }

        for (let i = 0, len = strLen >> 1; i < len; i++) {
            if (str[i] === str[strLen - i - 1]) {
                continue;
            }

            return false;
        }

        return true
    }

    if (isPalindrome(s)) {
        return s;
    }

    const sLength = s.length;

    let ans = s.charAt(0);

    // 计算所有组合
    for (let i = 0; i < sLength; i++) {
        for (let j = i; j < sLength; j++) {
            const str = s.slice(i, j + 1)

            // if (str.length < ans.length) {
            //     continue;
            // }

            if (isPalindrome(str) && str.length > ans.length) {
                ans = str
            }
        }
    }

    return ans;
};

// console.log(longestPalindrome("babad"));//  bab
// console.log(longestPalindrome("cbbd"));//  bb
// console.log(longestPalindrome("a"));//  a
// console.log(longestPalindrome("ac"));//  a
// console.log(longestPalindrome("bb"));//  bb
// console.log(longestPalindrome("abb"));//  bb
// console.log(longestPalindrome("bacabab"));//  bacab

const start = performance.now();
console.log(longestPalindrome(`uwqrvqslistiezghcxaocjbhtktayupazvowjrgexqobeymperyx
tfkchujjkeefmdngfabycqzlslocjqipkszmihaarekosdkwvsirz
xpauzqgnftcuflzyqwftwdeizwjhloqwkhevfovqwyvwcrosexhflkcudycvuelv
vqlbzxoajisqgwgzhioomucfmkmyaqufqggimzpvggdohgxheielsqucemxrkmmagozxhv
xlwvtbbcegkvvdrgkqszgajebbobxnossfrafglxvryhvyfcibfkgpbsorqprfujfgbmbctsen
vbzcvypcjubsnjrjvyznbswqawodghmigdwgijfytxbgpxreyevuprpztmjejkaqyhppchuuytkdste
roptkouuvmkvejfunmawyuezxvxlrjulzdikvhgxajohpzrshrnngesarimyopgqydcmsaciegqlpqnclpwcjq
mhtmtwwtbkmtnntdllqbyyhfxsjyhugnjbebtxeljytoxvqvrxygmtogndrhlcmbmgiueliyfkkcuypvvzkomjrf
huhhnfbxeuvssvvllgukdolffukzwqaimxkngnjnmsbvwkajyxqntsqjkjqvwxnlxwjfiaofejtjcveqstqhdzgqis
txwsgrovvwgorjaoosremqb
zllgbgrwtqdggxnyvkivlcvnv`));// qjkjq
const end = performance.now();

console.log(end - start);

