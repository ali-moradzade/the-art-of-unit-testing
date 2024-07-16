import {expect, test} from 'vitest'
import {isWebsiteAlive} from "./fetching-samples-promises";

test("isWebsiteAlive with real website returns true", async () => {
    const result = (await isWebsiteAlive())!;
    expect(result.success).toBe(true);
    expect(result.status).toBe("ok");
});
