/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

function guess(num: number): number {
    let pick = 89;

    if (num === pick) {
        return 0
    }

    if (pick < num) {
        return -1;
    } else {
        return 1;
    }
}

// function guessNumber(n: number): number {
//     let left: number = 1, right: number = n;

//     while (left < right) {
//         const mid = Math.floor(left + (right - left) / 2); 

//         if (guess(mid) <= 0) {
//             right = mid;
//         } else {
//             left = mid + 1;
//         }
//     }

//     return left;
// };

function guessNumber(n: number): number {
    let left: number = 1, right: number = n;

    while (left < right) {
        const mid = left + ((right - left) >> 1);

        if (guess(mid) <= 0) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

console.log(guessNumber(100));
// console.log(guessNumber(2126753390));
