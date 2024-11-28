// function addDigits(num: number): number {
//     const str: string = num.toString();

//     if (str.length === 1) {
//         return num;
//     }

//     return addDigits(str.split("").reduce((prev, cur) => +prev + +cur, 0));
// };

function addDigits(num: number): number {
    while (num > 9) {
        num = Math.floor(num / 10) + num % 10;
    }

    return num;
};
