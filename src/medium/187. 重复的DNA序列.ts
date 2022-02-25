function findRepeatedDnaSequences(s: string): string[] {
    const length: number = s.length;

    if (length <= 10) {
        return [];
    }

    const result: string[] = [];
    const map: Map<string, number> = new Map<string, number>();

    let i = 0;

    while (i !== length - 9) {
        const str: string = s.substring(i, i + 10);

        if (map.has(str)) {
            map.set(str, map.get(str)! + 1);
        } else {
            map.set(str, 0);
        }

        i++;
    }

    map.forEach((value, key) => {
        value > 0 && result.push(key)
    })

    return result;
};

console.time()
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
console.timeEnd()

export { }