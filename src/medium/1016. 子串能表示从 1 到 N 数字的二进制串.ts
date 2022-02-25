function queryString(s: string, n: number): boolean {
    for (let i = 1; i <= n; i++) {
        const binaryStr = i.toString(2);

        if (s.indexOf(binaryStr) === -1) {
            return false;
        }
    }

    return true;
};