function modifyString(s: string): string {
    const sArr: string[] = s.split('');

    const calcLetter = (letter: string): string => {
        let code = letter.charCodeAt(0);

        if (code === 97) {
            code++;
        } else {
            code--;
        }

        return String.fromCharCode(code);
    }

    for (const item of Array.from(s.matchAll(/\?/g))) {
        let after = sArr[item.index! + 1]
        let before = sArr[item.index! - 1]

        if (after === '?' || !after) {
            after = 'z';
        }

        if (item.index === 0) {
            sArr[item.index] = calcLetter(after);
        } else if (item.index === s.length - 1) {
            if (before) {
                sArr[item.index] = calcLetter(before);
            } else {
                sArr[item.index] = 'z';
            }

        } else {
            let i = 1

            const aCode = after.charCodeAt(0);
            const bCode = before.charCodeAt(0);

            let letter = calcLetter(after);

            while (letter === after || letter === before) {
                let code = Math.min(aCode, bCode) + i;

                if (code > 122) {
                    code = 97
                }

                letter = calcLetter(String.fromCharCode(code));
                i++;
            }

            sArr[item.index!] = letter
        }
    }

    return sArr.join('');
};

// console.log(modifyString('?zs'));
// console.log(modifyString('ubv?w'));
// console.log(modifyString('j?qg??b'));
// console.log(modifyString('??yw?ipkj?'));
// console.log(modifyString('?ya?byw?ipkj?'));
// console.log(modifyString("j?qg??b"));
// console.log(modifyString("y?z"));
// console.log(modifyString("?a?ub???w?b"));
console.log(modifyString("?"));
