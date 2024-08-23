
import { describe, expect } from '@jest/globals';
import { toPanoName } from '../../src/format/name';

describe('toPanoName', () => {
    beforeEach(() => {
        // 重置模块状态
        jest.resetModules();
    });

    test('should add "hs_" prefix if name starts with a number', () => {
        const name = '123test';
        const result = toPanoName(name);
        expect(result).toEqual('hs_123test');
    });

    test('should replace dots with underscores', () => {
        const name = 'test.name';
        const result = toPanoName(name);
        expect(result).toEqual('test_name');
    });

    test('should do nothing if name does not start with a number and has no dots', () => {
        const name = 'test';
        const result = toPanoName(name);
        expect(result).toEqual('test');
    });
});
