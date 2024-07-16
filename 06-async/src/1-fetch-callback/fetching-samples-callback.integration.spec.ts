import {expect, test} from "vitest";
import {CallbackArg, isWebsiteAlive} from "./fetching-samples-callback";

test("isWebsiteAlive with real website returns true", () => new Promise<void>(done => {
    isWebsiteAlive((result: CallbackArg) => {
        expect(result.success).toBe(true);
        done();
    });
}));
