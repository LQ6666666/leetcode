function slowestKey(releaseTimes: number[], keysPressed: string): string {
    let ans: string = keysPressed[0];
    let max: number = releaseTimes[0];

    for (let i = 1, len = releaseTimes.length; i < len; i++) {
        const time = releaseTimes[i] - releaseTimes[i - 1];
        if (time > max || (time === max && keysPressed[i] > ans)) {
            max = time;
            ans = keysPressed[i];
        }
    }

    return ans;
};

console.log(slowestKey([9, 29, 49, 50], "cbcd"));
console.log(slowestKey([12, 23, 36, 46, 62], "spuda"));
console.log(slowestKey([1, 2], "ba"));
console.log(slowestKey([9, 29, 49, 50], "cbcd"));

