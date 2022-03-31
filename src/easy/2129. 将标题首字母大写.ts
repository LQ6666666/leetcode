function capitalizeTitle(title: string): string {
    const n = title.length;
    let ans: string = "";

    if (n === 0) return ans;

    let i = 0;
    while (i < n) {
        let index = title.indexOf(" ", i);

        if (index === -1) {
            index = n;
        }

        const word = title.slice(i, index);
        if (ans !== "") ans += " ";

        if (word.length < 3) {
            ans += word.toLowerCase();
        } else {
            const first = word.charAt(0).toUpperCase();
            const rest = word.slice(1).toLowerCase();
            ans += first + rest;
        }

        i = index + 1;
    }

    return ans;
};

export { };