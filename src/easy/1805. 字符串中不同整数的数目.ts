function numDifferentIntegers(word: string): number {
    word += "a";
    let str = "";
    const set = new Set<string>();
    const re = /[0-9]/;

    for (const ch of word) {
        if (re.test(ch)) {
            str += ch;
        } else if (str !== "") {
            set.add(removeNumStringPrefixZero(str));
            str = "";
        }
    }

    return set.size;

    function removeNumStringPrefixZero(numString: string): string {
        if (numString.charAt(0) === "0") {
            return removeNumStringPrefixZero(numString.slice(1));
        }

        return numString;
    }
};

export { };