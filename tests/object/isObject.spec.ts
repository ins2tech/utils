import { describe, expect, test } from '@jest/globals';
import { isObject } from '../../src/object';

describe('isObject function', () => {
    test('returns true for plain objects', () => {
        expect(isObject({})).toBe(true);
    });

    test('returns false for arrays', () => {
        expect(isObject([])).toBe(false);
    });

    test('returns false for null', () => {
        expect(isObject(null)).toBe(false);
    });

    test('returns false for functions', () => {
        expect(isObject(function () { })).toBe(false);
    });

    test('returns false for numbers', () => {
        expect(isObject(123)).toBe(false);
    });

    test('returns false for strings', () => {
        expect(isObject('string')).toBe(false);
    });

    test('returns false for boolean values', () => {
        expect(isObject(true)).toBe(false);
    });
});

