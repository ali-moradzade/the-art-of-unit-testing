import {test, expect} from "vitest";
import {WebsiteVerifier} from "./website-verifier";
import {NetworkAdapter} from "./network-adapter";

test("integration test: fetching with callback", async () => {
  const network = new NetworkAdapter();
  const webVerifier = new WebsiteVerifier(network);

  const result = await webVerifier.isWebsiteAlive();

  expect(result.success).toBe(true);
});
