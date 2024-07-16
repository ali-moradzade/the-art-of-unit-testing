import {describe, expect, it} from "vitest";
import {Adder} from "./adder";

describe("events based module", () => {
    describe("add", () => {
        it("generates addition event when called", () => new Promise<void>((done) => {
            const adder = new Adder();

            adder.on("added", (result) => {
                expect(result).toBe(3);
                done();
            });

            adder.add(1, 2);
        }));
    });
});
