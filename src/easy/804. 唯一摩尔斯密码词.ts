function uniqueMorseRepresentations(words: string[]): number {
    const map = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    const cache: Record<string, string> = {};

    function calc(word: string) {
        const exist = cache[word]
        if (exist) {
            return exist;
        }

        let result = "";
        for (const letter of word) {
            result += map[letter.charCodeAt(0) - 97];
        }

        cache[word] = result;
        return result;
    }

    const ans = new Set<string>();

    for (const word of words) {
        ans.add(calc(word));
    }

    return ans.size;
};



export { };