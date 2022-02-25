function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const strLen: number = s.length;
    const sMap: Map<string, number> = new Map<string, number>();
    const tMap: Map<string, number> = new Map<string, number>();

    for (let i = 0; i < strLen; i++) {
        const sLetter = s[i];
        const tLetter = t[i];

        sMap.set(sLetter,
            sMap.has(sLetter)
                ? sMap.get(sLetter)! + 1
                : 1
        )

        tMap.set(tLetter,
            tMap.has(tLetter)
                ? tMap.get(tLetter)! + 1
                : 1
        )
    }
    
    for (const key of Array.from(sMap.keys())) {
        if (sMap.get(key) !== tMap.get(key)) {
            return false
        }
    }

    return true;
};


console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
