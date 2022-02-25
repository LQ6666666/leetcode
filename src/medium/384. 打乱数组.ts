class Solution {
    origin: number[];

    constructor(nums: number[]) {
        this.origin = nums;
    }

    reset(): number[] {
        return this.origin;
    }

    shuffle(): number[] {
        const result: number[] = [];
        const { length } = this.origin;
        const randoms: Map<number, number> = new Map<number, number>();

        for (let i = 0; i < length; i++) {
            result.push(this.origin[i]);
            randoms.set(i, Math.floor(Math.random() * length));
        }

        randoms.forEach((value, index) => {
            const temp = result[index];
            result[index] = result[value];
            result[value] = temp;
        })

        return result;
    }
}

const solution = new Solution([1, 2, 3]);
console.log(solution.shuffle());    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
console.log(solution.reset());      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
console.log(solution.shuffle());


export { };