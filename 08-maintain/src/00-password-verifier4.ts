import {IComplicatedLogger} from "./interfaces/complicated-logger";

export class PasswordVerifier4 {
    private _rules: ((input: string) => boolean)[];
    private _logger: IComplicatedLogger;

    constructor(rules: ((input: string) => boolean)[], logger: IComplicatedLogger) {
        this._rules = rules;
        this._logger = logger;
    }

    verify(input: string): boolean {
        const failed = this.findFailedRules(input);

        if (failed.length === 0) {
            this._logger.info("PASSED");
            return true;
        }

        this._logger.info("FAIL");
        return false;
    }

    protected findFailedRules(input: string) {
        return this._rules
            .map((rule) => rule(input))
            .filter((result) => !result);
    }
}
