class FrequencyTracker {
  private freq: Map<number, number>;
  private freqCnt: Map<number, number>;

  constructor() {
    this.freq = new Map<number, number>();
    this.freqCnt = new Map<number, number>();
  }

  add(number: number): void {
    if (!this.freq.has(number)) {
      this.freq.set(number, 0);
      this.freqCnt.set(0, (this.freqCnt.get(0) ?? 0) + 1);
    }

    // 之前的
    const prev = this.freq.get(number)!;
    this.freqCnt.set(prev, (this.freqCnt.get(prev) ?? 0) - 1);
    // 现在的
    this.freq.set(number, prev + 1);
    this.freqCnt.set(prev + 1, (this.freqCnt.get(prev + 1) ?? 0) + 1);
  }

  deleteOne(number: number): void {
    if (!this.freq.has(number) || this.freq.get(number)! === 0) return;

    // 之前的
    const prev = this.freq.get(number)!;
    this.freqCnt.set(prev, (this.freqCnt.get(prev) ?? 0) - 1);
    // 现在的
    this.freq.set(number, prev - 1);
    this.freqCnt.set(prev - 1, (this.freqCnt.get(prev - 1) || 0) + 1);
  }

  hasFrequency(frequency: number): boolean {
    return (this.freqCnt.get(frequency) ?? 0) > 0;
  }
}

export {};
