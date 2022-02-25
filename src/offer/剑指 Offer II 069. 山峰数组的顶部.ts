function peakIndexInMountainArray(arr: number[]): number {
    const midIndex: number = Math.floor(arr.length / 2);

    let i = 0;

    while ([-i, i].every(index => arr[midIndex + index] !== undefined)) {
        const left = arr[midIndex - i];
        const right = arr[midIndex + i];


        if ((left > arr[midIndex - i - 1]) && (left > arr[midIndex - i + 1])) {
            return midIndex - i
        }

        if ((right > arr[midIndex + i - 1]) && (right > arr[midIndex + i + 1])) {
            return midIndex + i
        }

        i++;
    }

    return midIndex;
}

function peakIndexInMountainArray1(arr: number[]): number {
    const midIndex: number = Math.floor(arr.length / 2);

    let left = midIndex
    let right = midIndex

    while (arr[left] !== undefined && arr[right] !== undefined) {
        if ((arr[left] > arr[left - 1]) && (arr[left] > arr[left + 1])) {
            return left
        }

        if ((arr[right] > arr[right - 1]) && (arr[right] > arr[right + 1])) {
            return right
        }

        left--;
        right++;
    }

    return midIndex;
}


// console.log(peakIndexInMountainArray([18,29,38,59,98,100,99,98,90]));
// console.log(peakIndexInMountainArray([0, 2, 1, 0]));


export {
    peakIndexInMountainArray,
    peakIndexInMountainArray1
}