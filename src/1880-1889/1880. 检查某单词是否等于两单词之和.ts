function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
    // 1. 生成映射表
    const map = new Map<string, string>();
    for (let i = 0; i < 26; i++) {
        map.set(String.fromCharCode(97 + i), i.toString());
    }
    // 2. 计算每个单词的数值
    return (calcWordSum(firstWord) + calcWordSum(secondWord)) === calcWordSum(targetWord);

    function calcWordSum(word: string): number {
        let ret: string = "";
        for (const ch of word) {
            ret += map.get(ch)!;
        }

        return Number(ret);
    }
};


console.log(isSumEqual("acb", "cba", "cdb"));

export { };