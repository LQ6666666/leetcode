function processQueries(queries: number[], m: number): number[] {
    const p = new Array(m);
    for (let i = 0; i < m; i++) {
        p[i] = i + 1;
    }

    const ans: number[] = [];

    for (let i = 0; i < queries.length; i++) {
        const item = queries[i];
        const index = p.indexOf(item);

        ans.push(index);

        p.unshift(p.splice(index, 1)[0]);
    }

    return ans;
};