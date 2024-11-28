// 模拟
function findTheWinner(n: number, k: number): number {
    if (k === 1) return n;

    const queue: number[] = new Array(n);

    for (let i = 0; i < n; i++) {
        queue[i] = i + 1;
    }

    let index = 0;
    while (queue.length !== 1) {
        const count = (index + k - 1) % queue.length;

        queue.splice(count, 1);

        index = count;
    }

    return queue[0];
};

export { };