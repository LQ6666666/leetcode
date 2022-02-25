function maxNumberOfBalloons(text: string): number {
    const balloon = new Map<string, number>();
    balloon.set('b', 1);
    balloon.set('a', 1);
    balloon.set('l', 2);
    balloon.set('o', 2);
    balloon.set('n', 1);

    const map = new Map<string, number>();
    for (const item of text) {
        if (balloon.has(item)) {
            map.set(item, (map.get(item) ?? 0) + 1);
        }
    }

    let ans = 0;
    while (true) {
        for (const [key, value] of Array.from(balloon.entries())) {
            if ((map.get(key) ?? 0) >= value) {
                map.set(key, map.get(key)! - value);
            } else {
                return ans;
            }
        }

        ans++;
    }
};