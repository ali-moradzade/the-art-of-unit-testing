import {describe, expect, it, vi} from "vitest";
import {PasswordVerifier} from "./00-password-verifier";

describe("password verifier 1", () => {
    it("passes with zero rules", () => {
        const verifier = new PasswordVerifier([], {info: vi.fn()});
        const result = verifier.verify("any input");
        expect(result).toBe(true);
    });

    it("fails with single failing rule", () => {
        const failingRule = (input: string) => false;
        const verifier = new PasswordVerifier([failingRule], {info: vi.fn()});
        const result = verifier.verify("any input");
        expect(result).toBe(false);
    });
});
