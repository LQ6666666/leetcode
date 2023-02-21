import { Queue } from "@/utils";

class AnimalShelf {
  private cat: Queue<number>;
  private dog: Queue<number>;

  constructor() {
    this.cat = new Queue();
    this.dog = new Queue();
  }

  enqueue(animal: number[]): void {
    const [no, category] = animal;
    if (category === 0) {
      this.cat.enQueue(no);
    } else {
      this.dog.enQueue(no);
    }
  }

  dequeueAny(): number[] {
    if (this.cat.isEmpty() && this.dog.isEmpty()) {
      return [-1, -1];
    } else if (this.cat.isEmpty()) {
      return this.dequeueDog();
    } else if (this.dog.isEmpty()) {
      return this.dequeueCat();
    } else {
      return this.cat.front()! > this.dog.front()! ? this.dequeueCat() : this.dequeueDog();
    }
  }

  dequeueDog(): number[] {
    return this.dog.isEmpty() ? [-1, -1] : [this.dog.deQueue()!, 1];
  }

  dequeueCat(): number[] {
    return this.cat.isEmpty() ? [-1, -1] : [this.cat.deQueue()!, 0];
  }
}

export { AnimalShelf };
