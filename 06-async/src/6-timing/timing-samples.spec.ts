import {beforeEach, describe, expect, test, vi} from "vitest";
import {calculate1, calculate2, calculate4, calculate5} from "./timing-samples";

describe('timing samples', () => {
    describe("calculate1 - with jest", () => {
        beforeEach(() => {
            vi.useFakeTimers();
        })

        test("fake timeout with callback", () => new Promise<void>((done) => {
            calculate1(1, 2, (result) => {
                expect(result).toBe(3);
                done();
            });
            vi.advanceTimersToNextTimer();
        }));
    });

    describe("calculate2 - Promises", () => {
        beforeEach(() => {
            vi.useFakeTimers()
        });

        test("fake timeout with Promise", () => new Promise<void>((done) => {
            calculate2(1, 2).then((result) => {
                expect(result).toBe(3);
                done()
            });

            vi.advanceTimersToNextTimer();
        }));
    });

    describe("calculate with intervals", () => {
        beforeEach(() => {
            vi.useFakeTimers()
        });

        test("calculate 4 with input and output functions for intervals", () => {
            const inputFn = () => ({x: 1, y: 2});
            const results: number[] = [];
            calculate4(inputFn, (result) => results.push(result));

            vi.advanceTimersToNextTimer();
            vi.advanceTimersToNextTimer();

            expect(results[0]).toBe(3);
            expect(results[1]).toBe(3);
        });
    });

    describe("calculate 5 with Observable intervals", () => {
        beforeEach(() => {
            vi.clearAllTimers()
            vi.useFakeTimers()
        });

        test("calculate5 with single interval on observable can be asserted", () => new Promise<void>((done) => {
            const inputFn = () => ({x: 1, y: 2});
            calculate5(inputFn).subscribe(
                (result) => {
                    expect(result).toBe(3);
                    done()
                }
            );

            vi.advanceTimersToNextTimer();
        }));

        test("calculate5 with two intervals on observable can be asserted", () => {
            let accumulator = 0;
            const inputFn = () => ({x: 1, y: 2});

            calculate5(inputFn).subscribe((result) => (accumulator += result));

            vi.advanceTimersToNextTimer();
            vi.advanceTimersToNextTimer();

            expect(accumulator).toBe(6);
        });
    });
})
