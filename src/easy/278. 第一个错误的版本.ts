// function solution(isBadVersion: (version: number) => boolean) {
//     return function (n: number): number {
//         let left = 1, right = n;

//         while (left < right) {
//             const middle: number = Math.floor(left + (right - left) / 2); // 防止计算时溢出

//             if (isBadVersion(middle)) {
//                 right = middle;
//             } else {
//                 left = middle + 1;
//             }
//         }

//         return left;
//     };
// };


function solution(isBadVersion: any) {
    return function (n: number): number {
        let left = 1, right = n;
        while (left <= right) {
            const middle = left + ((right - left) >> 1);
            if (isBadVersion(middle)) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }

        return left;
    };
};

export { };