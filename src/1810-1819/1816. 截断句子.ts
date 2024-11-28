function truncateSentence(s: string, k: number): string {
    const sArr: string[] = s.split(' ');

    return sArr.slice(0, k).join(' ');
};

