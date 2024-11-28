function reverseWords(s: string): string {
    let ans = "";

    let flag: boolean = false;
    let temp = "";
    for (let i = s.length - 1; i >= 0; i--) {
        const letter = s[i];
        if (letter === " ") {
            if (flag === true) {
                flag = false;
                if (ans === "") {
                    ans += temp;
                } else {
                    ans = `${ans} ${temp}`;
                }
                temp = "";
            }
        } else {
            flag = true;
            temp = s[i] + temp;
        }
    }

    if (flag === true) {
        if (ans === "") {
            ans += temp;
        } else {
            ans = `${ans} ${temp}`;
        }
    }

    return ans;
};

export { };