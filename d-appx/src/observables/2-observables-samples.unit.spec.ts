import {afterEach, beforeEach, describe, expect, test, vi} from "vitest";
import {ingredients, pizzaCookBook$} from "./A-observables-samples";

describe("with fake timers", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });
    afterEach(() => {
        vi.clearAllTimers();
    });

    test("this test has fake timers", () => {
        const obs = pizzaCookBook$();
        let found = 0;
        console.log("BEFORE");
        obs.subscribe((val) => {
            found++;
        });

        vi.advanceTimersToNextTimer();
        vi.advanceTimersToNextTimer();
        vi.advanceTimersToNextTimer();
        vi.advanceTimersToNextTimer();
        expect(found).toBe(ingredients.length);
    });
});
