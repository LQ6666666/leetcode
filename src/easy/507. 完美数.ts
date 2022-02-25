function checkPerfectNumber(num: number): boolean {
    if (num === 1) {
        return false;
    }

    // 找出全部的因子
    let counter: number = 1;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            counter += i;
        }
    }

    return counter === num;
};


console.log(checkPerfectNumber(28))//true
console.log(checkPerfectNumber(6))//true
console.log(checkPerfectNumber(496))//true
console.log(checkPerfectNumber(8128))//true
console.log(checkPerfectNumber(2))//true