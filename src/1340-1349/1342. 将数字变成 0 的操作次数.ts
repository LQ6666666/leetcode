// 模拟
function numberOfSteps(num: number): number {
    let count = 0;

    while (num !== 0) {
        if (num % 2 === 0) {
            num = num >> 1;
        } else {
            num--;
        }
        count++;
    }

    return count;
};