function toGoatLatin(sentence: string): string {
    sentence += " ";
    const n = sentence.length;

    let ans = "";
    const set = new Set<string>(["a", "e", "i", "o", "u"]);

    let str = "", count = "";
    for (let i = 0; i < n; i++) {
        const current = sentence.charAt(i);

        if (current === " ") {
            if (str === "") continue;

            const part1 = str.charAt(0);
            if (!set.has(part1.toLowerCase())) {
                const part2 = str.slice(1);
                str = part2 + part1;
            }

            ans += str + "ma" + (count = count + "a") + " ";
            str = "";
        } else {
            str += current;
        }
    }

    return ans.slice(0, -1);
};


export { };