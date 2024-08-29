

export function formatArea(val: number): number {
    return +(val.toFixed(2))
}
export function formatMuArea(val: number): number {
    return +(val * 0.0015).toFixed(2)
}

export function opacity2Hex(opacity = 0) {
    const opacityMap: Record<number, string> = {
        1: 'FF',
        0.9: 'E6',
        0.8: 'CC',
        0.7: 'B3',
        0.6: '99',
        0.5: '80',
        0.4: '66',
        0.3: '4D',
        0.2: '33',
        0.1: '1A',
        0: '00'
    }
    return opacityMap[opacity]
}




/**
 * @param {string} text - The string from which to extract the number.
 * @return {number} - The extracted number, or 0 if no number is found.
 */
export function extractNumber(text: string): number {
    const regex = /(\d+(?:\.\d+)?)\s*(\D+)/ // 匹配数字

    const matches = text.match(regex)

    if (matches) {
        const ret = +matches[1]
        return ret
    }
    return 0
}

/**
 * @description 提取字符串里面数字后面的单位
 * @param text string
 * @returns string
 */
export function extractUnit(text: string): string {
    const regex = /(\d+(?:\.\d+)?)\s*(\D+)/ // 匹配数字和紧随其后的非数字字符作为单位
    const match = text.match(regex)

    if (match) {
        const unit = match[2].trim()
        return unit
    }

    return ''
}