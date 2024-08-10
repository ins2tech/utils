/**
 * 获取对象的子集 
 * @example pick(foo,['key1','key2'])
 * @param {T} obj 
 * @param {K[]} keys 
 * @return 
 */

export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result: Partial<T> = {} as any;
    for (const key of keys) {
        if (key in obj) {
            result[key] = obj[key];
        }
    }
    return result as Pick<T, K>;
}



export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    const result: Partial<T> = {} as any; // 使用 any 进行类型断言以绕过 TypeScript 的限制
    for (const key in obj) {
        if (!keys.includes(key as any)) {
            result[key] = obj[key];
        }
    }
    return result as Omit<T, K>; // 显式断言为 Omit<T, K> 类型
}

export function isObject(item: any) {
    return Object.prototype.toString.call(item) === '[object Object]';
}