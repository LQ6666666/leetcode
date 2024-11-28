function minMutation(start: string, end: string, bank: string[]): number {
    // 1. 相等
    if (start === end) {
        return 0;
    }

    const set = new Set(bank);
    // 目标不合法
    if (!set.has(end)) {
        return -1;
    }

    const keys = ['A', 'C', 'G', 'T'];

    const queue = [start];
    const visited = new Set(queue);
    let step = 1;

    while (queue.length > 0) {
        let n = queue.length;
        while (n > 0) {
            const current = queue.shift()!;

            for (let i = 0; i < 8; i++) {
                for (const key of keys) {
                    if (key !== current[i]) {
                        const sb = current.split("");
                        sb[i] = key;
                        const next = sb.join("");
                        if (!visited.has(next) && set.has(next)) {
                            if (next === end) {
                                return step;
                            }

                            queue.push(next);
                            visited.add(next);
                        }
                    }
                }
            }

            n--;
        }

        step++;
    }

    return -1;
};

export { };