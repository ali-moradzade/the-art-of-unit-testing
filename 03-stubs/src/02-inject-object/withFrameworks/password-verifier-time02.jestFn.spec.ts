import {test, describe, expect, vitest} from "vitest";
import {MONDAY, PasswordVerifier, SUNDAY} from '../password-verifier-time02';

const makeVerifier = (
    rules: [(input: string) => { passed: boolean, reason: string }],
    timeProvider: { getDay: () => number }
) => {
    return new PasswordVerifier(rules, timeProvider);
};

describe('verifier', () => {
    test('on weekends, throws exceptions, ctor function', () => {
        const stubGetDayFn = vitest.fn(() => SUNDAY);
        const verifier = makeVerifier([] as any, {getDay: stubGetDayFn});

        expect(() => verifier.verify('anything'))
            .toThrow("It's the weekend!");
    });

    test('on weekdays, with no rules, always passes', () => {
        const stubGetDayFn = vitest.fn(() => MONDAY);
        const verifier = makeVerifier([] as any, {getDay: stubGetDayFn});

        const result = verifier.verify('anything');
        expect(result.length).toBe(0);
    });
});
