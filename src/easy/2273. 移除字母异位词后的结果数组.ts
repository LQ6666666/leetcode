function removeAnagrams(words: string[]): string[] {
    const n = words.length;
    let pre = "";
    const ans: string[] = [];

    for (let i = 0; i < n; i++) {
        const word = words[i];
        const current = strSort(word)
        if (pre !== current) {
            ans.push(word);
        }
        pre = current;
    }

    return ans;
};

function strSort(str: string): string {
    return str.split("").sort().join("");
}

export { };