function isLongPressedName(name: string, typed: string): boolean {
    const nameLength = name.length;
    const typedLength = typed.length;

    if (nameLength > typedLength) {
        return false;
    }

    let i = 0, j = 0;

    while (j < typedLength) {
        if (i < nameLength && name[i] === typed[j]) {
            i++;
            j++;
        } else if (j > 0 && typed[j] === typed[j - 1]) {
            j++;
        } else {
            return false;
        }
    }

    return i === nameLength;
};


export { };