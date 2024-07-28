import {describe, test} from 'vitest';
import {ingredients, pizzaCookBook$} from "./A-observables-samples";

describe("delayed observable", () => {
    test("this test takes 2 seconds", () => new Promise<void>((done) => {
        const obs = pizzaCookBook$();
        let found = 0;
        obs.subscribe((val) => {
            found++;
            if (found === ingredients.length) {
                done();
            }
        });
    }));
});
