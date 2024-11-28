function longestWord(words: string[]): string {
    words.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return b.localeCompare(a);
        }
    })

    let longest = "";
    const set = new Set<string>([""]);

    for (const word of words) {
        if (set.has(word.slice(0, word.length - 1))) {
            set.add(word);
            longest = word;
        }
    }

    return longest;
};


// ["w","wo","wor","worl","world"]
// ["a","banana","app","appl","ap","apply","apple"]
// ["a","banana","app","appl","ap","applal","applel","applall","appllell"]
// ["a","banana","app","appl","ap","apply","apple"]
// ["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"]
console.log(longestWord(["m", "mo", "moc", "moch", "mocha", "l", "la", "lat", "latt", "latte", "c", "ca", "cat"])); // latte