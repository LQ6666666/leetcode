function isOneBitCharacter(bits: number[]): boolean {
    for (let i = 0, len = bits.length; i < len; i++) {
        if (i === len - 1) {
            return true;
        }

        if (bits[i] === 1) {
            i++;
        }
    }

    return false;
};