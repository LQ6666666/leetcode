function shortestCompletingWord(licensePlate: string, words: string[]): string {
    const map: Map<string, number> = new Map<string, number>();

    const str: string[] = Array.from(licensePlate.matchAll(/[A-Za-z]/g), ([letter]) => {
        const ltr: string = letter.toLocaleLowerCase();

        if (map.has(ltr)) {
            map.set(ltr, map.get(ltr)! + 1);
        } else {
            map.set(ltr, 1);
        }

        return ltr;
    });

    // 判断这个单词是否包含当前的所有字母
    const isIncludes = (word: string): boolean => {
        return str.every(letter => {
            let index: number = 0;

            for (let i = 0; i < map.get(letter)!; i++) {
                const idx: number = word.indexOf(letter, index);

                if (idx === -1) {
                    return false;
                }

                index = idx + 1;
            }

            return true;
        })
    };

    const [word]: string[] = words.filter(isIncludes).sort((a, b) => a.length - b.length);

    return word;
};



console.log(shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]));


// console.log(
//     shortestCompletingWord(
//         'Ah71752',
//         ["suggest", "letter", "of", "husband", "easy", "education", "drug", "prevent", "writer", "old"]
//     )
// );
