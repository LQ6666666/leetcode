function backspaceCompare(s: string, t: string): boolean {
    function getString(str: string): string {
        let stack: string[] = [];

        for (const char of str) {
            if (char === "#") {
                stack.pop();
            } else {
                stack.push(char);
            }
        }

        return stack.join("");
    }


    return getString(s) === getString(t);
};