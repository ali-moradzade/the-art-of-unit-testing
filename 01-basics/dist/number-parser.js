"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.sum = void 0;
/**
 * Our System Under Test (SUT)
 */
const sum = (numbers) => {
    const [a, b] = numbers.split(',');
    return parseInt(a, 10) + parseInt(b, 10);
};
exports.sum = sum;
