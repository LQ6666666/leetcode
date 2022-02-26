function replaceSpace(s: string): string {
    let ans = "";

    for (const char of s) {
        if (char === " ") {
            ans += "%20"
        } else {
            ans += char;
        }
    }

    return ans;
};