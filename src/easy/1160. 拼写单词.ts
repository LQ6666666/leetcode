function countCharacters(words: string[], chars: string): number {
    const charMap = getCharMap(chars);
    let ans = 0;

    for (const word of words) {
        const wordMap = getCharMap(word);
        const iterator = wordMap.keys();
        let current = iterator.next();
        let flag = true;

        while (!current.done) {
            const key = current.value;
            const value = charMap.get(key) ?? 0;

            if (value < wordMap.get(key)!) {
                flag = false;
                break;
            }

            current = iterator.next();
        }

        if (flag) {
            ans += word.length;
        }
    }

    return ans;
};


function getCharMap(chars: string): Map<string, number> {
    const charMap = new Map<string, number>();
    for (const ch of chars) {
        charMap.set(ch, (charMap.get(ch) ?? 0) + 1);
    }
    return charMap;
}

export { };