const verifyPassword = (
    input: string,
    rules: [(input: string) => { passed: boolean, reason: string }]
) => {
    const errors: string[] = [];

    rules.forEach(rule => {
        const result = rule(input);
        if (!result.passed) {
            errors.push(`error ${result.reason}`);
        }
    });

    return errors;
};

export {
    verifyPassword
};
