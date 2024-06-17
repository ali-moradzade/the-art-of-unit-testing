"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
const winston_1 = __importDefault(require("winston"));
let total = 0;
const totalSoFar = () => {
    return total;
};
const makeLogger = () => {
    return winston_1.default
        .createLogger({
            level: 'info',
            transports: new winston_1.default.transports.Console()
        });
};
const logger = makeLogger();
const sum = (numbers) => {
    const [a, b] = numbers.split(',');
    logger.info('this is a very important log output', {firstNumWas: a, secondNumWas: b});
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
