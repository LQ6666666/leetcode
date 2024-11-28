function countCollisions(directions: string): number {
    let ans = 0;
    let flag = false;
    for (const c of directions) {
        if (c == 'R' || c == 'S') {
            flag = true
        } else if (flag) {
            ans++
        };
    }

    flag = false;
    for (let i = directions.length - 1; i >= 0; i--) {
        let c = directions[i];
        if (c == 'L' || c == 'S') {
            flag = true
        } else if (flag) {
            ans++;
        }
    }

    return ans;
};
