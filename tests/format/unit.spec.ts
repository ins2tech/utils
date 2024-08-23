import { describe, expect } from '@jest/globals';
import { formatArea } from '../../src/format/unit';

describe('formatArea', () => {
    it('should format the area correctly', () => {
        const area = 123.456;
        const formattedArea = formatArea(area);
        expect(formattedArea).toEqual(123.46);
    });

    it('should handle zero correctly', () => {
        const area = 0;
        const formattedArea = formatArea(area);
        expect(formattedArea).toEqual(0);
    });

    it('should handle negative numbers correctly', () => {
        const area = -123.456;
        const formattedArea = formatArea(area);
        expect(formattedArea).toEqual(-123.46);
    });

    it('should handle large numbers correctly', () => {
        const area = 123456789.123;
        const formattedArea = formatArea(area);
        expect(formattedArea).toEqual(123456789.12);
    });

    it('should handle small numbers correctly', () => {
        const area = 0.001;
        const formattedArea = formatArea(area);
        expect(formattedArea).toEqual(0.00);
    });

    it('should handle numbers with many decimal places correctly', () => {
        const area = 123.456789;
        const formattedArea = formatArea(area);
        expect(formattedArea).toEqual(123.46);
    });

    it('should handle numbers very close to integers correctly', () => {
        const area = 123.9999;
        const formattedArea = formatArea(area);
        expect(formattedArea).toEqual(124);
    });

    it('should handle numbers with trailing zeros correctly', () => {
        const area = 123.4560;
        const formattedArea = formatArea(area);
        expect(formattedArea).toEqual(123.46);
    });
});


