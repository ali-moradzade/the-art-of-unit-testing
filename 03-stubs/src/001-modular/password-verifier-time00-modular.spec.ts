import {describe, expect, it} from "vitest";
import {inject, SATURDAY, verifyPassword} from './password-verifier-time00-modular'

const injectDate = (newDay: number) => {
    return inject({
        moment: function () {
            // we're faking the moment.js module's API here.
            return {
                day: () => newDay
            };
        }
    });
};

describe('verifyPassword', () => {
    describe('when its the weekend', () => {
        it('throws an error', () => {
            const reset = injectDate(SATURDAY);

            expect(() => verifyPassword([] as any, 'any input'))
                .toThrowError("It's the weekend!");

            reset();
        });
    });
});
