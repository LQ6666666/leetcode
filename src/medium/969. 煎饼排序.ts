function pancakeSort(arr: number[]): number[] {
    function reverse(idx: number) {
        for (let i = 0, j = idx; i < j; i++) {
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;

            j--;
        }
    }

    const ans: number[] = [];
    for (let i = arr.length - 1; i > 0; i--) {
        let j = i;

        for (; j > 0; j--) {
            if (arr[j] == i + 1) {
                break;
            }
        }

        if (j < i) {
            if (j > 0) {
                ans.push(j + 1);
                reverse(j);
            }

            ans.push(i + 1);
            reverse(i);
        }
    }

    return ans
};