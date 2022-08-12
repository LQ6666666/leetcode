function findContinuousSequence(target: number): number[][] {
	let ans: number[][] = [];
	for (let i = 0; i < target; i++) {
		let sum = 0;
		let arr: number[] = [];
		for (let j = i; j < target; j++) {
			sum += j;
			arr.push(j);

			if (sum >= target) {
				if (sum === target) {
					ans.push(arr);
				}
				break;
			}
		}
	}
	return ans;
};

console.log(findContinuousSequence(9));

export { };