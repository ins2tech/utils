
import { describe, expect } from '@jest/globals';
import { formatPeopleName } from '../../src/format/name';


describe('formatPeopleName', () => {
    test('should return the name with only the first letter and a * when the name length is less than or equal to 2', () => {
        expect(formatPeopleName('张三')).toEqual('张*');
    });

    test('should return the name with the first letter, * for the middle, and the last letter when the name length is greater than 2', () => {
        expect(formatPeopleName('林小四')).toEqual('林*四');
    });
    test('should return the name with the first letter, * for the middle, and the last letter when the name length is greater than 3', () => {
        expect(formatPeopleName('欧阳擎天')).toEqual('欧阳*天');
    });
});
