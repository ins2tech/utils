import { describe, expect, test } from '@jest/globals';
import { formatMuArea } from '../../src/format/unit';



describe('formatMuArea', () => {
    test('should format the area correctly', () => {
        const result = formatMuArea(1000)
        expect(result).toEqual(1.5)
    })

    test('should return 0 for 0 input', () => {
        const result = formatMuArea(0)
        expect(result).toEqual(0)
    })
})




