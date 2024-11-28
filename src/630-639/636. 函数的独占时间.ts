function exclusiveTime(n: number, logs: string[]): number[] {
    const ans = new Array<number>(n).fill(0);
    const stack: number[] = [];
    let he = 0, ta = 0, cur = -1;

    for (const log of logs) {
        const ss = log.split(":");
        const [idx, flag, ttl] = [+ss[0], ss[1], +ss[2]];
        if (flag === "start") {
            if (he < ta) {
                ans[stack[ta - 1]] += ttl - cur;
            }
            stack[ta++] = idx;
            cur = ttl;
        } else {
            const fnc = stack[--ta];
            ans[fnc] += ttl - cur + 1;
            cur = ttl + 1;
        }
    }

    return ans;
};

console.log(exclusiveTime(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]));

export { };