let total = 0;

const totalSoFar = () => {
    return total;
};

/**
 * Our "production" code to be tested.
 */
const sum = (numbers: string) => {
    const [a, b] = numbers.split(',');
    const result = Number.parseInt(a, 10) + Number.parseInt(b, 10);

    total += result;

    return result;
};

export {
    sum,
    totalSoFar
};
