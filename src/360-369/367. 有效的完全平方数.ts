// function isPerfectSquare(num: number): boolean {
//     let left = 0, right = num;

//     while (left <= right) {
//         const middle = left + ((right - left) >> 1);

//         if (middle * middle === num) {
//             return true;
//         } else if ((middle * middle) > num) {
//             right = middle - 1;
//         } else {
//             left = middle + 1;
//         }
//     }

//     return false;
// };

function isPerfectSquare(num: number): boolean {
    let left = 1, right = num;

    while (left <= right) {
        const middle = left + ((right - left) >> 1);
        const current = middle * middle;

        if (current === num) {
            return true;
        } else if (current > num) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return false;
};


export { };