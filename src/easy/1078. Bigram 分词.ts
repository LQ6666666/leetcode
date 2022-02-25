function findOcurrences(text: string, first: string, second: string): string[] {
    const result: string[] = [];
    const textArr: string[] = text.split(' ');

    textArr.forEach((word, index) => {
        if (word === first && textArr[index + 1] === second && textArr[index + 2]) {
            result.push(textArr[index + 2]);
        }
    });

    return result;
};


console.log(findOcurrences("alice is a good girl she is a good student", "a", "good"));
console.log(findOcurrences("we will we will rock you", "we", "will"));
console.log(findOcurrences("alice is aa good girl she is a good student", "a", "good"));
console.log(findOcurrences("we we we we will rock you", "we", "we"));