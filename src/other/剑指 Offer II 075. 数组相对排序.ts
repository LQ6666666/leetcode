function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < arr2.length; i++) {
        map.set(arr2[i], i);
    }

    const arrA: number[] = [];
    const arrB: number[] = [];
    for (const item of arr1) {
        if (map.has(item)) {
            arrA.push(item);
        } else {
            arrB.push(item);
        }
    }

    arrA.sort((a, b) => map.get(a)! - map.get(b)!);
    arrB.sort((a, b) => a - b);

    return arrA.concat(arrB);
};