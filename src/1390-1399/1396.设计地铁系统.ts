class UndergroundSystem {
  private recordMap: Map<number, [stationName: string, t: number]>;
  private startMap: Map<string, Map<string, [count: number, time: number]>>;

  constructor() {
    this.recordMap = new Map();
    this.startMap = new Map();
  }

  checkIn(id: number, stationName: string, t: number): void {
    this.recordMap.set(id, [stationName, t]);
  }

  checkOut(id: number, endStation: string, t: number): void {
    const [startStation, startTime] = this.recordMap.get(id)!;
    let endMap = this.startMap.get(startStation);
    if (!endMap) {
      this.startMap.set(startStation, (endMap = new Map()));
    }
    let result = endMap.get(endStation);
    if (!result) {
      endMap.set(endStation, (result = [0, 0]));
    }
    result[0]++;
    result[1] += t - startTime;
  }

  getAverageTime(startStation: string, endStation: string): number {
    const endMap = this.startMap.get(startStation)!;
    const [count, time] = endMap.get(endStation)!;
    return time / count;
  }
}

export {};
