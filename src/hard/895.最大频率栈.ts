class FreqStack {
  private counts: Map<number, number>;
  private map: Map<number, number[]>;
  private max: number;

  constructor() {
    this.counts = new Map();
    this.map = new Map();
    this.max = 0;
  }

  push(val: number): void {
    const c = (this.counts.get(val) ?? 0) + 1;
    this.counts.set(val, c);

    const value = this.map.get(c) ?? [];
    value.push(val);
    this.map.set(c, value);
    this.max = Math.max(c, this.max);
  }

  pop(): number {
    const value = this.map.get(this.max)!;
    const result = value.pop()!;

    if (value.length === 0) {
      this.map.delete(this.max);
      this.max--;
    }

    const c = this.counts.get(result)! - 1;
    if (c === 0) {
      this.counts.delete(result);
    } else {
      this.counts.set(result, c);
    }

    return result;
  }
}

//                 counts                          map                                                 max
// [5]            { 5 => 1 }                     { 1 => [ 5 ] }                                       1
// [5,7]          { 5 => 1, 7 => 1 }             { 1 => [ 5, 7 ] }                                    1
// [5,7,5]        { 5 => 2, 7 => 1 }             { 1 => [ 5, 7 ], 2 => [ 5 ] }                        2
// [5,7,5,7]      { 5 => 2, 7 => 2 }             { 1 => [ 5, 7 ], 2 => [ 5, 7 ] }                     2
// [5,7,5,7,4]    { 5 => 2, 7 => 2, 4 => 1 }     { 1 => [ 5, 7, 4 ], 2 => [ 5, 7 ] }                  2
// [5,7,5,7,4,5]  { 5 => 3, 7 => 2, 4 => 1 }     { 1 => [ 5, 7, 4 ], 2 => [ 5, 7 ], 3 => [ 5 ] }      3
// 此时 max = 3, 会将 ans = map[3][-1] = 5 进行 pop, 同时更新 ans 的计数 并且由于 max = 3 的元素被 pop 完了, 更新 max =2
// [5,7,5,7,4]    { 5 => 2, 7 => 2, 4 => 1 }     { 1 => [ 5, 7, 4 ], 2 => [ 5, 7 ] }                  2
// 此时 max = 2, 会将 ans = map[2][-1] = 7 进行 pop, 同时更新 ans 的计数,并且由于 max = 2 的元素还有, max 不变
// [5,7,5,4]      { 5 => 2, 7 => 1, 4 => 1 }     { 1 => [ 5, 7, 4 ], 2 => [ 5 ] }                     2
// 此时 max = 2, 会将 ans = map[2][-1] = 5 进行 pop, 同时更新 ans 的计数 并且由于 max = 2 的元素被 pop 完了, 更新 max =1
// [5,7,4]        { 5 => 1, 7 => 1, 4 => 1 }     { 1 => [ 5, 7, 4 ] }                                 1

// const freqStack = new FreqStack();
// freqStack.push(5); //堆栈为 [5]
// freqStack.push(7); //堆栈是 [5,7]
// freqStack.push(5); //堆栈是 [5,7,5]
// freqStack.push(7); //堆栈是 [5,7,5,7]
// freqStack.push(4); //堆栈是 [5,7,5,7,4]
// freqStack.push(5); //堆栈是 [5,7,5,7,4,5]
// console.log(freqStack.pop()); //返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,5,7,4]。
// console.log(freqStack.pop()); //返回 7 ，因为 5 和 7 出现频率最高，但7最接近顶部。堆栈变成 [5,7,5,4]。
// console.log(freqStack.pop()); //返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,4]。
// console.log(freqStack.pop()); //返回 4 ，因为 4, 5 和 7 出现频率最高，但 4 是最接近顶部的。堆栈变成 [5,7]。

export { FreqStack };
