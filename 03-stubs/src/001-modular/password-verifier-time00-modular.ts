const originalDependencies = {
    moment: require('moment')
};

let dependencies = {...originalDependencies};

export const inject = (fakes: any) => {
    Object.assign(dependencies, fakes);
    return function reset() {
        dependencies = {...originalDependencies};
    };
};

const SUNDAY = 0;
export const SATURDAY = 6;

export const verifyPassword = (
    rules: [(input: string) => { passed: boolean, reason: string }],
    input?: string,
) => {
    const dayOfWeek = dependencies.moment().day();
    if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
        throw Error("It's the weekend!");
    }
    // more code goes here...
    // return list of errors found..
    return [];
};

module.exports = {
    SATURDAY,
    verifyPassword,
    inject
};
