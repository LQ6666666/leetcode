import { Queue } from '../utils';

class MovingAverage {
    private sum: number;
    private queue: Queue<number>;

    constructor(public readonly size: number) {
        this.sum = 0;
        this.queue = new Queue();
    }

    next(val: number): number {
        this.queue.enQueue(val);
        if (this.queue.size > this.size) {
            this.sum -= this.queue.deQueue() ?? 0;
        }

        this.sum += val;
        return this.sum / this.queue.size;
    }
}

export { };