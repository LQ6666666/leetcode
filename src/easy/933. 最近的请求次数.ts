class RecentCounter1 {
    private queue: number[];

    constructor() {
        this.queue = [];
    }

    ping(t: number): number {
        this.queue.push(t);
        const scope = t - 3000;

        while (this.queue.length > 0 && this.queue[0] < scope) {
            this.queue.shift();
        }

        return this.queue.length;
    }
}

class RecentCounter {
    private queue: number[];

    constructor() {
        this.queue = [];
    }

    ping(t: number): number {
        this.queue.push(t);
        const scope = t - 3000;

        const index = binarySearch(this.queue, scope);
        this.queue = this.queue.slice(index, this.queue.length);

        return this.queue.length;
    }
}


function binarySearch(arr: number[], target: number) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }

    return left;
}

export { };