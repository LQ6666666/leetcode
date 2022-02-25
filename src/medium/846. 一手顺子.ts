function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize !== 0) {
        return false;
    }

    const map: Map<number, number> = new Map<number, number>();

    hand.sort((a, b) => a - b);

    for (const item of hand) {
        if (map.has(item)) {
            map.set(item, map.get(item)! + 1);
        } else {
            map.set(item, 1);
        }
    }

    for (const item of hand) {
        if (!map.has(item)) {
            continue;
        }

        for (let i = 0; i < groupSize; i++) {
            const num = item + i;
            
            if (!map.has(num)) {
                return false;
            }

            map.set(num, map.get(num)! - 1);

            if (map.get(num) === 0) {
                map.delete(num);
            }
        }
    }

    return true;
};


console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)); //true
// console.log(isNStraightHand([1, 2, 3, 4, 5], 4)); // false
// console.log(isNStraightHand([1, 2, 3, 4, 5, 6], 2)); // true
// console.log(isNStraightHand([8, 10, 12], 2)); // false
// console.log(isNStraightHand([8, 10, 12], 3)); // false
// console.log(isNStraightHand([1, 1, 2, 2, 3, 3], 3)); // true
// console.log(isNStraightHand([1], 1)); // true
