function letterCombinations(digits: string): string[] {
    if (digits === "") return [];

    const map = new Map<string, string[]>();
    map.set('2', ['a', 'b', 'c']);
    map.set('3', ['d', 'e', 'f']);
    map.set('4', ['g', 'h', 'i']);
    map.set('5', ['j', 'k', 'l']);
    map.set('6', ['m', 'n', 'o']);
    map.set('7', ['p', 'q', 'r', 's']);
    map.set('8', ['t', 'u', 'v']);
    map.set('9', ['w', 'x', 'y', 'z']);

    function bfs(s: string, sArr: string[]): string[] {
        if (s === "") return [];

        const ret: string[] = [];
        const arr = map.get(s.charAt(0))!;

        for (let i = 0; i < sArr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                ret.push(sArr[i] + arr[j]);
            }
        }

        return bfs(s.slice(1), ret);
    }

    return bfs(digits.slice(1), map.get(digits.charAt(0))!);
};