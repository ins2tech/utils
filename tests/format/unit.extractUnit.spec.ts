import { describe, expect } from '@jest/globals';
import { extractUnit } from '../../src/format/unit';

describe('extractUnit', () => {
    test('should extract unit from text', () => {
        const text = '123 kg';
        const unit = extractUnit(text);
        expect(unit).toEqual('kg');
    });

    test('should extract unit from chinese unit ', () => {
        const text = '123人次';
        const unit = extractUnit(text);
        expect(unit).toEqual('人次');
    });

    test('should return empty string if no match', () => {
        const text = '123';
        const unit = extractUnit(text);
        expect(unit).toEqual('');
    });

    test('should handle decimal numbers', () => {
        const text = '1.23 kg';
        const unit = extractUnit(text);
        expect(unit).toEqual('kg');
    });



});
