function selfDividingNumbers(left: number, right: number): number[] {
    const ret: number[] = [];

    for (let i = left; i <= right; i++) {
        if (check(i)) {
            ret.push(i);
        }
    }

    return ret;
};

function check(num: number): boolean {
    let temp = num;
    while (temp !== 0) {
        const p = temp % 10;

        if (p === 0 || num % p !== 0) {
            return false;
        }

        temp = Math.floor(temp / 10);
    }

    return true;
}


export { };