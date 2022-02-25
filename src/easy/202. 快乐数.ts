function isHappy(n: number): boolean {
    const set = new Set<number>();
    set.add(n);

    while (n !== 1) {
        let num = 0;
        const s = n.toString();

        for (let i = 0; i < s.length; i++) {
            num = num + Number(s[i]) ** 2;
        }

        n = num;

        if (set.has(n)) {
            return false;
        }

        set.add(n);
    }

    return true;
};