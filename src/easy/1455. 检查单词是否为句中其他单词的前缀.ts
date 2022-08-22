/*
function isPrefixOfWord(sentence: string, searchWord: string): number {
    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.startsWith(searchWord)) {
            return i + 1;
        }
    }

    return -1;
};
*/

function isPrefixOfWord(sentence: string, searchWord: string): number {
    sentence += " ";

    let count = 0;
    let temp = "";
    for (const ch of sentence) {
        if (ch === " " && temp) {
            count++;

            if (temp.startsWith(searchWord)) {
                return count;
            }

            temp = "";
        } else {
            temp += ch;
        }
    }

    return -1;
};

export { };