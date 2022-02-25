function maxDepth(s: string): number {
    let max = 0
    let counter = 0;

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (c === "(") {
            counter++;
        }
        
        if (c === ")") {
            counter--;
        }

        if (max < counter) {
            max = counter;
        }

    }

    return max;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+"));    // 3
console.log(maxDepth("(1)+((2))+(((3)))"));    // 3
console.log(maxDepth("1+(2*3)/(2-1)"));    // 1
console.log(maxDepth("s"));    // 0