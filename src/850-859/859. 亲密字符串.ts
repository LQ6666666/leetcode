function buddyStrings(s: string, goal: string): boolean {

    if (s.length !== goal.length) {
        return false;
    }

    const sArr: string[] = s.split('');

    if (s === goal) {
        if (s.length === 1) {
            return false;
        }

        // 判断是不是 aaaaa 这种
        if (sArr.every(c => c === s[0])) {
            return true;
        } else {
            const arr = new Set(sArr);

            if (arr.size === s.length) {
                return false;
            }

            return arr.size !== sArr.length;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === goal[i]) {
            continue;
        }

        const counter = sArr.filter(v => v === goal[i])

        if (counter.length === 0) {
            return false;
        }

        const indexs: number[] = [];

        // 找到 goal[i] 得地方
        for (let j = 0; j < counter.length; j++) {
            const index: number = s.substr(indexs[indexs.length - 1] + 1).indexOf(goal[i]);
            indexs.push(index);
        }

        for (let j = 0; j < indexs.length; j++) {
            const index = indexs[j];

            const arr = s.split('');
            const temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;

            if (arr.join('') === goal) {
                return true
            }
        }
    }

    return false;
};

console.log(buddyStrings('ab', 'ba'));// true
console.log(buddyStrings('ab', 'ab'));// false
console.log(buddyStrings('aa', 'aa'));// true
console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb'));// true
console.log(buddyStrings("abab", 'abab'));// true
console.log(buddyStrings("abcd", "abcd"));// true
console.log(buddyStrings("abcacaba", "abbacaca"));// true

