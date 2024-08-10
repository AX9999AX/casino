'use client'

import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'

import { generateArray } from './Chart.helper'

export const Chart = () => {
    const [coordinateX, setCoordinateX] = useState<number>(1.5)

    const data = generateArray(coordinateX)

    return (
        <ResponsiveContainer height={220} width='100%'>
            <LineChart
                data={data}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
                <XAxis
                    dataKey='x'
                    padding={{ left: 0, right: 0 }} // Add this line to adjust the padding
                    scale='point'
                    tickMargin={10} // Optional: Adjust tick margin if needed
                    ticks={[1, 1.5, 2]}
                />
                <YAxis
                    domain={[0, 4]}
                    tickMargin={5} // Adjust tick margin if needed
                    ticks={[2, 4]}
                    width={30} // Adjust width to make it fit better if needed
                />
                <Line
                    dataKey='y'
                    dot={false}
                    isAnimationActive={true}
                    stroke='white'
                    strokeWidth={3}
                    type='monotone'
                />
                <Line
                    dataKey='invisible'
                    dot={false}
                    isAnimationActive={false}
                    stroke='none'
                    strokeWidth={0}
                    type='monotone'
                />
                <text
                    dominantBaseline='middle'
                    fill='white'
                    fontSize={42}
                    textAnchor='middle'
                    x='50%'
                    y='50%'
                >
                    {coordinateX.toFixed(2)}x
                </text>
            </LineChart>
        </ResponsiveContainer>
    )
}
