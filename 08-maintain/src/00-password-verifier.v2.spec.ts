import {describe, expect, it, vi} from "vitest";
import {PasswordVerifier} from "./00-password-verifier";
import {ILogger} from "./interfaces/logger";

describe("password verifier 1", () => {
    const makeFakeLogger = () => {
        return {info: vi.fn()};
    };

    const makePasswordVerifier = (
        rules: ((input: string) => boolean)[],
        fakeLogger: ILogger = makeFakeLogger()
    ) => {
        return new PasswordVerifier(rules, fakeLogger);
    };

    it("passes with zero rules", () => {
        const verifier = makePasswordVerifier([]);

        const result = verifier.verify("any input");

        expect(result).toBe(true);
    });

    it("fails with single failing rule", () => {
        const failingRule = (input: string) => false;
        const verifier = makePasswordVerifier([failingRule]);

        const result = verifier.verify("any input");

        expect(result).toBe(false);
    });
});
