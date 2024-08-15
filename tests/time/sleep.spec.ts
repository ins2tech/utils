import { describe, expect, test } from '@jest/globals';
import { sleep } from '../../src/time';

describe('sleep function', () => {
    test('resolves after the specified delay', async () => {
        const start = Date.now();
        await sleep(100); // Sleep for 100 milliseconds
        const end = Date.now();
        const duration = end - start;

        // Check if the duration is close to 100ms (allowing a small margin for test execution time)
        expect(duration).toBeGreaterThanOrEqual(100);
        expect(duration).toBeLessThan(150); // Allowing a bit of tolerance for timing issues
    });

    test('handles 0 milliseconds', async () => {
        const start = Date.now();
        await sleep(0); // Sleep for 0 milliseconds
        const end = Date.now();
        const duration = end - start;

        // Duration should be close to 0ms
        expect(duration).toBeLessThan(10); // Allowing a small margin
    });
});
