function evaluate(s: string, knowledge: string[][]): string {
    let ans = "";
    const map = new Map<string, string>();
    for (const item of knowledge) {
        map.set(item[0], item[1]);
    }

    let temp = "", flag = false;
    for (const char of s) {
        if (char === "(") {
            flag = true;
        } else if (char === ")") {
            flag = false;
            if (map.has(temp)) {
                ans += map.get(temp);
            } else {
                ans += "?";
            }

            temp = "";
        } else if (flag) {
            temp += char;
        } else {
            ans += char;
        }
    }

    return ans;
};