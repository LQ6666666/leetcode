function areNumbersAscending(s: string): boolean {
    s += " ";

    const set = new Set<string>(Array.from({ length: 10 }, (_, i) => i.toString()));

    let prev = Number.MIN_SAFE_INTEGER;
    let strNum = "";

    for (const item of s) {
        if (set.has(item)) {
            strNum += item;
        } else if (strNum !== "") {
            if (+strNum > prev) {
                prev = +strNum;
                strNum = "";
            } else {
                return false;
            }
        }
    }

    return true;
};