export class PasswordVerifier2 {
    private rules: ((input: string) => { passed: boolean, reason: string })[] = [];

    addRule(rule: (input: string) => { passed: boolean, reason: string }) {
        this.rules.push(rule);
    }

    verify(input: string) {
        const payload = {input, errors: []};
        const resultPayLoad = this.rules.reduce(this.ruleReducer, payload);
        return resultPayLoad.errors;
    }

    ruleReducer(
        {input, errors}: { input: string, errors: string[] },
        rule: (input: string) => { passed: boolean, reason: string },
    ) {
        const result = rule(input);
        if (!result.passed) {
            const newErrors = [...errors];
            newErrors.push(result.reason);
            return {input, errors: newErrors};
        }
        return {input, errors};
    }
};
