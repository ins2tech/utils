import { describe, expect, test, beforeEach, afterEach, jest } from '@jest/globals';
import { countDown } from '../../src/time';


describe('countDown', () => {
    // 使用 fake timers 控制时间
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    test('should initialize with correct initial count', () => {
        const onUpdate = jest.fn();
        const onComplete = jest.fn();

        countDown({
            initialCount: 5,
            onUpdate,
            onComplete,
        });

        // 立即触发第一次 update
        expect(onUpdate).toHaveBeenCalledWith(5);
        expect(onComplete).not.toHaveBeenCalled();
    });

    test('should decrement count every interval', () => {
        const onUpdate = jest.fn();
        const onComplete = jest.fn();

        countDown({
            initialCount: 3,
            interval: 1000,
            onUpdate,
            onComplete,
        });

        // 初始调用
        expect(onUpdate).toHaveBeenCalledTimes(1);
        expect(onUpdate).toHaveBeenCalledWith(3);

        // 推进1秒
        jest.advanceTimersByTime(1000);
        expect(onUpdate).toHaveBeenCalledTimes(2);
        expect(onUpdate).toHaveBeenCalledWith(2);
        expect(onComplete).toHaveBeenCalledTimes(0);

        // // 推进2秒
        // jest.advanceTimersByTime(2000);
        // expect(onUpdate).toHaveBeenCalledTimes(3);//3->2->1
        // expect(onUpdate).toHaveBeenCalledWith(1);
        // expect(onComplete).toHaveBeenCalledTimes(0);
        // 推进3秒
        jest.advanceTimersByTime(3000);
        expect(onUpdate).toHaveBeenCalledTimes(3); // 3->2 -> 1 -> 0 (0不会触发onUpdate)
        expect(onUpdate).toBeCalledWith(1); // 3->2 -> 1->0 (0不会触发onUpdate)
        expect(onComplete).toHaveBeenCalledTimes(1);
        // expect(onComplete).not.toHaveBeenCalled();

    });

    test('should support custom step', () => {
        const onUpdate = jest.fn();
        const onComplete = jest.fn();

        countDown({
            initialCount: 10,
            step: 2,
            interval: 1000,
            onUpdate,
            onComplete,
        });

        // 初始调用
        expect(onUpdate).toHaveBeenCalledWith(10);

        // 推进1秒
        jest.advanceTimersByTime(1000);
        expect(onUpdate).toHaveBeenCalledWith(8);

        // 推进4秒 (到0)
        jest.advanceTimersByTime(4000);
        expect(onComplete).toHaveBeenCalledTimes(1);
    });

    test('should call onComplete when count reaches zero', () => {
        const onUpdate = jest.fn();
        const onComplete = jest.fn();

        countDown({
            initialCount: 1,
            onUpdate,
            onComplete,
        });

        // 初始调用
        expect(onUpdate).toHaveBeenCalledWith(1);
        expect(onComplete).not.toHaveBeenCalled();

        // 推进1秒
        jest.advanceTimersByTime(1000);
        expect(onComplete).toHaveBeenCalledTimes(1);
    });

    test('should cancel timer when cancel is called', () => {
        const onUpdate = jest.fn();
        const onComplete = jest.fn();

        const { cancel } = countDown({
            initialCount: 5,
            onUpdate,
            onComplete,
        });

        // 推进2秒
        jest.advanceTimersByTime(2000);
        expect(onUpdate).toHaveBeenCalledWith(3);

        // 取消定时器
        cancel();

        // 再推进3秒
        jest.advanceTimersByTime(3000);
        expect(onUpdate).toHaveBeenCalledTimes(3); // 5 -> 4 -> 3
        expect(onComplete).not.toHaveBeenCalled();
    });

    test('should support custom interval', () => {
        const onUpdate = jest.fn();
        const onComplete = jest.fn();

        countDown({
            initialCount: 2,
            interval: 500, // 半秒间隔
            onUpdate,
            onComplete,
        });

        // 初始调用
        expect(onUpdate).toHaveBeenCalledWith(2);

        // 推进500ms
        jest.advanceTimersByTime(500);
        expect(onUpdate).toHaveBeenCalledWith(1);

        // 再推进500ms
        jest.advanceTimersByTime(500);
        expect(onComplete).toHaveBeenCalledTimes(1);
    });
});