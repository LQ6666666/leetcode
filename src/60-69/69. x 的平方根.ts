// function mySqrt(x: number): number {
//     if (x === 0) return x;

//     let ret = -1, left = 0, right = x;

//     while (left <= right) {
//         const middle = left + Math.floor((right - left) >> 1);

//         if ((middle * middle) <= x) {
//             ret = middle;
//             left = middle + 1;
//         } else {
//             right = middle - 1;
//         }
//     }

//     return ret;
// };

function mySqrt(x: number): number {
    if (x < 2) return 0;
    let ret = -1;

    let left = 0, right = x - 1;
    while (left <= right) {
        const middle = left + ((right - left) >> 1);
        if (middle * middle <= x) {
            left = middle + 1;
            ret = middle;
        } else {
            right = middle - 1;
        }
    }

    return ret;
};