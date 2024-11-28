function reversePrefix(word: string, ch: string): string {
    let index = -1;
    let ans = "";
    let len = word.length;

    for (let i = 0; i < len; i++) {
        ans = word[i] + ans;
        if (word[i] === ch) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        return word;
    } else {
        for (; index < len; index++) {
            ans += word[index];
        }
    }

    return ans;
};