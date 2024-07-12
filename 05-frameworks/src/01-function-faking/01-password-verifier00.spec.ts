import {describe, expect, test, vi} from "vitest";
import {makeVerifier} from "./00-password-verifier00";

describe('higher order factory functions', () => {
    describe('password verifier', () => {
        test('given logger and passing scenario', () => {
            const loggerMocked = {
                info: vi.fn(),
            };

            const passwordVerifier = makeVerifier([] as any, loggerMocked);
            passwordVerifier('any input');

            expect(loggerMocked.info).toHaveBeenCalledWith(expect.stringContaining('PASS'));
        });
    });
});
