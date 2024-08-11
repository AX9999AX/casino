type Point = {
    x: number
    y?: number
    invisible?: number | null
}

export const generateArray = (maxValue: number): Point[] => {
    const maxPoints = 200 // Maximum number of points
    const step = maxValue / maxPoints > 0.01 ? maxValue / maxPoints : 0.01 // Dynamically calculate step
    const result: Point[] = []

    // Generate points
    for (let value = step + 1; value <= maxValue; value += step) {
        const roundedValue = parseFloat(value.toFixed(2))
        const calculatedY = Math.pow(roundedValue, 2)

        result.push({
            x: roundedValue,
            y: parseFloat(calculatedY.toFixed(2))
        })
    }

    // Generate the final point
    if (result.length < maxPoints) {
        const finalValue = maxValue + step // Use the calculated step for the last point
        const roundedValue = parseFloat(finalValue.toFixed(2))
        const calculatedY = Math.pow(roundedValue, 2)

        result.push({
            x: roundedValue,
            invisible: parseFloat(calculatedY.toFixed(2))
        })
    }

    return result
}
