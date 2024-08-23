

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

