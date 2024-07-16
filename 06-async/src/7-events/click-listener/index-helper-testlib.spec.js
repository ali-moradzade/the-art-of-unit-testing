/**
 * @jest-environment jsdom
 */
//(the above is required for window events)
import {describe, expect, test} from "vitest";
import '@testing-library/jest-dom/vitest'
import {findByText, fireEvent, getByText} from '@testing-library/dom'

require("./index-helper.js");
const fs = require("fs");
const path = require("path");

const loadHtml = () => {
    const filePath = path.join(__dirname, "index.html");
    document.documentElement.innerHTML = fs.readFileSync(filePath);
    return document.documentElement;
};

const loadHtmlAndGetUIElements = () => {
    const docElem = loadHtml("index.html");
    const button = getByText(docElem, "click me", {exact: false});
    return {window, docElem, button};
};

describe("index helper", () => {
    test("dom test lib button click triggers change in page", () => {
        const {window, docElem, button} = loadHtmlAndGetUIElements();
        fireEvent.load(window);

        fireEvent.click(button);

        //wait until true ot timeout in 1 sec
        expect(findByText(docElem, "clicked", {exact: false})).toBeTruthy();
    });
});
