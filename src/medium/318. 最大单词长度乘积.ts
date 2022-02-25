function maxProduct(words: string[]): number {
    let result: number = 0;

    for (let i = 0, len = words.length; i < len; i++) {
        const word: string = words[i];
        const wordSetLen = (new Set<string>(word.split(''))).size;

        for (let j = i + 1; j < len; j++) {
            // 判断 word 是否有 words[j] 的字母
            const str: string = words[j].concat(word);
            // 两边都先去重
            const length: number = (new Set<string>(words[j].split(''))).size;
            // 然后最后在去重
            const strStrLen: number = new Set<string>(str.split('')).size;

            if (strStrLen === (wordSetLen + length)) {
                const mul = words[j].length * word.length;

                if (result < mul) {
                    result = mul;
                }
            }
        }
    }
    return result;
}

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
console.log(maxProduct(["eae", "ea", "aaf", "bda", "fcf", "dc", "ac", "ce", "cefde", "dabae"]));
