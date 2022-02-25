function numWaterBottles(numBottles: number, numExchange: number): number {
    if (numBottles < numExchange) {
        return numBottles;
    }

    if (numBottles === numExchange) {
        return numBottles + 1;
    }

    let counter: number = 0;

    while (numBottles >= numExchange) {
        counter += numExchange;
        numBottles = numBottles - numExchange + 1;
    }

    return counter + numBottles;
};

console.log(numWaterBottles(9, 3));
// console.log(numWaterBottles(15, 4));
// console.log(numWaterBottles(5, 5));
// console.log(numWaterBottles(2, 3));