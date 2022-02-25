function romanToInt(s: string): number {
    const map: Map<string, number> = new Map<string, number>();
    const special: Map<string, number> = new Map<string, number>();

    map.set("I", 1);
    special.set("IV", 4);
    map.set("V", 5);
    special.set("IX", 9);
    map.set("X", 10);
    special.set("XL", 40);
    map.set("L", 50);
    special.set("XC", 90);
    map.set("C", 100);
    special.set("CD", 400);
    map.set("D", 500);
    special.set("CM", 900);
    map.set("M", 1000);

    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        const c: string = s[i];

        if (["I", "X", "C"].includes(c)) {
            const next = s[i + 1];

            if (next && special.has(c + next)) {
                ans += special.get(c + next)!;
                i++;

                continue;
            }

        }
        ans += map.get(c)!;
    }

    return ans;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
