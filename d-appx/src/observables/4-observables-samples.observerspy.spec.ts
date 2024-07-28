import {describe, expect, test} from "vitest";
import {ingredients, pizzaCookBook$} from "./A-observables-samples";
import {fakeTime, subscribeSpyTo,} from "@hirez_io/observer-spy";

describe("anti pattern on the assert", () => {
    test(
        "this test has fake timers",
        fakeTime((flush) => {
            const spy = subscribeSpyTo(pizzaCookBook$());
            flush();
            expect(spy.getValues()).toEqual(ingredients.map((i) => i.name));
        })
    );
});
