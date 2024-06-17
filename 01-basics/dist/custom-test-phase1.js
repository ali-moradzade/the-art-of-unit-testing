"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const number_parser_1 = require("./number-parser");
/**
 * Our "Test" definition.
 */
const parserTest = () => {
    try {
        const result = (0, number_parser_1.sum)('1,2');
        if (result === 3) {
            console.log('parserTest example 1 PASSED');
        } else {
            throw new Error(`parserTest: expected 3 but was ${result}`);
        }
    } catch (e) {
        console.error(e.stack);
    }
};
parserTest();
