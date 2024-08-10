type Point = {
    x: number
    y?: number
    invisible?: number | null
}

export const generateArray = (maxValue: number): Point[] => {
    const step = 0.01
    const result: Point[] = []

    for (let value = step; value <= maxValue; value += step) {
        const roundedValue = parseFloat(value.toFixed(2))

        result.push({ x: roundedValue, y: roundedValue * roundedValue })
    }

    for (let value = maxValue; value <= 2; value += step) {
        const roundedValue = parseFloat(value.toFixed(2))

        result.push({ x: roundedValue, invisible: roundedValue * roundedValue })
    }

    return result
}
