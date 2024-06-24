import moment from 'moment';

const SUNDAY = 0;
const SATURDAY = 6;

export const verifyPassword = (
    input: string,
    rules: (input: string) => { passed: boolean, reason: string }[],
) => {
    const dayOfWeek = moment().day();
    if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
        throw Error("It's the weekend!");
    }
    // more code goes here...
    // return list of errors found..

    return [];
};

export const verifyPassword2 = (
    input: string,
    rules: (input: string) => { passed: boolean, reason: string }[],
    currentDay: number,
) => {
    if ([SATURDAY, SUNDAY].includes(currentDay)) {
        throw Error("It's the weekend!");
    }
    // more code goes here...
    // return list of errors found..
    return [];
};

export const verifyPassword3 = (
    input: string,
    rules: (input: string) => { passed: boolean, reason: string }[],
    getDayFn: () => number
) => {
    const dayOfWeek = getDayFn();
    if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
        throw Error("It's the weekend!");
    }
    // more code goes here...
    // return list of errors found..
    return [];
};
