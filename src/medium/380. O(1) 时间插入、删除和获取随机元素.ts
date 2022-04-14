class RandomizedSet {
    private nums: number[];
    private map: Map<number, number>;
    constructor() {
        this.nums = [];
        this.map = new Map<number, number>();
    }

    insert(val: number): boolean {
        if (this.map.has(val)) {
            return false;
        }

        const index = this.nums.length;
        this.nums.push(val);
        this.map.set(val, index);
        return true;
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) {
            return false;
        }

        // 获取 val 在 nums 中的位置
        const index = this.map.get(val)!;
        // 用 nums 最后一个覆盖当前 val
        this.nums[index] = this.nums[this.nums.length - 1];
        // 更新 map 中位置
        this.map.set(this.nums[index], index);
        // 弹出最后一个
        this.nums.pop();
        // 删除 map 中的 val
        this.map.delete(val);

        return true;
    }

    getRandom(): number {
        const index = (Math.random() * this.nums.length) ^ 0;
        return this.nums[index];
    }
}


export { }