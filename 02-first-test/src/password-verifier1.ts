export class PasswordVerifier1 {
    private rules: ((input: string) => { passed: boolean, reason: string })[] = [];

    addRule(rule: (input: string) => { passed: boolean, reason: string }) {
        this.rules.push(rule);
    }

    verify(input: string) {
        if (this.rules.length === 0) {
            throw new Error('There are no rules configured');
        }

        const errors: string[] = [];
        this.rules.forEach(rule => {
            const result = rule(input);
            if (!result.passed) {
                errors.push(result.reason);
            }
        });

        return errors;
    }
}
