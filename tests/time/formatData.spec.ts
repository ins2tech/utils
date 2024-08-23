import { describe, expect, test } from '@jest/globals';
import { formatDate } from '../../src/time';


describe('formatDate', () => {
    test('should return ---- when dateStr is empty', () => {
        expect(formatDate('')).toEqual('----');
    });

    test('should format dateStr with default formatter', () => {
        const dateStr = '2023/09/15';
        expect(formatDate(dateStr)).toEqual('2023-09-15');
    });

    test('should format dateStr with custom formatter', () => {
        const dateStr = '2023-09-15';
        const formatter = 'MM-DD-YYYY';
        expect(formatDate(dateStr, formatter)).toEqual('09-15-2023');
    });

    test('should format dateStr with custom formatter with different split', () => {
        const dateStr = '2023-09-15';
        const formatter = 'YYYY/MM/DD';
        expect(formatDate(dateStr, formatter)).toEqual('2023/09/15');
    });
});
