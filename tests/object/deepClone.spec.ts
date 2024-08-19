import { describe, expect, test } from '@jest/globals';
import { deepClone } from '../../src/object';

describe('deepClone', () => {
    it('should clone primitive values', () => {
        expect(deepClone(42)).toBe(42);
        expect(deepClone('hello')).toBe('hello');
        expect(deepClone(true)).toBe(true);
    });

    it('should clone arrays', () => {
        const array = [1, 2, { a: 3 }];
        const clonedArray = deepClone(array);

        expect(clonedArray).toEqual(array);
        expect(clonedArray).not.toBe(array); // Should not be the same reference
        expect(clonedArray[2]).not.toBe(array[2]); // Nested objects should not be the same reference
    });

    it('should clone objects', () => {
        const obj = { a: 1, b: { c: 2 } };
        const clonedObj = deepClone(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj); // Should not be the same reference
        expect(clonedObj.b).not.toBe(obj.b); // Nested objects should not be the same reference
    });

    it('should clone dates', () => {
        const date = new Date();
        const clonedDate = deepClone(date);

        expect(clonedDate).toEqual(date);
        expect(clonedDate).not.toBe(date); // Should not be the same reference
    });

    it('should handle null and undefined', () => {
        expect(deepClone(null)).toBeNull();
        expect(deepClone(undefined)).toBeUndefined();
    });

    it('should throw an error for unsupported types', () => {
        const func = () => { };
        expect(() => deepClone(func as any)).toThrow('Unable to clone the object: functions cannot be cloned.');
    });
});
