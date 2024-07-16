import {test, expect} from "vitest";
import {isWebsiteAlive} from "./website-verifier";

test("integration test: fetching with callback", async () => {
  const result = await isWebsiteAlive();

  expect(result?.success).toBe(true);
  expect(result?.status).toBe("ok");
});
