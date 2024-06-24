import {describe, expect, it, test} from "vitest";
import {makeVerifier, MONDAY, PasswordVerifier, SATURDAY, SUNDAY, Verifier, verify} from "./password-verifier-time01";

describe('verifier', () => {
    test('factory method: on weekends, throws exceptions', () => {
        const alwaysSunday = () => SUNDAY;
        const context = {
            verify: makeVerifier([] as any, alwaysSunday)
        };

        expect(() => context.verify('anything'))
            .toThrow("It's the weekend!");
    });

    describe('currying', () => {
        describe('sending only the first two parameters', () => {
            it('returns a curried function that takes the last one', () => {
                const onlyInputFn = verify([] as any, () => SATURDAY)!;

                expect(() => onlyInputFn('any input'))
                    .toThrow(/weekend/);
            });
        });
    });

    test('constructor function: on weekends, throws exceptions, ctor function', () => {
        const alwaysSunday = () => SUNDAY;
        const verifier = new Verifier([] as any, alwaysSunday);

        expect(() => verifier.verify('anything'))
            .toThrow("It's the weekend!");
    });

    test('class constructor: on weekends, throws exceptions, ctor function', () => {
        const alwaysSunday = () => SUNDAY;
        const verifier = new PasswordVerifier([] as any, alwaysSunday);

        expect(() => verifier.verify('anything'))
            .toThrow("It's the weekend!");
    });

    test('class constructor: on weekdays, with no rules, always passes', () => {
        const alwaysMonday = () => MONDAY;
        const verifier = new PasswordVerifier([] as any, alwaysMonday);

        const result = verifier.verify('anything');
        expect(result.length).toBe(0);
    });

    describe('refactored with constructor', () => {
        const makeVerifier = (
            rules: [(input: string) => { passed: boolean, reason: string }],
            dayFn: () => number,
        ) => {
            return new PasswordVerifier(rules, dayFn);
        };

        test('class constructor: on weekends, throws exceptions, ctor function', () => {
            const alwaysSunday = () => SUNDAY;
            const verifier = makeVerifier([] as any, alwaysSunday);

            expect(() => verifier.verify('anything'))
                .toThrow("It's the weekend!");
        });

        test('class constructor: on weekdays, with no rules, always passes', () => {
            const alwaysMonday = () => MONDAY;
            const verifier = makeVerifier([] as any, alwaysMonday);

            const result = verifier.verify('anything');
            expect(result.length).toBe(0);
        });
    });
});
