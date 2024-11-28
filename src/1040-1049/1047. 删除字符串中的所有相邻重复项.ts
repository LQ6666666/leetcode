function removeDuplicates(s: string): string {
    const ans: string[] = [];

    for (let i = 0, len = s.length; i < len; i++) {
        if (s[i] === ans[ans.length - 1]) {
            ans.pop();
        } else {
            ans.push(s[i]);
        }
    }

    return ans.join("");
};