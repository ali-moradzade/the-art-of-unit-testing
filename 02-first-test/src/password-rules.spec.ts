import {describe, expect, it, test} from "vitest";
import {oneUpperCaseRule} from './password-rules';

describe('one uppercase rule', () => {
    it('given no uppercase, it fails', () => {
        const result = oneUpperCaseRule('abc');
        expect(result.passed).toEqual(false);
    });

    it('given one uppercase, it passes', () => {
        const result = oneUpperCaseRule('Abc');
        expect(result.passed).toEqual(true);
    });

    it('given a different uppercase, it passes', () => {
        const result = oneUpperCaseRule('aBc');
        expect(result.passed).toEqual(true);
    });
});

//parameterized
describe('v2 one uppercase rule', () => {
    it('given no uppercase, it fails', () => {
        const result = oneUpperCaseRule('abc');
        expect(result.passed).toEqual(false);
    });

    it.each([
        'Abc',
        'aBc'
    ])('given one uppercase, it passes', (input) => {
        const result = oneUpperCaseRule(input);
        expect(result.passed).toEqual(true);
    });
});

//parameterized
describe('v3 one uppercase rule', () => {
    test.each(
        [
            ['Abc', true],
            ['aBc', true],
            ['abc', false]
        ]
    )('given %s, %s ', (input, expected) => {
        const result = oneUpperCaseRule(input);
        expect(result.passed).toEqual(expected);
    });
});

describe('v4 one uppercase rule, with the fancy jest table input', () => {
    it.each`
    input | expected
    ${'Abc'} | ${true}
    ${'aBc'} | ${true}
    ${'abc'} | ${false}
    `('given $input', ({input, expected}) => {
        const result = oneUpperCaseRule(input);
        expect(result.passed).toEqual(expected);
    });
});

describe('v5 one uppercase rule, with vanilla JS test.each', () => {
    const tests = {
        Abc: true,
        aBc: true,
        abc: false
    };

    for (const [input, expected] of Object.entries(tests)) {
        it(`given ${input}, ${expected}`, () => {
            const result = oneUpperCaseRule(input);
            expect(result.passed).toEqual(expected);
        });
    }
});
