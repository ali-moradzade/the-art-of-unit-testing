import {describe, expect, it} from "vitest";
import {PasswordVerifier2} from "./password-verifier2";

it('the first test', () => {
    const verifier = new PasswordVerifier2();
    const fakeRule = (input: string) => ({passed: false, reason: `${input} fake reason`});

    verifier.addRule(fakeRule);
    const result = verifier.verify('any value');

    expect(result[0]).toContain('fake reason');
});

const makeVerifier = () => new PasswordVerifier2();

describe('Password Verifier', () => {
    describe('by default', () => {
        test('passes', () => {
            const verifier = makeVerifier();

            const result = verifier.verify('any value');

            expect(result.length).toBe(0);
        });
    });

    describe('with a failing rule', () => {
        const failingRule = () => ({passed: false, reason: 'fake reason'});
        test('it has errors', () => {
            const verifier = makeVerifier();

            verifier.addRule(failingRule);
            const errors = verifier.verify('any value');

            expect(errors.length).toBe(1);
            expect(errors[0]).toContain('fake reason');
        });
    });

    describe('with two failing rules', () => {
        const failingRule1 = () => ({passed: false, reason: 'fake reason 1'});
        const failingRule2 = () => ({passed: false, reason: 'fake reason 2'});

        test('it has 2 errors', () => {
            const verifier = makeVerifier();

            verifier.addRule(failingRule1);
            verifier.addRule(failingRule2);
            const errors = verifier.verify('any value');

            const [err1, err2] = errors;
            expect(errors.length).toBe(2);
            expect(err1).toContain('fake reason 1');
            expect(err2).toContain('fake reason 2');
        });
    });
});
