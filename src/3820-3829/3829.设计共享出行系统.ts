import { Queue } from "@/utils";

class RideSharingSystem {
  private riders: Queue<number>;
  private drivers: Queue<number>;
  private waitingEiders: Set<number>;

  constructor() {
    this.riders = new Queue();
    this.drivers = new Queue();
    this.waitingEiders = new Set();
  }

  addRider(riderId: number): void {
    this.riders.enQueue(riderId);
    this.waitingEiders.add(riderId);
  }

  addDriver(driverId: number): void {
    this.drivers.enQueue(driverId);
  }

  matchDriverWithRider(): number[] {
    // 弹出队列中的已取消乘客
    while (!this.riders.isEmpty() && !this.waitingEiders.has(this.riders.front()!)) {
      this.riders.deQueue();
    }
    // 没有乘客或者司机
    if (this.riders.isEmpty() || this.drivers.isEmpty()) {
      return [-1, -1];
    }
    const riderId = this.riders.deQueue()!;
    this.waitingEiders.delete(riderId);
    return [this.drivers.deQueue()!, riderId];
  }

  cancelRider(riderId: number): void {
    this.waitingEiders.delete(riderId);
  }
}

export {};
