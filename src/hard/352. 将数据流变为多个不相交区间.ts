class SummaryRanges {
    LENGTH: number = 10 ** 4;
    arr: boolean[];

    constructor() {
        this.arr = Array.from({ length: this.LENGTH }, () => false);
    }

    addNum(val: number): void {
        this.arr[val] = true;
    }

    getIntervals(): number[][] {
        const result: number[][] = [];

        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i]) {
                let flag = i

                for (let j = i; j < this.arr.length; j++) {
                    if (!this.arr[j]) {
                        i = j - 1;
                        break;
                    }
                }

                result.push([flag, i])
            }
        }


        return result;
    }
}

const summaryRanges = new SummaryRanges();
summaryRanges.addNum(1);      // arr = [1]
console.log(summaryRanges.getIntervals()); // 返回 [[1, 1]]
summaryRanges.addNum(3);      // arr = [1, 3]
console.log(summaryRanges.getIntervals()); // 返回 [[1, 1], [3, 3]]
summaryRanges.addNum(7);      // arr = [1, 3, 7]
console.log(summaryRanges.getIntervals()); // 返回 [[1, 1], [3, 3], [7, 7]]
summaryRanges.addNum(2);      // arr = [1, 2, 3, 7]
console.log(summaryRanges.getIntervals()); // 返回 [[1, 3], [7, 7]]
summaryRanges.addNum(6);      // arr = [1, 2, 3, 6, 7]
console.log(summaryRanges.getIntervals()); // 返回 [[1, 3], [6, 7]]
