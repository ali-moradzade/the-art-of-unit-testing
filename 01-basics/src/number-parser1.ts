/**
 * Our System Under Test (SUT)
 */
const sum = (numbers: string) => {
    const [a, b] = numbers.split(',');
    return parseInt(a, 10) + parseInt(b, 10);
};

export {sum};
