function construct2DArray(original: number[], m: number, n: number): number[][] {
    if (m * n !== original.length) {
        return []
    }

    const result: number[][] = [];

    for (let i = 0, len = original.length; i < len; i += n) {
        result.push(original.slice(i, n + i));
    }

    return result;
};



console.log(construct2DArray([1, 2, 3, 4], 2, 2));// [[1,2],[3,4]]
console.log(construct2DArray([1, 2, 3], 1, 3));// [[1,2,3]]
console.log(construct2DArray([1, 2], 1, 1));// []
console.log(construct2DArray([3], 1, 2));// []


