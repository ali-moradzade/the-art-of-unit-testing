import _ from 'lodash';

export const SUNDAY = 0;
export const MONDAY = 1;
export const SATURDAY = 6;

// curried function
export const verify = (
    rules: [(input: string) => { passed: boolean, reason: string }],
    dayOfWeekFn: () => number,
    input?: string,
) => {
    if (input === undefined) { // currying
        return function (input?: string) {
            return verify(rules, dayOfWeekFn, input);
        };
    }

    if ([SATURDAY, SUNDAY].includes(dayOfWeekFn())) {
        throw new Error('It\'s the weekend!');
    }
    // use the rules, luke
    // more code goes here ...
};

export const verifyWithLodash = _.curry(
    (
        rules: [(input: string) => { passed: boolean, reason: string }],
        dayOfWeekFn: () => number,
        input?: string,
    ) => {
        if ([SATURDAY, SUNDAY].includes(dayOfWeekFn())) {
            throw new Error('It\'s the weekend!');
        }
        // use the rules, luke
        // more code goes here..
    },
);

export const makeVerifier = (
    rules: [(input: string) => { passed: boolean, reason: string }],
    dayOfWeekFn: () => number,
) => {
    return function (input?: string) {
        if ([SATURDAY, SUNDAY].includes(dayOfWeekFn())) {
            throw new Error('It\'s the weekend!');
        }
        // use the rules, luke
        // more code goes here..
    };
};

// constructor function pattern
export class Verifier {
    constructor(
        private rules: [(input: string) => { passed: boolean, reason: string }],
        private dayOfWeekFn: () => number,
    ) {
    }

    verify(input?: string) {
        if ([SATURDAY, SUNDAY].includes(this.dayOfWeekFn())) {
            throw new Error('It\'s the weekend!');
        }
        // more code goes here..
    }
}

// class with constructor injection pattern
export class PasswordVerifier {
    constructor(
        private rules: [(input: string) => { passed: boolean, reason: string }],
        private dayOfWeekFn: () => number,
    ) {
    }

    verify(input?: string) {
        if ([SATURDAY, SUNDAY].includes(this.dayOfWeekFn())) {
            throw new Error('It\'s the weekend!');
        }
        const errors: string[] = [];
        // more code goes here..
        return errors;
    }
}
