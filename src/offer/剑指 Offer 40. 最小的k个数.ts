function getLeastNumbers(arr: number[], k: number): number[] {
    return quickSort(arr).slice(0, k);

    function quickSort(arr: number[]): number[] {
        if (arr.length == 0) return [];

        const n = arr.length;
        const middleIndex = n >> 1;
        const middle = arr[middleIndex];

        const leftArray: number[] = [];
        const middleArray: number[] = [];
        const rightArray: number[] = [];

        for (let i = 0; i < n; i++) {
            const item = arr[i];

            if (item == middle) {
                middleArray.push(middle);
            } else if (item < middle) {
                leftArray.push(item);
            } else {
                rightArray.push(item);
            }
        }

        const part = quickSort(leftArray).concat(middleArray);

        if (part.length >= k) return part;

        return part.concat(quickSort(rightArray));
    }
};




export { };