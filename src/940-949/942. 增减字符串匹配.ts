function diStringMatch(s: string): number[] {
    const ans: number[] = [];
    let l = 0, r = s.length;

    for (const ch of s) {
        if (ch === "I") {
            ans.push(l++);
        } else {
            ans.push(r--);
        }
    }

    ans.push(l);

    return ans;;
};

export { };