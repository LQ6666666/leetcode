function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineArr = magazine.split('');

    for (let i = 0; i < ransomNote.length; i++) {
        const letter = ransomNote[i];
        const index = magazineArr.indexOf(letter);

        if (index === -1) {
            return false;
        } else {
            magazineArr.splice(index, 1);
        }
    }

    return true;
};


console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));
