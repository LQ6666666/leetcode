function fizzBuzz(n: number): string[] {
    return Array.from({ length: n }, (_, index: number): string => {
        const num: number = index + 1;
        if (num % 3 == 0 && num % 5 === 0) {
            return "FizzBuzz";
        } else if (num % 3 == 0) {
            return "Fizz";
        } else if (num % 5 === 0) {
            return "Buzz";
        } else {
            return String(num);
        }
    });
};


console.log(fizzBuzz(15));

export {
    fizzBuzz
}


// 返回:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]