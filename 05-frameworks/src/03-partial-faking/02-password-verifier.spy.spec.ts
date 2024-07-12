import {describe, test, expect, vi} from "vitest";
import {PasswordVerifier} from "./00-password-verifier";
import {RealLogger} from "./real-logger";

describe('password verifier with interfaces', () => {
    test('verify, with logger, calls logger', () => {
        const testableLog: RealLogger = new RealLogger();
        testableLog.info = vi.fn();

        const verifier = new PasswordVerifier([], testableLog);
        verifier.verify('any input');

        expect(testableLog.info).toHaveBeenCalledWith(expect.stringContaining('PASS'));
    });

    test('another variation with jest.spy', () => {
        const testableLog = new RealLogger();
        const infoFn = vi.spyOn(testableLog, 'info');

        const verifier = new PasswordVerifier([], testableLog);
        verifier.verify('any input');

        expect(infoFn).toHaveBeenCalledWith(expect.stringContaining('PASS'));
    });
});
