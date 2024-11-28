function maxRepeating(sequence: string, word: string): number {
    let count = 0;
    let s = word;

    while (sequence.includes(s)) {
        count++;
        s = s + word;
    }

    return count;
};

export { };