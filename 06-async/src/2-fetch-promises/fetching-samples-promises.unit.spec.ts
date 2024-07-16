import {describe, expect, test} from "vitest";
import {processFetchContent, processFetchError} from "./fetching-samples-promises";
import {AxiosError} from "axios";

describe("website up check", () => {
    test("on fetch success with good content, returns true", () => {
        const result = processFetchContent("illustrative");
        expect(result.success).toBe(true);
        expect(result.status).toBe("ok");
    });

    test("on fetch success with bad content, returns false", () => {
        const result = processFetchContent("text not on site");
        expect(result.success).toBe(false);
        expect(result.status).toBe("missing text");
    });

    test("on fetch fail, returns error text and false", () => {
        expect(() => processFetchError(new AxiosError<unknown, any>("error text"))).toThrowError(
            "error text"
        );
    });
});
