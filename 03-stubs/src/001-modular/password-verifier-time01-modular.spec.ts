import {describe, it, afterEach, expect} from "vitest";
import {inject, reset, SATURDAY, verifyPassword} from './password-verifier-time01-modular';

describe('verifyPassword', () => {
    afterEach(reset);
    describe('when its the weekend', () => {
        it('throws an error', () => {
            inject({
                // strongly tied into the interface of the external dependency
                moment: function () {
                    return {
                        day: () => SATURDAY
                    };
                }
            });

            expect(() => verifyPassword([] as any, 'any input'))
                .toThrowError("It's the weekend!");
        });
    });
});
