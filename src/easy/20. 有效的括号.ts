function isValid(s: string): boolean {
    const stack: string[] = [];

    const map: Map<string, string> = new Map<string, string>();
    map.set("(", ")");
    map.set("{", "}");
    map.set("[", "]");

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (map.has(c)) {
            stack.push(c)
        } else {
            if (stack.length === 0) {
                return false;
            }

            if (c !== map.get(stack.pop()!)) {
                return false;
            }
        }

    }

    return stack.length === 0;
};


console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
