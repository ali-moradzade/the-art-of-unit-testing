import {describe, expect, test} from "vitest";
import {PasswordVerifier} from "./00-password-verifier";
import {RealLogger} from "./real-logger";

describe("password verifier with interfaces", () => {
    test("verify, with logger, calls logger", () => {
        const testableLog: RealLogger = new RealLogger();
        let logged = "";
        testableLog.info = (text) => (logged = text);

        const verifier = new PasswordVerifier([], testableLog);
        verifier.verify("any input");

        expect(logged).toMatch(/PASSED/);
    });
});

class TestableLogger extends RealLogger {
    logged = "";

    info(text: string) {
        this.logged = text;
    }

    //the error() and debug() functions
    // are still "real"
}

describe("partial mock with inheritance", () => {
    test("verify with logger, calls logger", () => {
        const mockLog: TestableLogger = new TestableLogger();

        const verifier = new PasswordVerifier([], mockLog);
        verifier.verify("any input");

        expect(mockLog.logged).toMatch(/PASSED/);
    });
});
