import {describe, expect, test} from "vitest";
import {isWebsiteAliveWithCallback, isWebsiteAliveWithPromises} from "./fetching-samples-before";

describe('Fetching samples', () => {
    test("NETWORK REQUIRED (callback): website with correct content, returns true", () => new Promise<void>(done => {
        isWebsiteAliveWithCallback((err: any, result: any) => {
            expect(err).toBeNull();
            expect(result.status).toBe("ok");
            expect(result.success).toBe(true);
            done();
        });
    }));

    test("NETWORK REQUIRED (await): website with correct content, returns true", () => new Promise<void>(done => {
        isWebsiteAliveWithPromises().then((result) => {
            expect(result.success).toBe(true);
            expect(result.status).toBe("ok");
            done();
        });
    }));

    test("NETWORK REQUIRED2 (await): website with correct content, returns true", async () => {
        const result = await isWebsiteAliveWithPromises();
        expect(result.success).toBe(true);
        expect(result.status).toBe("ok");
    });
});
