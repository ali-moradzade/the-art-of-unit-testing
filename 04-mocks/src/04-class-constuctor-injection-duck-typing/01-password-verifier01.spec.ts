import {describe, expect, test} from "vitest";
import {PasswordVerifier} from "./00-password-verifier00";

class FakeLogger {
    logged = "";

    info(text: string) {
        this.logged = text;
    }
}

describe("with FakeLogger class  - constructor injection", () => {
    describe("password verifier", () => {
        test("given logger and passing scenario, calls logger with PASSED", () => {
            const mockLog = new FakeLogger();
            const verifier = new PasswordVerifier([] as any, mockLog);
            verifier.verify("any input");

            expect(mockLog.logged).toMatch(/PASSED/);
        });
    });
});
