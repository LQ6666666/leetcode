class WordDictionary {
    wordMap: Map<string, Set<string>>;

    constructor() {
        this.wordMap = new Map<string, Set<string>>();
    }

    addWord(word: string): void {
        const headChar = word.charAt(0);

        if (this.wordMap.has(headChar)) {
            this.wordMap.get(headChar)!.add(word);
        } else {
            this.wordMap.set(headChar, new Set<string>([word]));
        }
    }

    search(word: string): boolean {
        if (word.includes('.')) {
            const wordLength = word.length;
            const words: string[] = [];

            for (const item of Array.from(this.wordMap.values())) {
                Array.prototype.push.apply(words, Array.from(item).filter(({ length }) => length === wordLength))
            }

            if (words.length === 0) {
                return false;
            }

            const positions = [...Array.from(word.matchAll(/\./g))].map(({ index }) => index);

            return words.map(str => {
                const strArr = str.split('');

                for (const index in positions) {
                    strArr[positions[index]!] = ".";
                }

                return strArr.join('');
            }).includes(word);
        }

        const headChar = word.charAt(0);

        if (!this.wordMap.has(headChar)) {
            return false
        }

        return this.wordMap.get(headChar)!.has(word);
    }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");

console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True
console.log(wordDictionary.search("b...")); // return True


export {
    WordDictionary
}