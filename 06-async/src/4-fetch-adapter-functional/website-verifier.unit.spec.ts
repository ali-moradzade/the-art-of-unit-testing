import {describe, expect, test} from "vitest";
import {NetworkAdapter} from "./network-adapter";
import {WebsiteVerifier} from "./website-verifier";

const makeStubNetworkWithResult = (fakeResult: { ok: boolean, text: string }): NetworkAdapter => {
    return {
        fetchUrlText: () => {
            return Promise.resolve(fakeResult);
        },
    };
};

describe("unit test website verifier", () => {
    test("with good content, returns true", async () => {
        const stubSyncNetwork = makeStubNetworkWithResult({
            ok: true,
            text: "illustrative",
        });
        const webVerifier = new WebsiteVerifier(stubSyncNetwork);
        const result = await webVerifier.isWebsiteAlive();

        expect(result.success).toBe(true);
        expect(result.status).toBe("ok");
    });

    test("with bad content, returns false", async () => {
        const stubSyncNetwork = makeStubNetworkWithResult({
            ok: true,
            text: "unexpected content",
        });
        const webVerifier = new WebsiteVerifier(stubSyncNetwork);

        const result = await webVerifier.isWebsiteAlive();

        expect(result.success).toBe(false);
        expect(result.status).toBe("missing text");
    });

    test("with bad url or network, throws", async () => {
        const stubSyncNetwork = makeStubNetworkWithResult({
            ok: false,
            text: "some error",
        });
        const webVerifier = new WebsiteVerifier(stubSyncNetwork);

        try {
            await webVerifier.isWebsiteAlive();
        } catch (err: any) {
            expect(err.success).toBe(false);
            expect(err.status).toBe("some error");
        }
    });
});
