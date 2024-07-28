import {afterEach, beforeEach, describe, expect, test, vi} from "vitest";
import {findRecentlyRebooted} from "../00-begin/machine-scanner00";

describe('v1 findRecentlyRebooted', () => {
    test('given 1 of 2 machines under threshold, it is found', () => {
        const originalNow = Date.now;
        const fromDate = new Date(2000, 0, 3);
        Date.now = () => fromDate.getTime();

        const rebootTwoDaysEarly = new Date(2000, 0, 1);
        const machines = [
            {lastBootTime: rebootTwoDaysEarly, name: 'ignored'},
            {lastBootTime: fromDate, name: 'found'}];

        const result = findRecentlyRebooted(machines as any, 1);

        expect(result.length).toBe(1);
        expect(result[0].name).toContain('found');

        Date.now = originalNow;
    });
});

describe('v2 findRecentlyRebooted', () => {
    let originalNow: any;

    beforeEach(() => {
        originalNow = Date.now;
    });

    afterEach(() => {
        Date.now = originalNow;
    });

    test('given 1 of 2 machines under threshold, it is found', () => {
        const fromDate = new Date(2000, 0, 3);
        Date.now = () => fromDate.getTime();

        const rebootTwoDaysEarly = new Date(2000, 0, 1);
        const machines = [
            {lastBootTime: rebootTwoDaysEarly, name: 'ignored'},
            {lastBootTime: fromDate, name: 'found'}];

        const result = findRecentlyRebooted(machines as any, 1);

        expect(result.length).toBe(1);
        expect(result[0].name).toContain('found');
    });
});

describe('v3 findRecentlyRebooted with jest fn', () => {
    let originalNow: any;

    beforeEach(() => {
        originalNow = Date.now;
    });

    afterEach(() => {
        Date.now = originalNow;
    });

    test('given 1 of 2 machines under threshold, it is found', () => {
        const fromDate = new Date(2000, 0, 3);
        Date.now = vi.fn(() => fromDate.getTime());

        const rebootTwoDaysEarly = new Date(2000, 0, 1);
        const machines = [
            {lastBootTime: rebootTwoDaysEarly, name: 'ignored'},
            {lastBootTime: fromDate, name: 'found'}];

        const result = findRecentlyRebooted(machines as any, 1);

        expect(result.length).toBe(1);
        expect(result[0].name).toContain('found');
    });
});

describe('v4 findRecentlyRebooted with jest spyOn', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    test('given 1 of 2 machines under threshold, it is found', () => {
        const fromDate = new Date(2000, 0, 3);
        Date.now = vi.spyOn(Date, 'now')
            .mockImplementation(() => fromDate.getTime()) as any;

        const rebootTwoDaysEarly = new Date(2000, 0, 1);
        const machines = [
            {lastBootTime: rebootTwoDaysEarly, name: 'ignored'},
            {lastBootTime: fromDate, name: 'found'}];

        const result = findRecentlyRebooted(machines as any, 1);

        expect(result.length).toBe(1);
        expect(result[0].name).toContain('found');
    });
});
