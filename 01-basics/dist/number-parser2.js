"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.totalSoFar = exports.sum = void 0;
let total = 0;
const totalSoFar = () => {
    return total;
};
exports.totalSoFar = totalSoFar;
/**
 * Our "production" code to be tested.
 */
const sum = (numbers) => {
    const [a, b] = numbers.split(',');
    const result = Number.parseInt(a, 10) + Number.parseInt(b, 10);
    total += result;
    return result;
};
exports.sum = sum;
