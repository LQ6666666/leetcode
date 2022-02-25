function destCity(paths: string[][]): string {
    const map = new Map<string, string>();

    for (const [p1, p2] of paths) {
        map.set(p1, p2);
    }

    let ans = map.get(paths[0][0])!;

    while (map.has(ans)) {
        ans = map.get(ans)!;
    }

    return ans;
};