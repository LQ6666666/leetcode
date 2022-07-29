function timeRequiredToBuy(tickets: number[], k: number): number {
    const n = tickets.length;
    let count = 0;
    let i = 0;
    while (tickets[k] !== 0) {
        if (tickets[i] > 0) {
            tickets[i]--;
            count++;
        }

        if (++i === n) {
            i = 0;
        }
    }
    return count;
};


export { };