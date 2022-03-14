function findRestaurant(list1: string[], list2: string[]): string[] {
    const map = new Map<string, number>();

    for (let i = list1.length - 1; i > -1; i--) {
        map.set(list1[i], i);
    }

    let ans: string[] = [];
    let sum = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < list2.length; i++) {
        if (map.has(list2[i])) {
            // 索引合
            const index = i + map.get(list2[i])!;
            if (sum > index) {
                sum = index;
                ans = [list2[i]];
            } else if(index == sum) {
                ans.push(list2[i])
            }
        }
    }

    return ans;
};