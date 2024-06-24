import {moduleInject} from './injectable';

export const {inject, reset, dependencies} = moduleInject({moment: require('moment')})

const SUNDAY = 0;
export const SATURDAY = 6;

export const verifyPassword = (
    rules: [(input: string) => { passed: boolean, reason: string }],
    input?: string,
) => {
    const dayOfWeek = (dependencies as { moment: any }).moment().day();
    if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
        throw Error("It's the weekend!");
    }
    // more code goes here...
    // return list of errors found..
    return [];
};
