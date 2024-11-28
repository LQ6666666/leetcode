export { };

function executeInstructions(n: number, startPos: number[], s: string): number[] {
    const grid = Array.from({ length: n }, () => new Array<true>(n).fill(true));
    const m = s.length;
    const ans = new Array<number>(m).fill(0);

    for (let count = 0; count < m; count++) {
        let currentPos = startPos.concat();
        let i = count;

        let x = 0;
        while (i < m) {
            const d = s[i++];

            if (d === "L") {
                currentPos[1]--;
            } else if (d === "R") {
                currentPos[1]++;
            } else if (d === "U") {
                currentPos[0]--;
            } else if (d === "D") {
                currentPos[0]++;
            }

            if (hasOut(currentPos)) {
                x++;
            } else {
                break;
            }
        }

        ans[count] = x;
    }

    return ans;

    function hasOut([x, y]: number[]): boolean {
        return !!grid[x]?.[y];
    }
};