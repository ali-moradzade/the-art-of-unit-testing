"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const number_parser2_1 = require("./number-parser2");
const assertEquals = (expected, actual) => {
    if (actual !== expected) {
        throw new Error(`Expected ${expected} but was ${actual}`);
    }
};
/**
 * A Test Helper Function
 * I named it 'check' so it doesn't get confused with other frameworks.
 * Wraps my code in try-catch and outputs things nicely to the console.
 */
const check = (name, implementation) => {
    try {
        implementation();
        console.log(`${name} passed`);
    } catch (e) {
        console.error(`${name} FAILED`, e.stack);
    }
};
/**
 * Our actual tests begin here
 */
check('totalSoFar by Default is 0', () => {
    assertEquals(0, (0, number_parser2_1.totalSoFar)());
});
check('totalSoFar after summing is bigger', () => {
    (0, number_parser2_1.sum)('1,2');
    (0, number_parser2_1.sum)('1,2');
    assertEquals(6, (0, number_parser2_1.totalSoFar)());
});
