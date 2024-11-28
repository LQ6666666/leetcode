// map
class Solution {
    private map: Map<number, number[]>;

    constructor(nums: number[]) {
        this.map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            let value = this.map.get(num);

            if (value === undefined) {
                this.map.set(num, (value = []));
            }

            value.push(i);
        }
    }

    pick(target: number): number {
        const value = this.map.get(target)!;

        const index = Math.floor(Math.random() * value.length);

        return value[index];
    }
}

// 蓄水池
class Solution1 {
    constructor(private nums: number[]) { };

    pick(target: number): number {
        const n = this.nums.length;
        let ans = 0;
        let count = 0;

        for (let i = 0; i < n; i++) {
            if (this.nums[i] === target) {
                count++;
                if ((~~(Math.random() * count)) === 0) {
                    ans = i;
                }
            }
        }

        return ans;
    }
}

export { };