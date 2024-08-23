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
export function removeEmptyKeys(target: any): any {
    if (Array.isArray(target)) {
        return target.map(removeEmptyKeys);
    } else if (target !== null && typeof target === 'object') {
        return Object.keys(target)
            .filter((key) => target[key] !== null && target[key] !== undefined && target[key] !== '')
            .reduce((acc: any, key) => {
                const value = removeEmptyKeys(target[key]);
                if (Object.keys(value).length !== 0 || typeof value !== 'object') {
                    acc[key] = value;
                }
                return acc;
            }, {});
    } else {
        return target;
    }
}


export function deepClone<T>(source: T): T {
    if (typeof source === 'function') {
        throw new Error('Unable to clone the object: functions cannot be cloned.');
    }
    if (source === null || typeof source !== 'object') {
        return source;
    }

    if (source instanceof Array) {
        const clonedArray = [];
        for (const item of source) {
            clonedArray.push(deepClone(item));
        }
        return clonedArray as any;
    }

    if (source instanceof Date) {
        return new Date(source.getTime()) as any;
    }

    if (source instanceof Object) {
        const clonedObject: any = {};
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                clonedObject[key] = deepClone((source as any)[key]);
            }
        }
        return clonedObject;
    }

    throw new Error('Unable to clone the object.');
}
