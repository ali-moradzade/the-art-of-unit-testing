import {describe, expect, it} from "vitest";
import {getAllProductsCallback, getAllProductsWithPromise} from "./product-reader";

describe("callback based product-reader integration tests", () => {
    describe("given existing file", () => {
        it("reads the file and returns it as JSON", () => new Promise<void>((done) => {
            getAllProductsCallback(
                (err: any) => {
                    console.log(err);
                },
                (data: any) => {
                    expect(data.products.length).toBe(2);
                    done();
                }
            );
        }));
    });
});

describe("promise based product-reader integration tests", () => {
    describe("given existing file", () => {
        it("reads the file and returns it as JSON", async () => {
            const result = await getAllProductsWithPromise();
            expect(result.products.length).toBe(2);
        });
    });
});
