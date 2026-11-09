class TopVotedCandidate {
  private tops: number[];
  private voteCounts: Map<number, number>;

  constructor(
    persons: number[],
    private times: number[]
  ) {
    const n = persons.length;
    this.tops = [];
    this.voteCounts = new Map();
    this.voteCounts.set(-1, -1);

    let top = -1;
    for (let i = 0; i < n; i++) {
      const p = persons[i];
      const count = (this.voteCounts.get(p) ?? 0) + 1;
      this.voteCounts.set(p, count);
      if (count >= this.voteCounts.get(top)!) {
        top = p;
      }
      this.tops.push(top);
    }
  }

  q(t: number): number {
    let l = 0;
    let r = this.times.length - 1;
    while (l < r) {
      const m = l + Math.floor((r - l + 1) / 2);
      if (this.times[m] <= t) {
        l = m;
      } else {
        r = m - 1;
      }
    }
    return this.tops[l];
  }
}

export {};
