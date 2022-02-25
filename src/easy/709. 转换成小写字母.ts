function toLowerCase(s: string): string {
    const sArr = s.split("");
    const iterator = s.matchAll(/[A-Z]/g);

    let letter = iterator.next();

    while (!letter.done) {
        sArr[letter.value.index!] = String.fromCharCode(letter.value[0].charCodeAt(0) + 32);

        letter = iterator.next();
    }

    return sArr.join("");
};

console.log(toLowerCase('HelLo'));
