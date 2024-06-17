// our production code (Suite Under Test - SUT)
import {sum} from './number-parser1';

/**
 * A Test helper function for a simple assertion
 * @param actual (any type)
 * @param expected (any type)
 */
const assertEquals = (expected: number, actual: number) => {
    if (actual !== expected) {
        throw new Error(`Expected ${expected} but was ${actual}`);
    }
};

/**
 * A Test Helper Function
 * I named it 'check' so it doesn't get confused with other frameworks.
 * Wraps my code in try-catch and outputs things nicely to the console.
 * @param {string} name
 * @param {function} implementation
 */
const check = (name: string, implementation: () => void) => {
    try {
        implementation();
        console.log(`${name} passed`);
    } catch (e: any) {
        console.error(`${name} FAILED`, e.stack);
    }
};

/**
 * Our actual tests begin here
 * To run: "node ch1/custom-test-phase2.js
 */
check('sum with 2 numbers should sum them up', () => {
    const result = sum('1,2');
    assertEquals(3, result);
});

check('sum with multiple digit numbers should sum them up', () => {
    const result = sum('10,20');
    assertEquals(30, result);
});
