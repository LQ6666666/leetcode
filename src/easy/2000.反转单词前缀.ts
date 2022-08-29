export { };

function reversePrefix(word: string, ch: string): string {
    const n = word.length;
    let temp = "";
    let i = 0;

    for (; i < n; i++) {
        const l = word[i];

        temp = l + temp;
        if (l === ch) {
            break;
        }
    }

    if (i === n) return word;

    return temp + word.slice(i + 1);
};