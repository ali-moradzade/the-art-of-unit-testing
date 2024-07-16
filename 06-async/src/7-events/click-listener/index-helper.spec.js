/**
 * @jest-environment jsdom
 */
//(the above is required for window events)
const fs = require("fs");
const path = require("path");
require("./index-helper.js");
import {describe, expect, test} from "vitest";

const loadHtml = (fileRelativePath) => {
    const filePath = path.join(__dirname, "index.html");
    document.documentElement.innerHTML = fs.readFileSync(filePath);
};

const loadHtmlAndGetUIElements = () => {
    loadHtml("index.html");
    const button = document.getElementById("myButton");
    const resultDiv = document.getElementById("myResult");
    return {window, button, resultDiv};
};

describe("index helper", () => {
    test("vanilla button click triggers changing the result on the page", () => {
        const {window, button, resultDiv} = loadHtmlAndGetUIElements();
        window.dispatchEvent(new Event("load"));

        button.click();

        expect(resultDiv.innerText).toBe("Clicked!");
    });
});
