interface IResult {
    result: boolean;
    input: string;
}

export class PasswordVerifier5 {
    private _rules: ((input: string) => boolean)[];

    constructor(rules: ((input: string) => boolean)[]) {
        this._rules = rules;
    }

    verify(inputs: string[]): IResult[] {
        return inputs.map((input) => this.checkSingleInput(input));
    }

    private checkSingleInput(input: string) {
        const failed = this.findFailedRules(input);
        return {
            input,
            result: failed.length === 0,
        };
    }

    protected findFailedRules(input: string) {
        return this._rules
            .map((rule) => rule(input))
            .filter((result) => !result);
    }
}
