import {describe, expect, it} from "vitest";
import {verifyPassword} from "./password-verifier0";

it('v1: the first test', () => {
    const fakeRule = () => ({passed: false, reason: 'fake reason'});

    const errors = verifyPassword('any value', [fakeRule]);
    expect(errors[0]).toMatch('fake reason');
});

it('v1.1 verifyPassword, given a failing rule, returns errors', () => {
    const fakeRule = () => ({passed: false, reason: 'fake reason'});

    const errors = verifyPassword('any value', [fakeRule]);

    expect(errors[0]).toContain('fake reason');
});

describe('v1.2: verifyPassword', () => {
    it('given a failing rule, returns errors', () => {
        const fakeRule = () => ({passed: false, reason: 'fake reason'});

        const errors = verifyPassword('any value', [fakeRule]);

        expect(errors[0]).toContain('fake reason');
    });
});

describe('v1.3: verifyPassword', () => {
    describe('with a failing rule', () => {
        it('returns errors', () => {
            const fakeRule = () => ({
                passed: false,
                reason: 'fake reason'
            });

            const errors = verifyPassword('any value', [fakeRule]);

            expect(errors[0]).toContain('fake reason');
        });
    });
});

describe('v1.4: verifyPassword', () => {
    describe('with a failing rule', () => {
        const fakeRule = () => ({
            passed: false,
            reason: 'fake reason'
        });

        it('returns errors', () => {
            const errors = verifyPassword('any value', [fakeRule]);

            expect(errors[0]).toContain('fake reason');
        });
    });
});

describe('v1.5: verifyPassword', () => {
    describe('with a failing rule', () => {
        it('returns errors', () => {
            const fakeRule = () => ({
                passed: false,
                reason: 'fake reason'
            });

            const errors = verifyPassword('any value', [fakeRule]);

            expect(errors[0]).toContain('fake reason');
        });
    });
});
