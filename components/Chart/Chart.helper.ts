type Point = {
    x: number
    y?: number
    invisible?: number | null
}

export const generateArray = (maxValue: number): Point[] => {
    const maxPoints = 200
    const step = maxValue / maxPoints > 0.01 ? maxValue / maxPoints : 0.01
    const result: Point[] = []

    for (let value = step + 1; value <= maxValue; value += step) {
        const roundedValue = parseFloat(value.toFixed(2))
        const calculatedY = Math.pow(roundedValue, 2)

        result.push({
            x: roundedValue,
            y: parseFloat(calculatedY.toFixed(2))
        })
    }

    for (let value = maxValue; value <= maxValue + 1; value += step) {
        const roundedValue = parseFloat(value.toFixed(2))
        const calculatedY = Math.pow(roundedValue, 2)

        result.push({
            x: roundedValue,
            invisible: parseFloat(calculatedY.toFixed(2))
        })
    }

    return result
}
