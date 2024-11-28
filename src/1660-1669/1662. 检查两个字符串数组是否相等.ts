function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    const l1 = word1.length;
    const l2 = word2.length;
    // 指针偏移对比
    let index = 0, flag = 0;

    for (let i = 0; i < l1; i++) {
        const s = word1[i];
        for (let j = 0; j < s.length; j++) {
            if (index === l2) {
                return false;
            }

            const w1 = s[j];
            const w2 = word2[index][flag];
            if (w1 === w2) {
                flag++;
                if (flag === word2[index].length) {
                    flag = 0;
                    index++;
                }

                continue;
            } else {
                return false;
            }
        }
    }

    if (word2.length > index) {
        return false;
    }

    return true;
};

export { };