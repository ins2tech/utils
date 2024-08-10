import { describe, expect, test } from '@jest/globals';
import { pick } from '../../src/object';

describe('object utils', () => {

    describe('pick function', () => {
        test('picks the specified keys from the object', () => {
            const obj = { a: 1, b: 2, c: 3 };
            const result = pick(obj, ['a', 'c']);
            expect(result).toEqual({ a: 1, c: 3 });
        });

        test('returns an empty object if no keys are specified', () => {
            const obj = { a: 1, b: 2 };
            const result = pick(obj, []);
            expect(result).toEqual({});
        });

        test('ignores keys not present in the object', () => {
            const obj = { a: 1 };
            const result = pick(obj, ['a']);
            expect(result).toEqual({ a: 1 });
        });

        test('returns an empty object if the object is empty', () => {
            const obj = {};
            const result = pick(obj, []);
            expect(result).toEqual({});
        });
    });

});