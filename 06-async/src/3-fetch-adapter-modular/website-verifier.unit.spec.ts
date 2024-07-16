import {beforeEach, describe, expect, test, vi} from "vitest";
import {isWebsiteAlive} from "./website-verifier";
import * as adapter from './network-adapter'

describe("unit test website verifier", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test("with good content, returns true", async () => {
        vi.spyOn(adapter, "fetchUrlText").mockImplementation(vi.fn().mockReturnValue({
            ok: true,
            text: "illustrative",
        }))

        const result = await isWebsiteAlive();

        expect(result?.success).toBe(true);
        expect(result?.status).toBe("ok");
    });

    test("with bad content, returns false", async () => {
        vi.spyOn(adapter, "fetchUrlText").mockImplementation(vi.fn().mockReturnValue({
            ok: true,
            text: "<span>hello world</span>",
        }))

        const result = await isWebsiteAlive();

        expect(result?.success).toBe(false);
        expect(result?.status).toBe("missing text");
    });

    test("with bad url or network, throws", async () => {
        vi.spyOn(adapter, "fetchUrlText").mockImplementation(vi.fn().mockReturnValue({
            ok: false,
            text: "some network error",
        }))

        try {
            await isWebsiteAlive();
        } catch (err: any) {
            expect(err.success).toBe(false);
            expect(err.status).toBe("some network error");
        }
    });
});
