import { describe, expect, test } from '@jest/globals';
import { opacity2Hex } from '../../src/format/unit';



describe('opacity2Hex', () => {
    test('should return correct hex value for opacity 1', () => {
        expect(opacity2Hex(1)).toEqual('FF');
    });

    test('should return correct hex value for opacity 0.9', () => {
        expect(opacity2Hex(0.9)).toEqual('E6');
    });

    test('should return correct hex value for opacity 0.8', () => {
        expect(opacity2Hex(0.8)).toEqual('CC');
    });

    test('should return correct hex value for opacity 0.7', () => {
        expect(opacity2Hex(0.7)).toEqual('B3');
    });

    test('should return correct hex value for opacity 0.6', () => {
        expect(opacity2Hex(0.6)).toEqual('99');
    });

    test('should return correct hex value for opacity 0.5', () => {
        expect(opacity2Hex(0.5)).toEqual('80');
    });

    test('should return correct hex value for opacity 0.4', () => {
        expect(opacity2Hex(0.4)).toEqual('66');
    });

    test('should return correct hex value for opacity 0.3', () => {
        expect(opacity2Hex(0.3)).toEqual('4D');
    });

    test('should return correct hex value for opacity 0.2', () => {
        expect(opacity2Hex(0.2)).toEqual('33');
    });

    test('should return correct hex value for opacity 0.1', () => {
        expect(opacity2Hex(0.1)).toEqual('1A');
    });

    test('should return correct hex value for opacity 0', () => {
        expect(opacity2Hex(0)).toEqual('00');
    });
});

