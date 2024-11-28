// TODO: 2022-01-20 不会做
function stoneGameIX(stones: number[]): boolean {
    const s: number[] = [0, 0, 0];

    for (const i of stones) {
        ++s[i % 3];
    }

    if (s[0] % 2 == 0) {
        return s[1] != 0 && s[2] != 0
    };

    return s[2] > s[1] + 2 || s[1] > s[2] + 2;
};

// console.log(stoneGameIX([2, 1]));
// console.log(stoneGameIX([2]));
console.log(stoneGameIX([5, 1, 2, 4, 3]));
