function complexNumberMultiply(num1: string, num2: string): string {
    const [cx11, cx12] = num1.split("+");
    const [cx21, cx22] = num1.split("+");

    const [real1, imag1] = [+cx11, +cx12.split("i")[0]];
    const [real2, imag2] = [+cx21, +cx22.split("i")[0]];

    return `${real1 * real2 - imag1 * imag2}+${(real1 * imag2 + imag1 * real2)}i`;
};