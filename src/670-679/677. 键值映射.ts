class MapSum {

    private map: Map<string, number>;

    constructor() {
        this.map = new Map<string, number>();
    }

    insert(key: string, val: number): void {
        this.map.set(key, val);
    }

    sum(prefix: string): number {
        const { map } = this;

        return Array.from<string, string | boolean>(
            map.keys(),
            key => key.startsWith(prefix) ? key : false
        ).reduce<number>((total, key) => key ? total + map.get(key as string)! : total, 0);
    }
}

const obj = new MapSum();

obj.insert('apple', 3);
console.log(obj.sum('ap'));
obj.insert('app', 2);
console.log(obj.sum('ap'));