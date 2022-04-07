// function searchMatrix(matrix: number[][], target: number): boolean {
//     const m = matrix.length, n = matrix[0].length;
//     let row = 0, col = n - 1;

//     while (row < m && col >= 0) {
//         if (matrix[row][col] === target) {
//             return true;
//         } else if (matrix[row][col] < target) {
//             row++;
//         } else {
//             col--;
//         }
//     }

//     return false;
// };

function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length, n = matrix[0].length;
    let row = 0, col = n - 1;

    while (row < m && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            return binarySearch(matrix[row], target);
        }
    }

    return false;
};

function binarySearch(arr: number[], target: number): boolean {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const middle = left + ((right - left) >> 1);

        if (arr[middle] === target) {
            return true
        } else if (arr[middle] > target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return false;
}