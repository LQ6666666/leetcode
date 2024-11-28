class Solution {
    constructor(
        private radius: number,
        private x_center: number,
        private y_center: number
    ) { }

    randPoint(): number[] {
        while (true) {
            const x = Math.random() * 2 * this.radius - this.radius;
            const y = Math.random() * 2 * this.radius - this.radius;

            if (x * x + y * y <= this.radius * this.radius) {
                return [this.x_center + x, this.y_center + y];
            }
        }
    }
}

export { };