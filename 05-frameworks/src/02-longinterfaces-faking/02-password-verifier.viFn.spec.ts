import {describe, test, expect, vi} from "vitest";
import {PasswordVerifier} from "./00-password-verifier";
import {ILogger} from "./interfaces/logger";

describe('duck typing with strongly typed interfaces', () => {
    describe('password verifier', () => {
        test('with logger and passing, calls logger', () => {
            const mockLog: ILogger = {
                info: vi.fn()
            };

            const verifier = new PasswordVerifier([], mockLog);

            verifier.verify('anything');

            expect(mockLog.info).toHaveBeenCalledWith(expect.stringContaining('PASS'));
        });
    });
});

describe('Late Faking', () => {
    class FakeLogger implements ILogger {
        info(text: string) {
        }
    }

    test('verify, with logger, calls logger', () => {
        const mockLog = new FakeLogger();
        mockLog.info = vi.fn();

        const verifier = new PasswordVerifier([], mockLog);

        verifier.verify('anything');

        expect(mockLog.info).toHaveBeenCalledWith(expect.stringContaining('PASS'));
    });
});
