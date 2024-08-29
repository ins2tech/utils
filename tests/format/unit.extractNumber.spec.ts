import { describe, expect } from '@jest/globals';
import { extractNumber } from '../../src/format/unit';

describe('extractNumber', () => {

    test('should return the first int number if found', () => {
        const result = extractNumber('123亩');
        expect(result).toEqual(123);
    });

    test('should return the first float number  if found', () => {
        const result = extractNumber('123.22亿元');
        expect(result).toEqual(123.22);
    });

    test('should return 0 if no numbers found', () => {
        const result = extractNumber('abc');
        expect(result).toEqual(0);
    });

    test('should handle empty array', () => {
        const result = extractNumber('');
        expect(result).toEqual(0);
    });
});
