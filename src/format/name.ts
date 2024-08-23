



function isNumericStart(str: string) {
    return /^\d/.test(str)
}
/**
 * @description 将普通的字符串转换为可作为krpano hotspot的name,将字符串中的.全部替换为_
 * @param {*} str
 * @returns string
 * @example toPanoName('0aba')='hs_oaba'
 */
export function toPanoName(name: string) {
    if (isNumericStart(name)) {
        name = `hs_${name}`
    }
    return name.replace(/\./g, '_')
}


/**
 * 格式化名字函数，用于隐藏名字中间部分并显示姓氏和名字的最后一个字
 *
 * @param {string} name - 要格式化的名字
 * @returns {string} - 格式化后的名字
 */
export function formatPeopleName(name: string): string {
    if (name.length <= 2) {
        // 名字长度小于等于2，只保留姓和一个"*"
        return `${name[0]}*`
    } else if (name.length === 3) {
        // 名字长度等于3，返回姓氏和名字的最后一个字
        return `${name[0]}*${name[2]}`
    } else if (name.length > 3) {
        return `${name.slice(0, 2)}*${name.slice(-1)}`;
    }
    return name;
}



