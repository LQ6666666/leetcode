
function plusOne(digits: number[]): number[] {
    const digitsLength: number = digits.length;

    if (!digitsLength) {
        return [];
    }

    // 最后一位小于 9 ，表明没有进位
    if (digits[digitsLength - 1] < 9) {
        const newArr: number[] = [...digits];

        newArr.push(newArr.pop()! + 1);

        return newArr;
    }

    // 到这里表示有进位
    digits[digitsLength - 1]++;

    for (let i = digits.length - 1; i > -1; i--) {
        if (digits[i] > 9) {
            digits[i] = digits[i] - 10;

            // 前一位是否有值
            if (digits[i - 1]) {
                digits[i - 1]++;
            } else {
                digits.unshift(1);
                break;
            }
        } else {
            break;
        }
    }

    return digits;
};


// console.log(plusOne([1, 9, 9]))
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))





export {
    plusOne
}