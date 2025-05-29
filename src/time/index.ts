
import dayjs from 'dayjs'
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));



// 格式化日期
export function formatDate(dateStr: string, formatter = 'YYYY-MM-DD'): string {
    if (!dateStr) {
        return '----'
    }
    return dayjs(dateStr).format(formatter)
}


/**
 * 倒计时工具函数
 * @param options 配置选项
 * @param options.initialCount 初始倒计时数值（默认60）
 * @param options.step 每次递减的步长（默认1）
 * @param options.interval 倒计时间隔（毫秒，默认1000）
 * @param options.onUpdate 倒计时更新回调
 * @param options.onComplete 倒计时结束回调
 * @returns 返回一个包含取消倒计时的函数
 */
export function countDown(options: {
    initialCount?: number;
    step?: number;
    interval?: number;
    onUpdate: (currentCount: number) => void;
    onComplete: () => void;
}): { cancel: () => void } {
    const {
        initialCount = 60,
        step = 1,
        interval = 1000,
        onUpdate,
        onComplete,
    } = options;

    let count = initialCount;
    let timer: any = null;

    // 开始倒计时
    const startTimer = () => {
        timer = setInterval(() => {
            count -= step;

            if (count > 0) {
                onUpdate(count);
            } else {
                clearInterval(timer);
                timer = null;
                // console.log('called onComplete')
                onComplete();
            }
        }, interval);
    };

    // 立即触发第一次更新
    onUpdate(initialCount);
    startTimer();

    // 返回取消函数
    return {
        cancel: () => {
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
        },
    };
}
