function longestCommonPrefix(strs: string[]): string {
    let prefix: string = "";
    let index: number = 0;

    while (true) {
        const str: string | undefined = strs[0]?.[index]

        if (str === undefined) return prefix;

        if (strs.every(item => item[index] === str)) {
            prefix += str;
            index++;
        } else {
            return prefix;
        }

    }
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]));


export { }