import {describe, expect, test} from "vitest";
import {MONDAY, PasswordVerifier, SUNDAY} from './password-verifier-time02'

class FakeTimeProvider {
    constructor(
        private fakeDay: number
    ) {
    }

    getDay() {
        return this.fakeDay;
    };
}

const makeVerifier = (
    rules: [(input: string) => { passed: boolean, reason: string }],
    timeProvider: { getDay: () => number },
) => {
    return new PasswordVerifier(rules, timeProvider);
};

describe('verifier', () => {
    test('on weekends, throws exceptions, ctor function', () => {
        const verifier = makeVerifier([] as any, new FakeTimeProvider(SUNDAY));

        expect(() => verifier.verify('anything'))
            .toThrow("It's the weekend!");
    });

    test('on weekdays, with no rules, always passes', () => {
        const verifier = makeVerifier([] as any, new FakeTimeProvider(MONDAY));

        const result = verifier.verify('anything');
        expect(result.length).toBe(0);
    });
});
