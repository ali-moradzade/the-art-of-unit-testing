import {describe, expect, test} from "vitest";
import {CallbackArg, processFetchError, processFetchSuccess} from "./fetching-samples-callback";

describe("Website alive checking", () => {
    test("When website fetch content matches, returns true", () => new Promise<void>(done => {
        processFetchSuccess("illustrative", (result: CallbackArg) => {
            expect(result.success).toBe(true);
            expect(result.status).toBe("ok");
            done();
        });
    }));

    test("When website fetch content does not match, returns false", () => new Promise<void>(done => {
        processFetchSuccess("text not on the website", (result: CallbackArg) => {
            expect(result.status).toBe("missing text");
            done();
        });
    }));

    test("When fetch fails, returns false", () => new Promise<void>(done => {
        processFetchError(new Error("error text"), (result: CallbackArg) => {
            expect(result.status).toBe("error text");
            done();
        });
    }));
});
