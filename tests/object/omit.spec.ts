import { describe, expect, test } from '@jest/globals';
import { omit } from '../../src/object';


describe('omit function', () => {
    test('omits the specified keys from the object', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = omit(obj, ['b']);
        expect(result).toEqual({ a: 1, c: 3 });
    });

    test('returns the same object if no keys are specified', () => {
        const obj = { a: 1, b: 2 };
        const result = omit(obj, []);
        expect(result).toEqual({ a: 1, b: 2 });
    });

    test('returns an empty object if all keys are omitted', () => {
        const obj = { a: 1, b: 2 };
        const result = omit(obj, ['a', 'b']);
        expect(result).toEqual({});
    });

    test('handles an empty object correctly', () => {
        const obj = {};
        const result = omit(obj, []);
        expect(result).toEqual({});
    });
});
