import {describe, expect, test, vi} from "vitest";
import {IComplicatedLogger} from "./interfaces/complicated-logger";
import {PasswordVerifier2} from "./00-password-verifier2";

describe("working with long interfaces", () => {
    describe("password verifier", () => {
        test("verify, with logger and passing, calls logger with PASS", () => {
            const mockLog: IComplicatedLogger = {
                info: vi.fn(),
                warn: vi.fn(),
                debug: vi.fn(),
                error: vi.fn(),
            };

            const verifier = new PasswordVerifier2([], mockLog);
            verifier.verify("anything");

            expect(mockLog.info).toHaveBeenCalledWith(expect.stringContaining('PASS'), "verify");
        });
    });
});
