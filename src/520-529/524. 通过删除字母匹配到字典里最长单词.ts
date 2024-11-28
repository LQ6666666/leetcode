function findLongestWord(s: string, dictionary: string[]): string {
    dictionary.sort((a, b) => {
        if (b.length === a.length) {
            return b > a ? -1 : 1;
        }

        return b.length - a.length;
    });

    for (const word of dictionary) {
        let i: number = 0, j: number = 0;
        while (i < s.length && j < word.length) {
            if (s[i] === word[j]) {
                j++;
            }

            i++;
        }

        if (j === word.length) {
            return word;
        }
    }

    return "";
};

function test() {
    console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]));
    // console.log(findLongestWord("abpcplea", ["a", "b", "c"]));
}

test();


export { };