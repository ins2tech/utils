

import { describe, expect, test } from '@jest/globals';
import { removeEmptyKeys } from '../../src/object'


describe('removeEmptyKeys', () => {
    it('should remove keys with null, undefined, or empty string values', () => {
        const input = { a: null, b: undefined, c: '', d: 'value' };
        const output = removeEmptyKeys(input);
        expect(output).toEqual({ d: 'value' });
    });

    it('should handle nested objects and remove keys with empty values', () => {
        const input = {
            a: null,
            b: undefined,
            c: '',
            d: 'value',
            e: {
                f: null,
                g: undefined,
                h: '',
                i: 'nestedValue',
                j: {
                    k: null,
                    l: '',
                    m: 'deepValue',
                },
            },
            n: {
                o: '',
            },
        };
        const output = removeEmptyKeys(input);
        expect(output).toEqual({
            d: 'value',
            e: {
                i: 'nestedValue',
                j: {
                    m: 'deepValue',
                },
            },
        });
    });

    it('should return arrays unchanged', () => {
        const input = [null, undefined, '', 'value'];
        const output = removeEmptyKeys(input);
        expect(output).toEqual([null, undefined, '', 'value']);
    });

    it('should handle arrays within objects', () => {
        const input = {
            a: [null, undefined, '', 'value'],
            b: null,
            c: {
                d: [null, undefined, 'valid'],
                e: '',
            },
        };
        const output = removeEmptyKeys(input);
        expect(output).toEqual({
            a: [null, undefined, '', 'value'],
            c: {
                d: [null, undefined, 'valid'],
            },
        });
    });
});

