import {ILogger} from "./interfaces/logger";

export class PasswordVerifier {
    private _rules: ((input: string) => boolean)[];
    private _logger: ILogger;

    constructor(rules: ((input: string) => boolean)[], logger: ILogger) {
        this._rules = rules;
        this._logger = logger;
    }

    verify(input: string): boolean {
        const failed = this._rules
            .map((rule) => rule(input))
            .filter((result) => !result);

        if (failed.length === 0) {
            this._logger.info("PASSED");
            return true;
        }

        this._logger.info("FAIL");
        return false;
    }
}
