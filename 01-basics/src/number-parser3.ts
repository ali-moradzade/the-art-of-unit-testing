import winston from "winston";

let total = 0;

const totalSoFar = () => {
    return total;
};

const makeLogger = () => {
    return winston
        .createLogger({
            level: 'info',
            transports: new winston.transports.Console()
        });
};

const logger = makeLogger();

const sum = (numbers: string) => {
    const [a, b] = numbers.split(',');
    logger.info(
        'this is a very important log output',
        {firstNumWas: a, secondNumWas: b});

    const result = Number.parseInt(a, 10) + Number.parseInt(b, 10);
    total += result;
    return result;
};

exports = {
    totalSoFar,
    sum
};

// run this file with node (name of this file) to see the logging
sum('10,20');
