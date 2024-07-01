import {describe, it, expect, afterEach} from "vitest";
import {injectDependencies, resetDependencies, verifyPassword,} from "./password-verifier-injectable";

describe("password verifier", () => {
    afterEach(resetDependencies);

    describe("given logger and passing scenario", () => {
        it("calls the logger with PASS", () => {
            let logged = "";
            const mockLog = {info: (text: string) => (logged = text)};
            injectDependencies({log: mockLog});

            verifyPassword("anything", [] as any);

            expect(logged).toMatch(/PASSED/);
        });
    });
});
