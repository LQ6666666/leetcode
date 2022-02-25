class StockPrice {
    private max: [number, number];
    private min: [number, number];
    private lastTime: number;
    private map: Map<number, number>;

    constructor() {
        this.lastTime = 0;
        this.map = new Map();
        this.min = [0, Infinity];
        this.max = [0, -Infinity];
    }

    update(timestamp: number, price: number): void {
        this.lastTime = Math.max(this.lastTime, timestamp)
        this.map.set(timestamp, price)

        if (price < this.min[1]) {
            this.min = [timestamp, price]
        } else if (timestamp === this.min[0]) {
            this.min = [timestamp, price]

            this.map.forEach((value, key) => {
                if (value < this.min[1]) {
                    this.min = [key, value]
                }
            });
        }

        if (price > this.max[1]) {
            this.max = [timestamp, price]
        } else if (timestamp === this.max[0]) {
            this.max = [timestamp, price]
            this.map.forEach((value, key) => {
                if (value > this.max[1]) {
                    this.max = [key, value]
                }
            });
        }

    }

    current(): number {
        return this.map.get(this.lastTime)!
    }

    maximum(): number {
        return this.max[1]
    }

    minimum(): number {
        return this.min[1]
    }
}
