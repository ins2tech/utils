
import dayjs from 'dayjs'
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));



// 格式化日期
export function formatDate(dateStr: string, formatter = 'YYYY-MM-DD'): string {
    if (!dateStr) {
        return '----'
    }
    return dayjs(dateStr).format(formatter)
}