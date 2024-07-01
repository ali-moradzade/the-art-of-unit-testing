import {describe, expect, it} from "vitest";
import {verifyPassword2} from "./00-password-verifier00";

describe("password verifier", () => {
    describe("given logger, and passing scenario", () => {
        it("calls the logger with PASSED", () => {
            let written = "";
            const mockLog = {info: (text: string) => (written = text)};

            verifyPassword2("anything", [] as any, mockLog);

            expect(written).toMatch(/PASSED/);
        });
    });
});
