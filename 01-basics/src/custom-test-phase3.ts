import {sum, totalSoFar} from './number-parser2';

const assertEquals = (expected: number, actual: number) => {
    if (actual !== expected) {
        throw new Error(`Expected ${expected} but was ${actual}`);
    }
};

/**
 * A Test Helper Function
 * I named it 'check' so it doesn't get confused with other frameworks.
 * Wraps my code in try-catch and outputs things nicely to the console.
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
 */
check('totalSoFar by Default is 0', () => {
    assertEquals(0, totalSoFar());
});
check('totalSoFar after summing is bigger', () => {
    sum('1,2');
    sum('1,2');
    assertEquals(6, totalSoFar());
});
