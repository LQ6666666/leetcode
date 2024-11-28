function findCenter(edges: number[][]): number {
    const [num11, num12] = edges[0];
    const [num21, num22] = edges[1];

    if (num11 === num21 || num11 === num22) {
        return num11;
    } else {
        return num12;
    }
};