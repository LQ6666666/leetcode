import { PriorityQueue } from "@datastructures-js/priority-queue";

function maxAverageRatio(classes: number[][], extraStudents: number): number {
  const pq = new PriorityQueue<number[]>(([ap, at], [bp, bt]) => {
    const a = (ap + 1) / (at + 1) - ap / at;
    const b = (bp + 1) / (bt + 1) - bp / bt;
    // 通过率增长越多排序越靠前
    return b - a;
  });

  /**
    const pq = new PriorityQueue({
      compare: ([ap, at], [bp, bt]) => {
        const a = (ap + 1) /( at + 1) - ap / at;
        const b = (bp + 1) / (bt + 1) - bp / bt;
        // 通过率增长越多排序越靠前
        return b - a;
      }
    });
   */

  let rate = 0;
  for (const c of classes) {
    pq.enqueue(c);
    // 累加最初的通过率
    rate += c[0] / c[1];
  }

  while (extraStudents !== 0) {
    extraStudents--;
    // 通过率增长最多的班级
    const [pass, total] = pq.dequeue();
    pq.enqueue([pass + 1, total + 1]);

    // 累加通过率
    rate += (pass + 1) / (total + 1) - pass / total;
  }

  return rate / classes.length;
}

export { maxAverageRatio };
